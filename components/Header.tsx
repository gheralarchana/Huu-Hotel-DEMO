'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const links = [
  ['Home', '/'], ['About Us', '/about-us'], ['Rooms & Suites', '/rooms'],
  ['Facilities', '/facilities'], ['Gallery', '/gallery'],
  ['Location & Access', '/location'], ['Contact', '/contact']
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link className="site-brand" href="/" onClick={() => setOpen(false)}>
          <span className="site-brand__mark">HU</span>
          <span><span className="site-brand__name">HU&apos;U</span><span className="site-brand__meta">Gili Trawangan</span></span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} className={pathname === href ? 'active' : ''}>{label}</Link>)}
        </nav>
        <div className="site-actions">
          <Link className="site-button" href="/book-now">Book Now</Link>
          <button className={`site-menu-button ${open ? 'is-open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(value => !value)}>
            <span className="menu-icon"><i /><i /><i /></span>
          </button>
        </div>
        <nav className={`site-mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <Link className="site-button" href="/book-now" onClick={() => setOpen(false)}>Book Now</Link>
        </nav>
      </div>
    </header>
  );
}
