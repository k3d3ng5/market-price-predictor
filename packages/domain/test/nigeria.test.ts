import { describe, expect, it } from "vitest";
import { BEGINNER_GUIDE_STEPS, marketDisplay, stateInitials } from "../src/nigeria.js";

describe("Nigerian state initials (ADR-020 registry)", () => {
  it("maps WFP admin1 names to initials", () => {
    expect(stateInitials("Borno")).toBe("BO");
    expect(stateInitials("Yobe")).toBe("YO");
    expect(stateInitials("Adamawa")).toBe("AD");
    expect(stateInitials("FCT")).toBe("FC");
  });

  it("handles case and synonyms", () => {
    expect(stateInitials("borno")).toBe("BO");
    expect(stateInitials("Federal Capital Territory")).toBe("FC");
  });

  it("never invents initials for unknown states", () => {
    expect(stateInitials("Atlantis")).toBeNull();
    expect(stateInitials(null)).toBeNull();
  });

  it("market display appends initials only when state is known", () => {
    expect(marketDisplay("Abba Gamaram", "Borno")).toBe("Abba Gamaram (BO)");
    expect(marketDisplay("Wuse Market", "fct")).toBe("Wuse Market (FC)");
    expect(marketDisplay("Unknown Market", "Atlantis")).toBe("Unknown Market");
  });

  it("beginner guide covers the four trust-critical lessons", () => {
    const keys = BEGINNER_GUIDE_STEPS.map((s) => s.key);
    expect(keys).toEqual(["receipts", "chips", "gate", "stale"]);
    for (const step of BEGINNER_GUIDE_STEPS) {
      expect(step.body.length).toBeLessThan(220); // readability: one breath each
    }
  });
});
