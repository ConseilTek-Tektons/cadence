export function portfolioRisk(blockedDays: number, capacityPercent: number, overdueDependencies: number) {
  const score = Math.min(100, Math.max(0, blockedDays * 4 + Math.max(0, capacityPercent - 85) * 2 + overdueDependencies * 12));
  return { score, level: score >= 70 ? "critical" : score >= 35 ? "watch" : "healthy" } as const;
}
