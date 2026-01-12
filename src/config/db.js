import mongoose from "mongoose";
import { logger } from "../utils/helpers/logger.js";

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // connect to MongoDB using the connection string from environment variables
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    logger.info(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
