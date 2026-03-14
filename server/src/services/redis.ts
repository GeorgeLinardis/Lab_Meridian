import Redis from 'ioredis';

const client = new Redis(process.env.REDIS_URL!);

export const connectRedis = async (): Promise<void> => {
  try {
    await client.ping();
  } catch (e) {
    console.error(`Failed to connect to Redis at ${process.env.REDIS_URL}`);
    process.exit(1);
  }
};

export default client;
