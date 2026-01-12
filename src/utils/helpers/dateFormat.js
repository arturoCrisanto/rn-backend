/**
 * Format date to "May 15, 2026" format
 * @param {Date | string | number} date - The date to format
 * @returns {string} Formatted date string
 */
export const formatDate = (date) => {
  const dateObj = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return dateObj.toLocaleDateString("en-US", options);
};

/**
 * Format date to ISO string (YYYY-MM-DD)
 * @param {Date | string | number} date - The date to format
 * @returns {string} Formatted date string
 */
export const formatDateISO = (date) => {
  const dateObj = new Date(date);
  return dateObj.toISOString().split("T")[0];
};

/**
 * Format date with time (May 15, 2026 10:30 AM)
 * @param {Date | string | number} date - The date to format
 * @returns {string} Formatted date and time string
 */
export const formatDateTime = (date) => {
  const dateObj = new Date(date);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return dateObj.toLocaleDateString("en-US", options);
};
