import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { EXPERIENCE } from "@/content/experience";
import { formatDate } from "@/lib/timeline-utils";

export function ExperienceCarousel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Experiências</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <a
            href="/experience"
            className="gap-1.5 text-xs text-muted-foreground"
          >
            Ver detalhes
            <ArrowRight className="size-3.5" />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-3">
            {EXPERIENCE.map((entry, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-3 sm:basis-[50%] md:basis-[50%]"
              >
                <div className="flex h-full flex-col gap-3 rounded-xl border border-border bg-secondary/30 p-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm font-semibold text-foreground leading-snug">
                      {entry.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {entry.company}
                    </p>
                    <p className="text-xs text-pretty mt-2">
                      {entry.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">
                      {formatDate(entry.startDate)} &ndash;{" "}
                      {entry.endDate === "Present"
                        ? "Present"
                        : formatDate(entry.endDate)}
                    </span>
                  </div>

                  {entry.techStack.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-1">
                      {entry.techStack.slice(0, 5).map((tech) => (
                        <img
                          key={tech.label}
                          src={`https://img.shields.io/badge/${encodeURIComponent(tech.label)}-${tech.color}?style=flat&logo=${tech.logo}&logoColor=${tech.logoColor ?? "white"}`}
                          alt={tech.label}
                          height={20}
                          className="h-5"
                          loading="lazy"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-4 flex justify-end gap-2">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </CardContent>
    </Card>
  );
}
