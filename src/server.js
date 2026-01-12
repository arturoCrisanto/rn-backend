import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import transactionRoutes from "./routes/transactionRoutes.js";
import ratelimiter from "./middleware/rateLimiter.js";
import job from "./config/cron.js";
import { logger } from "./utils/helpers/logger.js";
import { sendSuccessResponse } from "./utils/helpers/responseHelper.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "TESTING") {
  job.start();
}

// Middleware
app.use(ratelimiter);
app.use(cors());
app.use(express.json());

// Routes
app.get("/api/health", (req, res) => {
  sendSuccessResponse(res, null, "Server is healthy", 200);
});

app.use("/api/transactions", transactionRoutes);

app.listen(PORT, () => {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.API_URL
      : `http://localhost:${PORT}`;

  logger.info(`Server is running on ${baseUrl}`);
});
