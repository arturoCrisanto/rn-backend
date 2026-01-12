import { formatDateTime } from "./dateFormat.js";

// This logs messages with different severity levels
//  with the format time and level included in the log message
// Example: [INFO] 2024-06-01 12:00:00: Server started successfully
export const logger = {
  info: (message) => {
    console.log(`[INFO] ${formatDateTime(new Date())}: ${message}`);
  },
  warn: (message) => {
    console.warn(`[WARN] ${formatDateTime(new Date())}: ${message}`);
  },
  error: (message) => {
    console.error(`[ERROR] ${formatDateTime(new Date())}: ${message}`);
  },
  debug: (message) => {
    if (process.env.NODE_ENV === "development") {
      console.debug(`[DEBUG] ${formatDateTime(new Date())}: ${message}`);
    }
  },
};
