import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { notFound } from 'next/navigation';
import { getLang, ui } from '@/data/i18n';
import { projects } from '@/data/projects';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: 'Project Not Found | Adrien Mizero' };
  }

  return {
    title: `${project.name} | Adrien Mizero`,
    description: project.description
  };
}

export default async function ProjectDetailPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const paramsData = await searchParams;
  const lang = getLang(paramsData?.lang);
  const t = ui[lang];
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page-shell">
      <header className="top-nav" id="top">
        <Link href={`/?lang=${lang}`} className="brand">
          <span>AM</span>
          <strong>Adrien Mizero</strong>
        </Link>
        <nav aria-label="Projects navigation">
          <Link href={`/?lang=${lang}`}>Home</Link>
          <Link href={`/projects?lang=${lang}`}>{t.navProjects}</Link>
          <Link href={`/?lang=${lang}#contact`}>{t.navContact}</Link>
        </nav>
        <LanguageSwitcher />
      </header>

      <section className="panel">
        <p className="eyebrow">{t.projectDetail}</p>
        <h1>{project.name}</h1>
        <p className="lede">{project.shortDescription}</p>
        <div className="project-actions">
          <Link href={`/projects?lang=${lang}`} className="secondary-button">
            {t.backToAllProjects}
          </Link>
          {project.liveDemoUrl ? (
            <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="primary-button">
              {t.liveDemo}
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="secondary-button">
              {t.sourceCode}
            </a>
          ) : null}
        </div>
      </section>

      <section className="content-grid">
        <article className="panel">
          <h2>{t.challenge}</h2>
          <p>{project.challenge}</p>
        </article>
        <article className="panel">
          <h2>{t.solution}</h2>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="panel">
        <h2>{t.techStack}</h2>
        <div className="skill-cloud">
          {project.techStack.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </section>

      <section className="panel">
        <h2>Screenshots</h2>
        <div className="screenshot-grid">
          {project.screenshots.length > 0 ? (
            project.screenshots.map((screenshot, index) => (
              <figure key={screenshot} className="screenshot-card">
                  <Image
                    src={screenshot}
                    alt={`${project.name} screenshot ${index + 1}`}
                    width={1200}
                    height={720}
                    className="screenshot-image"
                  />
              </figure>
            ))
          ) : (
            <div className="screenshot-empty">
              No screenshots added yet. Put image files in <code>public/images</code> and add the paths in <code>src/data/projects.ts</code>.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}