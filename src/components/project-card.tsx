import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import type { ReactElement } from "react";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props): ReactElement {
  const content = (
    <Card className="group/project h-full overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="object-cover transition-transform duration-300 group-hover/project:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <CardHeader>
        <CardTitle className="flex items-center gap-1.5">
          {project.title}
          {project.href && (
            <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover/project:translate-x-0.5 group-hover/project:-translate-y-0.5" />
          )}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-pretty">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <Badge key={tech.label} variant="secondary">
              {tech.label}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      >
        {content}
      </a>
    );
  }

  return content;
}
