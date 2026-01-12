import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import "dotenv/config";

const ratelimit = new Ratelimit({
  // Create a new ratelimiter, that allows 100 requests per 60 seconds
  redis: Redis.fromEnv(),
  // 100 requests per 60 seconds
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default ratelimit;
