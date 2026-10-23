-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "timezone" TEXT NOT NULL,
    "privacyRegime" TEXT
);

-- CreateTable
CREATE TABLE "Market" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "state" TEXT,
    "countryId" TEXT NOT NULL,
    "isPilot" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Market_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Commodity" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Unit" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "commodityId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "aliases" TEXT NOT NULL,
    "kgEquivalent" REAL,
    "kgBasisNote" TEXT,
    "status" TEXT NOT NULL,
    "countryId" TEXT,
    CONSTRAINT "Unit_commodityId_fkey" FOREIGN KEY ("commodityId") REFERENCES "Commodity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Source" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "owner" TEXT,
    "url" TEXT,
    "licence" TEXT,
    "frequency" TEXT,
    "validationStatus" TEXT NOT NULL,
    "attributionText" TEXT
);

-- CreateTable
CREATE TABLE "Observation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "commodityId" TEXT NOT NULL,
    "marketId" TEXT NOT NULL,
    "sourceId" TEXT NOT NULL,
    "priceMinor" INTEGER NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,
    "priceType" TEXT NOT NULL,
    "observedAt" DATETIME NOT NULL,
    "ingestedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "trustLabel" TEXT NOT NULL,
    "pricePerKgMinor" INTEGER,
    "normalisationMethod" TEXT,
    "supersedesId" TEXT,
    "isCurrent" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Observation_commodityId_fkey" FOREIGN KEY ("commodityId") REFERENCES "Commodity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Observation_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES "Market" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Observation_sourceId_fkey" FOREIGN KEY ("sourceId") REFERENCES "Source" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Observation_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "Unit" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Report" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "reporterId" TEXT NOT NULL,
    "idempotencyKey" TEXT NOT NULL,
    "commodityId" TEXT NOT NULL,
    "marketId" TEXT NOT NULL,
    "priceMinor" INTEGER NOT NULL,
    "currencyCode" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,
    "priceType" TEXT NOT NULL,
    "observedAt" DATETIME NOT NULL,
    "status" TEXT NOT NULL,
    "statusReason" TEXT,
    "channel" TEXT NOT NULL,
    "submittedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Report_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES "Market" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ConsentRecord" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "scope" TEXT NOT NULL,
    "version" TEXT NOT NULL,
    "granted" BOOLEAN NOT NULL,
    "at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "actorId" TEXT,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT,
    "at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "AssistantMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "conversationId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "toolCalls" TEXT,
    "verifierOutcome" TEXT,
    "feedback" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ForecastGate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "commodityId" TEXT NOT NULL,
    "marketId" TEXT NOT NULL,
    "horizonDays" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "reason" TEXT,
    "decidedBy" TEXT,
    "decidedAt" DATETIME,
    "backtestMape" REAL,
    CONSTRAINT "ForecastGate_commodityId_fkey" FOREIGN KEY ("commodityId") REFERENCES "Commodity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ForecastGate_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES "Market" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "JobRun" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "startedAt" DATETIME NOT NULL,
    "endedAt" DATETIME,
    "status" TEXT NOT NULL,
    "detail" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Country_code_key" ON "Country"("code");

-- CreateIndex
CREATE INDEX "Market_countryId_idx" ON "Market"("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "Commodity_slug_key" ON "Commodity"("slug");

-- CreateIndex
CREATE INDEX "Commodity_slug_idx" ON "Commodity"("slug");

-- CreateIndex
CREATE INDEX "Unit_commodityId_status_idx" ON "Unit"("commodityId", "status");

-- CreateIndex
CREATE INDEX "Source_name_idx" ON "Source"("name");

-- CreateIndex
CREATE INDEX "Observation_commodityId_marketId_observedAt_idx" ON "Observation"("commodityId", "marketId", "observedAt");

-- CreateIndex
CREATE INDEX "Observation_marketId_commodityId_isCurrent_idx" ON "Observation"("marketId", "commodityId", "isCurrent");

-- CreateIndex
CREATE UNIQUE INDEX "Report_idempotencyKey_key" ON "Report"("idempotencyKey");

-- CreateIndex
CREATE INDEX "Report_reporterId_submittedAt_idx" ON "Report"("reporterId", "submittedAt");

-- CreateIndex
CREATE INDEX "Report_status_idx" ON "Report"("status");

-- CreateIndex
CREATE INDEX "ConsentRecord_userId_scope_idx" ON "ConsentRecord"("userId", "scope");

-- CreateIndex
CREATE INDEX "AuditLog_entity_at_idx" ON "AuditLog"("entity", "at");

-- CreateIndex
CREATE INDEX "AssistantMessage_conversationId_createdAt_idx" ON "AssistantMessage"("conversationId", "createdAt");

-- CreateIndex
CREATE INDEX "ForecastGate_status_idx" ON "ForecastGate"("status");

-- CreateIndex
CREATE UNIQUE INDEX "ForecastGate_commodityId_marketId_horizonDays_key" ON "ForecastGate"("commodityId", "marketId", "horizonDays");

-- CreateIndex
CREATE INDEX "JobRun_name_startedAt_idx" ON "JobRun"("name", "startedAt");
