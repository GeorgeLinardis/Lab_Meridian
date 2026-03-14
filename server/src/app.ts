import Fastify, {type FastifyInstance} from 'fastify';
import cors from '@fastify/cors'

import { IS_DEV } from './config/constants';
import type { ApiResponse } from "./types/api.ts";

const app: FastifyInstance = Fastify({ logger: IS_DEV });

await app.register(cors, {
  origin: (origin: string | undefined, cb) => {
    if (IS_DEV) {
      cb(null, true);
      return;
    }
    const allowed = process.env.CLIENT_URL;
    if (allowed && origin === allowed) {
      cb(null, true);
    } else {
      cb(new Error('Forbidden'), false);
    }
  }
});

app.get('/server/health', async (): Promise<ApiResponse<{ status: string, timestamp: string }>> => {
  return { success: true, data: { status: 'ok', timestamp: new Date().toISOString() } };
});

export default app;
