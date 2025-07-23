export interface StatItemData {
  icon: string;
  label: string;
  count: number;
  color?: string;
}

export interface StatsGridProps {
  stats: StatItemData[];
}
