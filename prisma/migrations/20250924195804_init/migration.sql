-- CreateTable
CREATE TABLE "public"."Screenshot" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "savedGameId" TEXT NOT NULL,

    CONSTRAINT "Screenshot_pkey" PRIMARY KEY ("id")
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
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "developer" TEXT NOT NULL,
    "freetogame_profile_url" TEXT NOT NULL,
    "game_url" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "game_id" INTEGER NOT NULL,
    "platform" TEXT NOT NULL,
    "publisher" TEXT NOT NULL,
    "release_date" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "SavedGame_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "confrimPassword" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MinimumSystemRequirements_savedGameId_key" ON "public"."MinimumSystemRequirements"("savedGameId");

-- CreateIndex
CREATE UNIQUE INDEX "SavedGame_game_id_key" ON "public"."SavedGame"("game_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Screenshot" ADD CONSTRAINT "Screenshot_savedGameId_fkey" FOREIGN KEY ("savedGameId") REFERENCES "public"."SavedGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MinimumSystemRequirements" ADD CONSTRAINT "MinimumSystemRequirements_savedGameId_fkey" FOREIGN KEY ("savedGameId") REFERENCES "public"."SavedGame"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SavedGame" ADD CONSTRAINT "SavedGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
