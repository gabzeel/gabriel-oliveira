import type { ReactElement, ReactNode } from "react";
import FormattedDate from "./FormattedDate";

type Props = {
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImageUrl?: string;
  children: ReactNode;
};

export default function BlogPostLayout({
  title,
  description,
  pubDate,
  updatedDate,
  heroImageUrl,
  children,
}: Props): ReactElement {
  return (
    <>
      <main className="mx-auto w-full max-w-3xl px-4 py-10">
        <article>
          {heroImageUrl ? (
            <div className="mb-6">
              <img
                src={heroImageUrl}
                alt={description}
                className="w-full rounded-xl shadow-md"
              />
            </div>
          ) : null}
          <div className="prose max-w-none">
            <div className="mb-6 text-center">
              <div className="mb-2 text-sm text-slate-500">
                <FormattedDate date={pubDate} />
                {updatedDate ? (
                  <div className="italic">
                    Last updated on <FormattedDate date={updatedDate} />
                  </div>
                ) : null}
              </div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <hr className="mt-4" />
            </div>
            {children}
          </div>
        </article>
      </main>
    </>
  );
}
