import { ArrowRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PROJECTS } from "@/content/projects";
import { Button } from "./ui/button";

export function ProjectsCarousel() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">Projetos</CardTitle>
        <Button variant="ghost" size="sm" asChild>
          <a href="/projects" className="gap-1.5 text-xs text-muted-foreground">
            Ver todos
            <ArrowRight className="size-3.5" />
          </a>
        </Button>
      </CardHeader>
      <CardContent>
        <Carousel opts={{ align: "start", loop: false }} className="w-full">
          <CarouselContent className="-ml-3">
            {PROJECTS.length == 0 ? (
              <div className="px-6 text-center text-sm text-slate-500">
                Nenhum projeto para mostrar por enquanto.
              </div>
            ) : (
              PROJECTS.map((project) => (
                <CarouselItem
                  key={project.id}
                  className="basis-full pl-3 sm:basis-[80%] md:basis-[70%]"
                >
                  <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-secondary/30">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 70vw"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-4">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold text-foreground leading-snug">
                          {project.title}
                        </h3>
                        {project.href && (
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            aria-label={`Open ${project.title} in new tab`}
                          >
                            <ExternalLink className="size-3.5" />
                          </a>
                        )}
                      </div>

                      <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
                        {project.description}
                      </p>

                      {project.techStack.length > 0 && (
                        <div className="mt-auto flex flex-wrap gap-1">
                          {project.techStack.map((tech) => (
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
                  </div>
                </CarouselItem>
              ))
            )}
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
