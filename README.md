# Tomionce - Market Price Predictor

**Know the price. Trust the number. See what comes next.**

Tomionce is a tomato and onion price intelligence service for Nigeria. It records and predicts market
prices with their source, unit and date; normalises them so markets can be compared fairly;
and publishes a forecast only when it has passed an evidence test.

> **Version 0.1.0** — closed for this cycle. See [`CHANGELOG.md`](CHANGELOG.md) and
> [`HANDOVER.md`](HANDOVER.md).

---

## The problem

In Nigerian produce markets, prices are real but price *information* is weak. One trader
quotes a basket, another a bag, a third half a bag. The unit changes, the date is guessed,
and the source is often a rumour. Buyers overpay, sellers underprice, and forecasts sound
confident without showing their work.

The problem is not a lack of opinions. It is a lack of evidence.

## What Tomionce does

### 1. Records the price

Every observation keeps the original price **and** the unit it was reported in, the market,
the date, the source and a trust label. Nothing is silently rounded into a fake “live” price.

### 2. Makes markets comparable

Prices are converted to a common per-kilogram basis only when a validated conversion exists.
If the conversion is not proven, the app says **not comparable** rather than forcing a number.
Tomato and onion are treated as separate commodities, never blended into one figure.

### 3. Earns the forecast

A forecast is a privilege, not a default. The engine is tested against simple benchmarks on
held-out history. A range appears only when the challenger beats the benchmark. If it loses,
the screen says **not published** and explains why. Forecasts are ranges for the next reporting
periods, not promises about tomorrow.

### 4. Shows the receipts

The Sources screen lists the dataset, licence, coverage counts and freshness window. Every price
carries its observation date and trust badge. Demonstration data is clearly labelled as synthetic.

### 5. Works on the phone in hand

Tomionce is an installable web app. It is designed for a low-cost Android phone and a weak
connection. Previously loaded pages and prices remain visible offline, with their original dates.

## Data and trust

- Core dataset: **WFP Nigeria Food Prices**, published through **HDX** under a
  **CC BY-IGO** licence.
- Current coverage: **4,182 real observations across 51 markets**, plus **312 clearly labelled
  demonstration observations** in two pilot markets.
- Tomato and onion coverage is counted separately.
- Prices older than **7 days** are badged **stale**, with the date shown.
- A missing price is `null`, never `0` and never “live”.
- No invented percentages, freshness claims, source counts, transport costs or arbitrage profits.
- Forecast publication is gated by backtest evidence against simple do-nothing benchmarks.

## Who it is for

The first user is the person who pays for the tomato: a shopper, a trader, a farmer or a small
restaurant. The second ring is cooperatives, market associations, NGOs, researchers and
policymakers who need a defensible price reference.

## Using Tomionce

The beginner walkthrough is in [`USER_GUIDE.md`](USER_GUIDE.md). The current demo build runs
locally at **http://localhost:5100**.

## Product status

**v0.1.0 is closed.** The product includes recorded prices, market comparison, the gated forecast,
source receipts, a beginner guide, and installable/offline behaviour. The next cycle is described
in [`ROADMAP.md`](ROADMAP.md).

## Ownership and confidentiality

Tomionce is a founder-owned product. The brand, product design, strategy, forecasting model and
execution engine are proprietary. The source code and internal engineering documentation are
maintained privately and are not licensed for reuse, redistribution or reverse engineering
without written permission.

The data remains subject to the licence of its original publisher. See [`NOTICE.md`](NOTICE.md).

## Documentation

| Document | Purpose |
| --- | --- |
| [`USER_GUIDE.md`](USER_GUIDE.md) | A plain-language walkthrough for first-time users |
| [`FOUNDER_DEMO_GUIDE.md`](FOUNDER_DEMO_GUIDE.md) | Founder narrative, demo script and talking points |
| [`HANDOVER.md`](HANDOVER.md) | Formal project handover, ownership and acceptance |
| [`CHANGELOG.md`](CHANGELOG.md) | What shipped in v0.1.0 and what is known |
| [`ROADMAP.md`](ROADMAP.md) | High-level themes for the next versions |
| [`NOTICE.md`](NOTICE.md) | Data attribution and proprietary notice |

Internal engineering, model and operations notes are held in `docs/internal/` and are
**confidential**. They are not part of the public product documentation.

## Data acknowledgement

WFP Nigeria Food Prices, distributed by the Humanitarian Data Exchange (HDX). The dataset is
used under its published CC BY-IGO licence. Tomionce is an independent product and is not
endorsed by WFP or HDX.

---

**Tomionce** — TOMato + ONion, one trusted engine.
