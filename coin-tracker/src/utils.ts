export const getStartEndTime = (current: number) => {
  const end = Math.floor(current / 1000);
  const start = end - 60 * 60 * 24 * 7;

  return { start, end };
};
