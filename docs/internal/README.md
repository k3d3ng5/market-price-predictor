# Tomionce — Internal Documentation

**CONFIDENTIAL. DO NOT PUBLISH, SHARE OR INCLUDE IN PUBLIC DEMOS.**

This folder contains the working recipe behind Tomionce: architecture, data pipeline, forecast
engine, model decisions, operations and known issues. It is kept in the private repository so the
Founder and authorised collaborators can maintain and upgrade the product.

## Contents

| Document | Purpose |
| --- | --- |
| [`01_PRD_ProducePrice_v3.0.md`](01_PRD_ProducePrice_v3.0.md) | Product requirements and scope |
| [`02_Implementation_Plan_v1.0.md`](02_Implementation_Plan_v1.0.md) | Delivery plan and work breakdown |
| [`03_ADR_Log.md`](03_ADR_Log.md) | Architecture decision record |
| [`ENGINEERING_HANDOVER.md`](ENGINEERING_HANDOVER.md) | Stack, architecture, data model, API and client |
| [`OPERATIONS_RUNBOOK.md`](OPERATIONS_RUNBOOK.md) | Install, run, build, ingest, backup and troubleshoot |
| [`MODEL_AND_STRATEGY.md`](MODEL_AND_STRATEGY.md) | Sealed model, backtest and gate details |

## Publication rule

Public product documentation (root README, user guide, founder demo guide, handover, changelog,
roadmap, notice) must describe **behaviour and evidence**, not the recipe.

Do **not** copy any of the following into public material:

- stack, framework or database choices;
- repository structure or internal file paths;
- model family, features, parameters, backtest design or gate thresholds;
- internal ranking and default-selection logic;
- deployment, secrets or operational procedures;
- source code excerpts.

If the repository is ever made public, remove this folder from the public tree first. If the
recipe must remain available, move it to a separate private repository.

## Confidentiality

- The repository is currently private.
- The Founder owns the contents.
- Authorised collaborators may read this folder only for maintenance and upgrade work.
- The engineering consultant remains bound by the confidentiality expectations in
  [`../../HANDOVER.md`](../../HANDOVER.md).
