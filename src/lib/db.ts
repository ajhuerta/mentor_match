import { Redis } from '@upstash/redis'

const UPSTASH_REDIS_REST_TOKEN = process.env.UPSTASH_REDIS_REST_URL;
if (typeof UPSTASH_REDIS_REST_TOKEN === "undefined") {
  console.error("env `UPSTASH_REDIS_REST_TOKEN` must be set");
}
const UPSTASH_REDIS_REST_URL = process.env.UPSTASH_REDIS_REST_TOKEN;
if (typeof UPSTASH_REDIS_REST_URL === "undefined") {
  console.error("env `UPSTASH_REDIS_REST_URL` must be set");
}

export const db = new Redis({
  url: UPSTASH_REDIS_REST_TOKEN!,
  token: UPSTASH_REDIS_REST_URL!,
});