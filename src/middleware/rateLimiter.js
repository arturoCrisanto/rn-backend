import ratelimit from "../config/upstash.js";
import { sendErrorResponse } from "../utils/helpers/responseHelper.js";
import { logger } from "../utils/helpers/logger.js";

const ratelimiter = async (req, res, next) => {
  try {
    const ip = req.clientIp;
    const { success } = await ratelimit.limit(`ratelimit_${ip}`);
    if (!success) {
      return sendErrorResponse(
        res,
        "Too many requests, please try again later.",
        429
      );
    }
    next();
  } catch (error) {
    logger.error(`Rate Limiter Error: ${error.message}`);
    return sendErrorResponse(res, "Internal server error", 500);
  }
};
export default ratelimiter;
