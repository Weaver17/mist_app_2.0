// lib/prisma.ts

import { PrismaClient } from "../../generated/prisma-client";

// const connectionString =
//     process.env.NODE_ENV === "production"
//         ? process.env.DATABASE_URL!
//         : process.env.MIST_SQL_DB_PRISMA_DATABASE_URL!;

let globalForPrisma = global as unknown as { prisma: PrismaClient };

let prisma = new PrismaClient({
    datasources: {
        db: {
            url: process.env.MIST_SQL_DB_PRISMA_DATABASE_URL,
        },
    },
});

if (typeof window === "undefined") {
    if (process.env.NODE_ENV === "production") {
        prisma = new PrismaClient({
            datasources: {
                db: {
                    url: process.env.DATABASE_URL,
                },
            },
        });
    } else {
        if (!globalForPrisma) {
            globalForPrisma = global as unknown as { prisma: PrismaClient };
        }

        prisma = globalForPrisma.prisma || (globalForPrisma.prisma = prisma);
    }
} else {
    throw new Error("Attempt to use prisma in client");
}

export default prisma;
