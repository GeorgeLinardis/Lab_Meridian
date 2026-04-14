import Redis from 'ioredis';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RedisService {
  private client!: Redis;
  private readonly logger = new Logger(RedisService.name);

  async onModuleInit(): Promise<void> {
    this.client = new Redis(process.env.REDIS_URL!);
    try {
      const redisResponse = await this.client.ping();
      this.logger.log(
        redisResponse
          ? 'Response from Redis successfully'
          : 'No response from Redis',
      );
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error(error.message);
        throw error;
      }
    }
  }
  onModuleDestroy(): void {
    void this.client.quit();
  }
}
