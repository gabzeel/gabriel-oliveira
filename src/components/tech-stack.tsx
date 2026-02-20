import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PROFILE } from "@/content/profile";

export function TechStack() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Tech Stack</CardTitle>
        <CardDescription>
          Principais ferramentas que utilizo no meu dia a dia
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-5">
          {PROFILE.techStack.map((tech) => {
            const logoUrl = tech.url
              ? tech.url
              : `https://cdn.simpleicons.org/${tech.logo}${tech.logoColor ? `/${tech.logoColor}` : ""}`;
            return (
              <div
                key={tech.label}
                className="flex flex-col items-center gap-2 rounded-md border border-transparent px-3 py-4 text-center transition-transform duration-200 hover:scale-105 hover:shadow"
              >
                <img
                  src={logoUrl}
                  alt={tech.label}
                  className="h-8 w-8"
                  loading="lazy"
                />
                <span className="text-xs font-medium text-muted-foreground">
                  {tech.label}
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
