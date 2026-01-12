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
