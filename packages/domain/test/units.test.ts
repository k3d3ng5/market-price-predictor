import { describe, expect, it } from "vitest";
import {
  compareObservations,
  convertToPerKg,
  type Unit,
} from "../src/units.js";

const kgUnit: Unit = {
  id: "u_kg",
  commodityId: "tomato",
  name: "kg",
  aliases: ["kilo", "kilogramme"],
  kgEquivalent: 1,
  kgBasisNote: "scalar basis",
  status: "validated",
};

const basket: Unit = {
  id: "u_basket",
  commodityId: "tomato",
  name: "basket",
  aliases: ["painter basket"],
  kgEquivalent: 25,
  kgBasisNote: "weighed 5 Abuja baskets, mean 25.0 kg, 2026-10-15",
  status: "validated",
};

const painter: Unit = {
  id: "u_painter",
  commodityId: "tomato",
  name: "painter",
  aliases: [],
  kgEquivalent: null,
  kgBasisNote: null,
  status: "unvalidated",
};

describe("unit conversion (FR-P3, ADR-018)", () => {
  it("converts via validated kg equivalent", () => {
    // ₦50,000.00 for a 25 kg basket → ₦2,000/kg
    const result = convertToPerKg(5_000_000, basket);
    expect(result.ok).toBe(true);
    expect(result.pricePerKgMinor).toBe(200_000);
  });

  it("BLOCKS unvalidated units with a reason — never guesses", () => {
    const result = convertToPerKg(1_000_000, painter);
    expect(result.ok).toBe(false);
    expect(result.reason).toBe("unit_unvalidated");
  });

  it("rejects negative and non-integer money", () => {
    expect(convertToPerKg(-5, kgUnit).ok).toBe(false);
    expect(convertToPerKg(10.5, kgUnit).ok).toBe(false);
  });

  it("comparison across different commodities is refused", () => {
    const onionKg: Unit = { ...kgUnit, commodityId: "onion" };
    const result = compareObservations({
      unitA: kgUnit,
      unitB: onionKg,
      priceMinorA: 200_000,
      priceMinorB: 300_000,
    });
    expect(result.comparable).toBe(false);
    expect(result.reason).toBe("different_commodities");
  });

  it("comparison via two validated units produces percent difference", () => {
    const result = compareObservations({
      unitA: basket,
      unitB: kgUnit,
      priceMinorA: 5_000_000,
      priceMinorB: 210_000, // ₦2,100/kg vs ₦2,000/kg from the basket
    });
    expect(result.comparable).toBe(true);
    expect(result.percentDifference).toBe(5);
  });
});
