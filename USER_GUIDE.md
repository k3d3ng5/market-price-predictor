# Tomionce — User Guide

**A five-minute walkthrough for first-time users.**

Tomionce helps you answer four questions about tomatoes and onions in Nigerian markets:

1. What was the recorded price?
2. How does it compare with another market?
3. What might happen next?
4. Where did the number come from?

You do not need an account. You do not need to buy anything. The app is a price reference,
not a marketplace.

---

## Before you start

- Use any modern phone browser.
- The first visit needs an internet connection.
- After that, pages you have already opened can remain available offline.
- Prices come from recorded market data. They are **not live**, and the app always shows the
  date they were observed.

---

## The four-step tour

### Step 1 — Choose a commodity

At the top of the **Prices** screen, choose:

- **Tomatoes**, or
- **Onions**.

Tomato and onion are separate. A tomato price is never compared with an onion price.

### Step 2 — Choose a market

Tap the **Market** selector. Markets show the state initials, for example:

- **Mafa (BO)** — Borno
- **Bade (Gashua) (YO)** — Yobe
- **Wuse Market (FC)** — Federal Capital Territory

The list shows how many observations exist for that commodity and when the latest one was
recorded. Choose a market with a recent date when you want the most current picture.

### Step 3 — Read the price card

The card tells you what was recorded, not what someone hopes to sell for today.

You will see:

- the **price** as reported;
- the **unit** it was reported in, such as `0.5 KG` or `50 KG`;
- the **normalised price per kilogram**, when the conversion is validated;
- the **source**;
- the **observation date**;
- a **trust badge**;
- a **freshness badge** — `fresh` or `stale`;
- the **change** from the previous observation, when available.

### Step 4 — Explore

Use the bottom navigation to move between:

- **Prices** — the latest recorded price and recent history.
- **Forecast** — a backtested range, or an honest refusal.
- **Compare** — two markets on a per-kilogram basis.
- **Sources** — licences, coverage and the rules behind the numbers.

---

## Reading the price card

| Element | What it means |
| --- | --- |
| **Price** | The amount recorded in the market, in the unit the reporter used. |
| **Unit** | The original unit. Never silently converted. |
| **Per kg** | A common basis for comparison, shown only when the conversion is validated. |
| **Source** | Who published the record, for example WFP Nigeria Food Prices. |
| **Date** | When the price was observed. This is not necessarily today. |
| **Trust badge** | How much verification the record has. See the table below. |
| **Freshness** | `fresh` means within 7 days; `stale` means older, and the date is shown. |
| **Change** | The movement from the previous observation, with the comparison basis. |

### Trust badges in plain words

| Badge | Meaning |
| --- | --- |
| **Official statistic** | Published by an official statistical source, such as WFP or NBS. |
| **Verified report** | Checked against a trusted reporting process. |
| **Estimated** | Derived by a model or a conversion, not directly observed. |
| **Unverified** | Recorded but not yet reviewed. Treat with caution. |
| **Demonstration data** | Synthetic data used to demonstrate the app. Clearly labelled. |

If a price is missing, Tomionce says so. It never shows `₦0` as if that were a real price.

---

## Comparing two markets

Open **Compare**.

1. Choose the commodity.
2. Choose the **first market**.
3. Choose the **second market**.
4. Read the per-kilogram comparison.

The comparison is only made when both sides can be converted to a validated per-kilogram
basis. If they cannot, the app explains why instead of inventing a number.

### Watch the dates

Two markets may have been observed on different dates. If the gap is large, Tomionce warns
you that part of the difference may be **time**, not location. Always read the dates before
acting on a comparison.

---

## Understanding the forecast

Open **Forecast**.

1. Choose the commodity.
2. Choose a market with enough recorded history.
3. Choose a **backtest horizon**: 1, 2, 4 or 8 observations ahead.
4. Read the evidence.

The horizon is measured in **observations**, not days. The underlying source reports roughly
monthly, so “4” means four reporting periods ahead, not four days.

### What “published” means

A forecast is published only when the challenger model has beaten a simple do-nothing benchmark
on held-out history. The screen shows:

- the history end date;
- how old the last observation is;
- the backtest table, including the benchmark;
- a range, not a single promised price;
- the reliability note.

### What “not published” means

Sometimes the screen says **NOT PUBLISHED**. This is not a bug. It means the model did not
earn the right to speak for that market. Common reasons:

- the history is too short;
- the latest observation is too old;
- the challenger lost to the benchmark.

Tomionce would rather show you an honest refusal than a confident guess.

---

## Checking the sources

Open **Sources**.

You will see:

- the datasets used;
- their licences;
- the number of observations;
- the number of markets with real data;
- the observation date range;
- the freshness window;
- the trust-label legend;
- the honesty rules the product follows.

This is the page to check when you want to know whether a number is official, estimated,
stale or synthetic.

---

## Installing the app

Tomionce is an installable web app. To install it:

- **Android / Chrome:** open the browser menu and choose **Add to Home screen** or **Install app**.
- **iPhone / Safari:** tap **Share**, then **Add to Home Screen**.

The installed app opens like a normal app and keeps the same data.

## Using Tomionce offline

If you lose your connection:

- pages you have already opened may still load;
- previously loaded prices may still be visible;
- the dates stay exactly as they were recorded;
- the app may show an **offline** notice.

Offline data is not “live”. It is the last synced information, and the date tells you how old
it is.

---

## Frequently asked questions

**Are these prices live?**
No. They are recorded observations. The source reports periodically, and the app shows the
observation date on every price.

**Why does a price say “stale”?**
Because it is older than 7 days. Stale and labelled is safer than fresh and fake. Check the date
before using it.

**Why can’t I compare some markets?**
The units may not have a validated conversion, or one side may be missing. The app explains the
block instead of inventing a comparison.

**Why is there no forecast for my market?**
The market may have too little history, the latest record may be too old, or the model may have
lost to the benchmark. The screen tells you which.

**Is the forecast a guarantee?**
No. It is a range with evidence attached. It is not financial advice and it is not a promise.

**Does Tomionce buy or sell produce?**
No. Tomionce is a price intelligence service. It does not trade, transport or store produce.

**Why do some markets say “Demonstration data”?**
They use synthetic data to show how the product works. They are clearly labelled so they are
never mistaken for real market records.

**Why is the price different from what I paid today?**
Market prices vary by quality, quantity, negotiation, location and date. Tomionce records a
reference observation; it does not replace the price in front of you.

---

## Limits and safety

- Always check the **date** and **unit** before using a price.
- A recorded price is not a guarantee of the price you will be offered.
- A forecast is a range, not a promise.
- Tomionce is not a financial adviser, broker or trading platform.
- If a number looks wrong, use the Sources screen to check where it came from.

---

## Need help?

Use the **?** button in the header to reopen the in-app guide at any time.

For product, partnership or data questions, contact the Founder through the private Tomionce
channel.
