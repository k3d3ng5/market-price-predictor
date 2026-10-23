# Tomionce — Founder Demo Guide

**Purpose:** a public-safe script and briefing for demonstrating Tomionce without exposing the
implementation recipe.

**Audience:** shoppers, traders, farmers, cooperatives, partners, reviewers, investors and
policymakers.

**Length:** 30 seconds, 3 minutes, or 8 minutes. Use the version that fits the room.

> **Golden rule:** show the evidence, not the engine. The product's credibility comes from
> receipts, dates and honest refusals — not from revealing how the model is built.

---

## The one-line pitch

> “Tomionce is a price truth machine for tomatoes and onions in Nigeria. It records what the
> market actually said, shows you the receipt, and only predicts the future when the prediction
> has passed a test.”

That sentence is the whole company. Everything else is proof.

---

## 30-second version

> “In Nigerian produce markets, everyone has a price, but nobody has a receipt. Tomionce records
> tomato and onion prices with their unit, source and date, converts them to a fair per-kilogram
> basis, and lets you compare markets. It also forecasts — but only when the forecast beats a
> simple benchmark on held-out history. If it doesn't, the app says ‘not published’. That honesty
> is the product. I'm the founder of Tomionce, and this is the standard I built it to keep.”

---

## 3-minute demo script

### 0:00 — Open with the problem

**Say:**

> “Imagine buying tomatoes with no price tag, no receipt and no referee. One trader quotes a
> basket, another a bag, a third half a bag. The price is real, but the information is not
> trustworthy. Farmers, shoppers and traders make important decisions on rumour. And when people
> forecast, they usually sound certain without showing their work.”

**Pause.** Let the problem land.

> “The problem is not a lack of opinions. It is a lack of evidence.”

### 0:25 — Introduce the product

> “Tomionce is my answer. It is a simple price intelligence service for tomatoes and onions.
> It answers four questions: What was the recorded price? How does it compare? What might happen
> next? And where did the number come from?”

### 0:45 — Show the Prices screen

**Open:** Prices → Tomatoes → Mafa (BO).

**Point to, in this order:**

1. The price and the **unit** it was reported in.
2. The **per-kilogram** value.
3. The **source**.
4. The **observation date**.
5. The **stale** badge.
6. The **change** from the previous observation.

**Say:**

> “This is a real recorded price. We keep the original unit, show the normalised per-kilo value,
> and put the source and the date on the card. If the record is older than seven days, it wears a
> stale badge. We do not call old data ‘live’. Stale and labelled is safer than fresh and fake.”

> “Tomato and onion are separate products. We never blend them into one number.”

### 1:15 — Show Compare

**Open:** Compare → Tomatoes → two markets with the same observation date.

**Say:**

> “Here is the same commodity in two markets, both normalised per kilogram. The app warns me if
> the two observations are far apart in time, because part of the gap may be time, not location.
> If a unit cannot be validated, we block the comparison instead of inventing a number.”

### 1:40 — Show the Forecast and the gate

**Open:** Forecast → the market with the deepest history.

**Point to:**

1. The history end date and how old it is.
2. The prominent warning if the pair is stale.
3. The **NOT PUBLISHED** state, if shown.
4. The backtest table.
5. The explanation of why no range was published.

**Say:**

> “This is the part I am proudest of. A forecast has to earn the right to speak. We test the
> challenger against simple benchmarks on history the model has not seen. If it beats the
> benchmark, we publish a range. If it loses, we publish nothing and say why.”

> “On this market, the challenger lost to the do-nothing benchmark. So Tomionce refused to
> publish. That blocked screen is not a failure. It is the product working.”

> “The recipe behind the engine is proprietary. The evidence is public. I can show you the
> scorecard without giving away the kitchen.”

### 2:20 — Show the Sources screen

**Open:** Sources.

**Point to:**

- the dataset and its licence;
- the number of observations;
- the number of markets with real data;
- the observation date range;
- the freshness window;
- the demonstration-data label.

**Say:**

> “This page is the receipt for the whole product. You can see where the data comes from, what
> licence it uses, how much of it is real, and what is demonstration data. If a number is
> synthetic, we say so.”

### 2:45 — Close with the standard

> “Tomionce is not a trading app. We don't sell tomatoes; we tell you the truth about their
> prices. It is a public price service that records, compares and forecasts only when the evidence
> allows. That is the product. That is the standard.”

---

## 8-minute deep dive (optional)

Use this structure if you have more time.

### 1. The problem in one picture

- Prices are oral, scattered and unit-inconsistent.
- Buyers and sellers have no shared reference.
- Forecasts are usually confident guesses.
- Bad information is expensive for the people with the least margin.

### 2. The product in one sentence

> “Tomionce turns scattered market quotes into dated, sourced, comparable price records — and
> only forecasts when the forecast has passed an evidence test.”

### 3. The data

- Core source: **WFP Nigeria Food Prices**, via **HDX**, under **CC BY-IGO**.
- Current scale: **4,182 real observations across 51 markets**, plus **312 labelled demonstration
  observations** in two pilot markets.
