import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  constructor() {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL as string,
    });
    super({ adapter });
  }

  async onModuleInit(): Promise<void> {
    try {
      this.logger.log('Attempting to connect to Prisma');
      await this.$connect();
      this.logger.log('Prisma connected');
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
        throw error;
      }
    }
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }
}
