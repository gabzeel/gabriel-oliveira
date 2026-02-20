import type { ProfileData } from "@/types";
import gabrielJpg from "../assets/gabriel.jpg";

export const PROFILE: ProfileData = {
  name: "Gabriel Oliveira",
  title: "Senior Software Engineer",
  greeting: "Olá, eu sou o Gabriel",
  description: "Sou um desenvolvedor que...",
  avatarUrl: gabrielJpg,
  socials: [
    { label: "GitHub", href: "https://github.com/gabzeel", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/gabzeel/",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:g.oliveiracamilo@gmail.com",
      icon: "email",
    },
    { label: "itch.io", href: "https://gabzeel.itch.io/", icon: "itch" },
  ],
  techStack: [
    { label: "Node.js", logo: "nodedotjs" },
    { label: "NestJS", logo: "nestjs" },
    { label: "TypeScript", logo: "typescript" },
    { label: "PostgreSQL", logo: "postgresql" },
    { label: "React", logo: "react" },
    {
      label: "AWS",
      logo: "amazonaws",
      url: "https://img.icons8.com/?size=100&id=33039&format=png&color=ffffff",
    },
    { label: "Unity", logo: "unity", logoColor: "black" },
    {
      label: "C#",
      logo: "csharp",
      url: "https://img.icons8.com/?size=100&id=55251&format=png&color=000000",
    },
  ],
};
