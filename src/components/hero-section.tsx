import { PROFILE } from "@/content/profile";
import { SocialIcon } from "./icons/social-icon";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
      <img
        src={PROFILE.avatarUrl.src}
        alt={`Photo of ${PROFILE.name}`}
        className="object-cover rounded-full shadow-lg h-44 w-44"
      />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {PROFILE.greeting}
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground text-balance md:text-4xl">
          {PROFILE.name}
        </h1>
        <p className="text-lg text-muted-foreground">{PROFILE.title}</p>
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty">
          {PROFILE.description}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          {PROFILE.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <SocialIcon type={social.icon} />
              <span>{social.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
