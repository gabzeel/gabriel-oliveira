import type { ReactElement } from "react";
import HeaderLink from "./HeaderLink";
import { Button } from "./ui/button";
import { PROFILE } from "@/content/profile";
import { SocialIcon } from "./icons/social-icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download } from "lucide-react";
import brazilFlag from "@/assets/flag-for-brazil-svgrepo-com.svg";
import usaFlag from "@/assets/flag-for-united-states-svgrepo-com.svg";

type Props = {
  currentPath: string;
};

export default function Header({ currentPath }: Props): ReactElement {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center gap-4 px-4">
        <h2 className="text-base font-bold">
          <a
            href="/"
            className="text-slate-900 transition-colors hover:text-slate-700"
          >
            Gabriel Oliveira
          </a>
        </h2>
        <nav className="hidden flex-1 items-center justify-center md:flex">
          <ul className="flex items-center gap-1">
            <li>
              <HeaderLink href="/" currentPath={currentPath}>
                Home
              </HeaderLink>
            </li>
            <li>
              <HeaderLink href="/experience" currentPath={currentPath}>
                Experiências
              </HeaderLink>
            </li>
            <li>
              <HeaderLink href="/projects" currentPath={currentPath}>
                Projetos
              </HeaderLink>
            </li>
            <li>
              <HeaderLink href="/blog" currentPath={currentPath}>
                Blog
              </HeaderLink>
            </li>
            <li>
              <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="cursor-pointer inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
                  >
                    Curriculum
                    <Download className="size-4" aria-hidden="true" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuItem asChild>
                    <a
                      href="/gabriel-oliveira-portugues.pdf"
                      className="cursor-pointer flex items-center gap-2"
                      download
                    >
                      <img
                        src={brazilFlag.src}
                        alt="Brazil"
                        className="size-4 rounded-full object-cover"
                      />
                      Português
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild disabled>
                    <a
                      href="/gabriel-oliveira-english.pdf"
                      className="cursor-pointer flex items-center gap-2"
                      download
                    >
                      <img
                        src={usaFlag.src}
                        alt="United States"
                        className="size-4 rounded-full object-cover"
                      />
                      English
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {PROFILE.socials.map((social) => (
            <Button key={social.label} asChild variant="ghost" size="icon">
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <span className="sr-only">{social.label}</span>
                <SocialIcon type={social.icon} />
              </a>
            </Button>
          ))}
        </div>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <a className="cursor-pointer">
              <img
                src={brazilFlag.src}
                alt="Brazil"
                className="size-5 rounded-full object-scale-down"
              />
            </a>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <img
                src={brazilFlag.src}
                alt="Brazil"
                className="size-4 rounded-full object-cover"
              />
              Português
            </DropdownMenuItem>
            <DropdownMenuItem disabled>
              <img
                src={usaFlag.src}
                alt="United States"
                className="size-4 rounded-full object-cover"
              />
              English (WIP)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
