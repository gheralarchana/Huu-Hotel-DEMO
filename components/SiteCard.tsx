import type { ReactNode } from 'react';

type SiteCardProps = { title: string; children: ReactNode; icon?: string };

export function SiteCard({ title, children, icon = '✦' }: SiteCardProps) {
  return <article className="info-card"><div className="icon-tile">{icon}</div><h3>{title}</h3><p>{children}</p></article>;
}
