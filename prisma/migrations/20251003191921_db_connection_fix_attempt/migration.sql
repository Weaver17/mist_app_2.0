-- CreateTable
CREATE TABLE "public"."Screenshot" (
    "id" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "savedGameId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "public"."MinimumSystemRequirements" (
    "id" TEXT NOT NULL,
    "os" TEXT,
    "graphics" TEXT,
    "memory" TEXT,
    "storage" TEXT,
    "processor" TEXT,
    "savedGameId" TEXT NOT NULL,

    CONSTRAINT "MinimumSystemRequirements_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."SavedGame" (
    "saved_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "freetogame_profile_url" TEXT NOT NULL,
    "game_url" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "id" INTEGER NOT NULL,
    "platform" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "SavedGame_pkey" PRIMARY KEY ("saved_id")
);

-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."session" (
    "id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "token" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."account" (
    "id" TEXT NOT NULL,
    "accountId" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "accessToken" TEXT,
    "refreshToken" TEXT,
    "idToken" TEXT,
    "accessTokenExpiresAt" TIMESTAMP(3),
    "refreshTokenExpiresAt" TIMESTAMP(3),
    "scope" TEXT,
    "password" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."verification" (
    "id" TEXT NOT NULL,
    "identifier" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Screenshot_id_key" ON "public"."Screenshot"("id");

-- CreateIndex
CREATE UNIQUE INDEX "MinimumSystemRequirements_savedGameId_key" ON "public"."MinimumSystemRequirements"("savedGameId");

-- CreateIndex
CREATE UNIQUE INDEX "SavedGame_id_key" ON "public"."SavedGame"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "public"."user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_name_key" ON "public"."user"("name");

-- CreateIndex
CREATE UNIQUE INDEX "session_token_key" ON "public"."session"("token");

-- AddForeignKey
ALTER TABLE "public"."Screenshot" ADD CONSTRAINT "Screenshot_savedGameId_fkey" FOREIGN KEY ("savedGameId") REFERENCES "public"."SavedGame"("saved_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MinimumSystemRequirements" ADD CONSTRAINT "MinimumSystemRequirements_savedGameId_fkey" FOREIGN KEY ("savedGameId") REFERENCES "public"."SavedGame"("saved_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SavedGame" ADD CONSTRAINT "SavedGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."session" ADD CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."account" ADD CONSTRAINT "account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
