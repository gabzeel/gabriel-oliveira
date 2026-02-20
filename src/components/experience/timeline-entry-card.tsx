import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TimelineImageGrid } from "@/components/experience/timeline-image-grid";
import {
  formatDate,
  calculateDurationInMonths,
  formatDuration,
} from "@/lib/timeline-utils";
import type { TimelineEntry } from "@/types";

interface TimelineEntryCardProps {
  entry: TimelineEntry;
}

export function TimelineEntryCard({ entry }: TimelineEntryCardProps) {
  const months = calculateDurationInMonths(entry.startDate, entry.endDate);
  const duration = formatDuration(months);
  const formattedStart = formatDate(entry.startDate);
  const formattedEnd = formatDate(entry.endDate);
  const isPresent = entry.endDate === "Present";
  const companyImageSrc =
    typeof entry.companyImage === "string"
      ? entry.companyImage
      : entry.companyImage?.src;

  return (
    <div className="relative flex gap-4 md:gap-6 mb-10">
      <div className="flex flex-col items-center">
        <div
          className={`relative z-10 flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border-2 ${
            isPresent
              ? "border-primary bg-primary"
              : "border-muted-foreground/40 bg-background"
          }`}
        >
          {isPresent && (
            <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
          )}
        </div>
        {<div className="w-px flex-1 bg-border" />}
      </div>

      <div className="hidden w-28 shrink-0 flex-col pt-0.5 md:flex md:w-48">
        {companyImageSrc && (
          <img
            src={companyImageSrc}
            alt={`${entry.company} logo`}
            className="mb-2 size-10 rounded-full border border-border object-cover"
            loading="lazy"
          />
        )}
        <span className="text-md font-medium text-foreground">
          {entry.company}
        </span>
        <span className="text-xs text-muted-foreground">{entry.location}</span>
        <span className="text-xs text-muted-foreground">
          {formattedStart} - {formattedEnd}
        </span>
        <Badge variant="secondary" className="mt-2 w-fit text-xs">
          {duration}
        </Badge>
      </div>

      <Card className="flex-1 -mt-1.5 shadow-sm transition-shadow hover:shadow-md">
        <CardHeader>
          <div className="flex flex-col gap-3 md:hidden mb-3">
            <div className="flex items-center gap-3">
              {companyImageSrc && (
                <img
                  src={companyImageSrc}
                  alt={`${entry.company} logo`}
                  className="size-10 rounded-full border border-border object-cover"
                  loading="lazy"
                />
              )}
              <div className="flex flex-col">
                <span className="text-md font-medium text-foreground">
                  {entry.company}
                </span>
                <span className="text-xs text-muted-foreground">
                  {entry.location}
                </span>
                <span className="text-xs text-muted-foreground">
                  {formattedStart} - {formattedEnd}
                </span>
              </div>
            </div>
            <Badge variant="secondary" className="w-fit text-xs">
              {duration}
            </Badge>
          </div>
          <CardTitle className="text-lg font-semibold leading-tight text-card-foreground">
            {entry.title}
          </CardTitle>
          <CardDescription className="text-sm font-medium text-muted-foreground">
            {entry.summary}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {entry.items.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="shrink-0 text-base leading-6" aria-hidden="true">
                  {item.icon ? (
                    <item.icon className="size-4" />
                  ) : (
                    <span className="inline-block size-4" />
                  )}
                </span>
                <span className="text-sm leading-relaxed text-card-foreground/85">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>

          {entry.techStack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 justify-center">
              {entry.techStack.map((tech) => (
                <img
                  key={tech.label}
                  src={`https://img.shields.io/badge/${encodeURIComponent(tech.label)}-${tech.color}?style=flat&logo=${tech.logo}&logoColor=${tech.logoColor ?? "white"}`}
                  alt={tech.label}
                  className="h-5"
                  loading="lazy"
                />
              ))}
            </div>
          )}

          {entry.images.length > 0 && (
            <TimelineImageGrid images={entry.images} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
