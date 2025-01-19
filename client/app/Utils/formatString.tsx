export const formatDate = (date: string) => {
  const dateString = new Date(date);
  const formattedDate = dateString.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
};
