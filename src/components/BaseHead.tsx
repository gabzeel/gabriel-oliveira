import type { ReactElement } from "react";

type Props = {
  title: string;
  description: string;
  pageUrl: string;
  generator: string;
  imageUrl?: string;
  canonicalUrl?: string;
};

export function BaseHead({
  title,
  description,
  pageUrl,
  generator,
  imageUrl,
  canonicalUrl,
}: Props): ReactElement {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="sitemap" href="/sitemap-index.xml" />
      <meta name="generator" content={generator} />
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
      {imageUrl ? <meta property="twitter:image" content={imageUrl} /> : null}
    </>
  );
}
