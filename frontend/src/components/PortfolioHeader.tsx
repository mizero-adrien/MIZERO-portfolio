'use client';

import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ThemeToggle from '@/components/ThemeToggle';
import ViewsCounter from '@/components/ViewsCounter';

type PortfolioHeaderProps = {
  labels: {
    home: string;
    about: string;
    services: string;
    projects: string;
    blog: string;
    certifications: string;
    experience: string;
  };
  themeLight: string;
  themeDark: string;
};

export default function PortfolioHeader({ labels, themeLight, themeDark }: PortfolioHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLang = searchParams.get('lang') || 'en';

  const homePath = `/?lang=${currentLang}`;
  const sectionHref = (id: string) => (pathname === '/' ? `#${id}` : `${homePath}#${id}`);

  return (
    <header className="header">
      <Link href={homePath} className="logo">
        AM
      </Link>

      <i
        className={`bx ${open ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        aria-label="Toggle navigation"
        role="button"
        tabIndex={0}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setOpen((value) => !value);
          }
        }}
      />

      <nav className={`navbar ${open ? 'active' : ''}`}>
        <a href={sectionHref('home')} onClick={() => setOpen(false)}>
          {labels.home}
        </a>
        <a href={sectionHref('about')} onClick={() => setOpen(false)}>
          {labels.about}
        </a>
        <a href={sectionHref('services')} onClick={() => setOpen(false)}>
          {labels.services}
        </a>
        <Link href={`/projects?lang=${currentLang}`} onClick={() => setOpen(false)}>
          {labels.projects}
        </Link>
        <Link href={`/blog?lang=${currentLang}`} onClick={() => setOpen(false)}>
          {labels.blog}
        </Link>
        <a href={sectionHref('certifications')} onClick={() => setOpen(false)}>
          {labels.certifications}
        </a>
        <a href={sectionHref('experience')} onClick={() => setOpen(false)}>
          {labels.experience}
        </a>
      </nav>

      <div className="header-controls">
        <ViewsCounter />
        <ThemeToggle lightLabel={themeLight} darkLabel={themeDark} />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
