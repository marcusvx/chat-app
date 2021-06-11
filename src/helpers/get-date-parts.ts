export const getDateParts = (date: Date) => {
  const year = date.getFullYear();
  // fix for difference between client and server month handling. JS has zero-base month
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return { year, month, day };
};
