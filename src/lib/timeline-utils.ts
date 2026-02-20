const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function formatDate(dateStr: string): string {
  if (dateStr === "Present") return "Present";
  const [year, month] = dateStr.split("-").map(Number);
  return `${MONTH_NAMES[month - 1]} ${year}`;
}

export function calculateDurationInMonths(
  startDate: string,
  endDate: string,
): number {
  const [startYear, startMonth] = startDate.split("-").map(Number);

  let endYear: number;
  let endMonth: number;

  if (endDate === "Present") {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
  } else {
    [endYear, endMonth] = endDate.split("-").map(Number);
  }

  return (endYear - startYear) * 12 + (endMonth - startMonth) + 1;
}

export function formatDuration(months: number): string {
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0)
    return `${remainingMonths} mo${remainingMonths !== 1 ? "s" : ""}`;
  if (remainingMonths === 0) return `${years} yr${years !== 1 ? "s" : ""}`;
  return `${years} yr${years !== 1 ? "s" : ""} ${remainingMonths} mo${remainingMonths !== 1 ? "s" : ""}`;
}
