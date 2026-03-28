import { PrismaClient } from '@prisma/client';

// In Prisma 6, this automatically finds your DATABASE_URL in .env
const prisma = new PrismaClient();

export { prisma };