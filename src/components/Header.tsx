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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, Menu } from "lucide-react";
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
        <div className="ml-auto hidden items-center gap-2 md:flex">
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
        <div className="hidden md:block">
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
        <div className="ml-auto md:hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </DialogTrigger>
            <DialogContent
              className="top-0 right-0 left-auto h-full w-[min(22rem,85vw)] translate-x-0 translate-y-0 rounded-l-3xl rounded-r-none p-6 sm:max-w-none max-w-none"
              showCloseButton
            >
              <DialogTitle className="sr-only">Site menu</DialogTitle>
              <DialogDescription className="sr-only">
                Navigation links, curriculum downloads, language status, and
                social links.
              </DialogDescription>
              <div className="flex h-full flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Menu
                  </h3>
                </div>
                <nav className="flex flex-col gap-1">
                  <DialogClose asChild>
                    <HeaderLink
                      href="/"
                      currentPath={currentPath}
                      className="w-full justify-start"
                    >
                      Home
                    </HeaderLink>
                  </DialogClose>
                  <DialogClose asChild>
                    <HeaderLink
                      href="/experience"
                      currentPath={currentPath}
                      className="w-full justify-start"
                    >
                      Experiências
                    </HeaderLink>
                  </DialogClose>
                  <DialogClose asChild>
                    <HeaderLink
                      href="/projects"
                      currentPath={currentPath}
                      className="w-full justify-start"
                    >
                      Projetos
                    </HeaderLink>
                  </DialogClose>
                  <DialogClose asChild>
                    <HeaderLink
                      href="/blog"
                      currentPath={currentPath}
                      className="w-full justify-start"
                    >
                      Blog
                    </HeaderLink>
                  </DialogClose>
                </nav>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Curriculum
                  </p>
                  <div className="flex flex-col gap-1">
                    <DialogClose asChild>
                      <a
                        href="/gabriel-oliveira-portugues.pdf"
                        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                        download
                      >
                        <img
                          src={brazilFlag.src}
                          alt="Brazil"
                          className="size-4 rounded-full object-cover"
                        />
                        Português
                      </a>
                    </DialogClose>
                    <DialogClose asChild>
                      <a
                        href="/gabriel-oliveira-english.pdf"
                        className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-400"
                        download
                        aria-disabled="true"
                      >
                        <img
                          src={usaFlag.src}
                          alt="United States"
                          className="size-4 rounded-full object-cover"
                        />
                        English (WIP)
                      </a>
                    </DialogClose>
                  </div>
                </div>
                <div className="mt-auto flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      Language
                    </p>
                    <div className="flex flex-col gap-1">
                      <DialogClose asChild>
                        <a
                          href="/"
                          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
                        >
                          <img
                            src={brazilFlag.src}
                            alt="Brazil"
                            className="size-4 rounded-full object-cover"
                          />
                          Português
                        </a>
                      </DialogClose>
                      <DialogClose asChild>
                        <a
                          href="/"
                          className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-400"
                          aria-disabled="true"
                        >
                          <img
                            src={usaFlag.src}
                            alt="United States"
                            className="size-4 rounded-full object-cover"
                          />
                          English (WIP)
                        </a>
                      </DialogClose>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs text-center font-semibold uppercase tracking-widest text-slate-500">
                      Social
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {PROFILE.socials.map((social) => (
                        <DialogClose key={social.label} asChild>
                          <Button asChild variant="ghost" size="icon">
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
                        </DialogClose>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