- Every record keeps its original price, unit, market, date and trust label.
- We do not invent a price, a percentage or a freshness claim.

### 4. The engine, in plain language

Describe the behaviour, not the implementation:

- **Two brains:** a historical record and a forecasting layer.
- **One rulebook:** the same rules govern the screen and the service, so they cannot tell
  different stories.
- **Fair units:** conversion to per-kilogram only when the conversion is validated.
- **Separate commodities:** tomato and onion are modelled separately.
- **Earned forecasts:** simple benchmarks first; the challenger must beat them on held-out
  history before a range is shown.

Do **not** name internal frameworks, model families, parameters, thresholds or code structure.

### 5. Why it was built this way

Three constraints shaped it:

1. **Trust** — no invented prices, no confident forecast without evidence.
2. **Cost** — a lightweight app that works on the phone people already own.
3. **Connectivity** — installable, offline-friendly, small payloads.

### 6. Who it serves

- **Primary:** shoppers, traders, farmers, small restaurants.
- **Secondary:** cooperatives, market associations, NGOs, researchers, policymakers.

### 7. The service

Tomionce is a public price intelligence service:

- check a recorded price;
- compare two markets fairly;
- see a forecast only when it is earned;
- inspect the source and licence;
- keep working when the network drops.

It is **not** a marketplace, a broker, a transporter or a financial adviser.

### 8. The close

> “I built Tomionce so that a trader in a rural market and a shopper in the city can look at the
> same number and see the same receipts. The model is private. The evidence is public. That is
> how trust scales.”

---

## Questions you may be asked

**“Are these prices live?”**
> “No. They are recorded observations. The source reports periodically, and every price shows
> the date it was observed. We never call old data live.”

**“How accurate is the forecast?”**
> “The app shows the backtest evidence. If the challenger does not beat the simple benchmark, we
> do not publish a range. You can see the scorecard, and you can see when we refuse.”

**“Where does the data come from?”**
> “The core dataset is WFP Nigeria Food Prices, published through HDX under a CC BY-IGO licence.
> Demonstration markets are clearly labelled synthetic data.”

**“Why should I trust you?”**
> “Don't trust me. Check the receipts. Every price has a source, a date, a unit and a trust
> badge. Every forecast has a benchmark. If we can't verify it, we say so.”

**“What is your business model?”**
> “This version is about proving trust and usefulness. The commercial model comes next, and I
> will not promise a revenue number I cannot defend.”

**“Did you build this yourself?”**
> “I designed the product, set the rules and directed the build. I use modern engineering tools,
> but the product decisions, standards and final review are mine.”

**“Is the model proprietary?”**
> “Yes. I can show you the evidence and the output. The engine itself is private.”

**“What is next?”**
> “Persisting the gate decisions, improving coverage, adding alerting and partner tools, and
> taking the product from a local demo to a production service. The roadmap is public at a high
> level; the engineering details are private.”

**“Can I invest?”**
> “I am happy to talk about partnership and investment after you have seen the demo and the
> evidence. I will not discuss numbers I cannot substantiate.”

---

## What not to say

Avoid these claims. They are either false or they give away the recipe.

- ❌ “Live prices.”
- ❌ “Guaranteed accuracy.”
- ❌ “This will make you a profit.”
- ❌ “WFP endorses Tomionce.” (It does not.)
- ❌ “The demonstration data is real.”
- ❌ “Our model is [specific algorithm/stack].”
- ❌ “We have thousands of users” (unless it is true and measured).
- ❌ “The forecast is always right.”
- ❌ Any transport, arbitrage or profit figure that is not in the product and backed by data.

Say instead:

- ✅ “Recorded prices, with dates.”
- ✅ “A range, with evidence.”
- ✅ “Published only when it beats the benchmark.”
- ✅ “Demonstration data is labelled.”
- ✅ “The engine is proprietary; the evidence is public.”

---

## Demo checklist

Before you record:

- [ ] API and web app are running.
- [ ] The browser is on the production build, not a stale tab.
- [ ] The guide has been dismissed, or you are ready to use it as a feature.
- [ ] Prices screen shows a real market with a visible date and stale/fresh badge.
- [ ] Compare shows two markets with dates and a per-kg comparison.
- [ ] Forecast shows the history end date, the warning state, and either a published range or a
      blocked forecast with the backtest table.
- [ ] Sources shows the real counts, licence and freshness window.
- [ ] You have said the proprietary line once, calmly: “The engine is private; the evidence is
      public.”
- [ ] You have closed with the standard, not with a sales pitch.

**Three moments that explain the whole company:**

1. A price with its unit, source, date and stale badge.
2. A forecast that is blocked, with the backtest visible.
3. The Sources page with real counts and licences.

If you only have one minute, show those three.

---

## Founder close

> “Tomionce is not trying to sound smart. It is trying to be right — or honest enough to say it
> isn't sure. I'm the founder, and that is the standard this product will be held to.”
