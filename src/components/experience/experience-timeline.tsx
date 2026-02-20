import { TimelineEntryCard } from "@/components/experience/timeline-entry-card";
import { EXPERIENCE } from "@/content/experience";
import type { TimelineEntry } from "@/types";

export function ExperienceTimeline() {
  return (
    <section aria-label="Work experience timeline" className="w-full">
      <div className="flex flex-col">
        {EXPERIENCE.map((entry, index) => (
          <div key={index} className="flex flex-col gap-2">
            <TimelineEntryCard entry={entry} />
          </div>
        ))}
      </div>
    </section>
  );
}
