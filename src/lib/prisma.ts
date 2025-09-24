// lib/prisma.ts

import { PrismaClient } from "@/generated/prisma-client";

const connectionString = `${process.env.MIST_SQL_DB_PRISMA_DATABASE_URL}`;

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        datasources: {
            db: {
                url: connectionString,
            },
        },
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
