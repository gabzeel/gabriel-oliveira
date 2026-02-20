import type { AnchorHTMLAttributes, ReactElement } from 'react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  currentPath: string;
};

export default function HeaderLink({
  href,
  currentPath,
  className,
  children,
  ...props
}: Props): ReactElement {
  const pathname = currentPath;
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === '/' + (subpath?.[0] || '');
  const classes = [
    'inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
    isActive
      ? 'bg-slate-100 text-slate-900'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
