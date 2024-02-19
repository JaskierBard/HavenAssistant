export const checkStatsLevel = (bonus: number, quality: number): number => {
  const QM = Number((Math.sqrt(quality / 10) * bonus).toFixed(2));

  return QM;
};
