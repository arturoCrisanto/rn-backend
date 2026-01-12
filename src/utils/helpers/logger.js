import { formatDateTime } from "./dateFormat.js";

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
