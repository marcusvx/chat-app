export const formatTime = (time: string | number): string => {
  const date =
    typeof time === "string"
      ? new Date(Date.parse(time))
      : new Date(new Date(new Date().setHours(time)).setMinutes(0));

  return date.toLocaleTimeString([], { timeStyle: "short" });
};
