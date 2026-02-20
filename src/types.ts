import type { ImageMetadata } from "astro";
import type { LucideIcon } from "lucide-react";

export interface TechBadge {
  label: string;
  url?: string;
  logo?: string;
  color?: string;
  logoColor?: string;
}

export interface TimelineItem {
  icon?: LucideIcon;
  text: string;
}

export interface TimelineEntry {
  title: string;
  company: string;
  companyImage?: ImageMetadata | string;
  summary: string;
  startDate: string;
  location: string;
  endDate: string | "Present";
  items: TimelineItem[];
  images: ImageMetadata[];
  techStack: TechBadge[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "email" | "website" | "itch";
}

export interface ProfileData {
  name: string;
  title: string;
  greeting: string;
  description: string;
  avatarUrl: ImageMetadata;
  socials: SocialLink[];
  techStack: TechBadge[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  href?: string;
  techStack: TechBadge[];
}
