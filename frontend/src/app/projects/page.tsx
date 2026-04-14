import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { projects } from '@/data/projects';
import { getLang, ui } from '@/data/i18n';

type ProjectsPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const lang = getLang(params?.lang);
  const t = ui[lang];

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
        <p className="eyebrow">Portfolio</p>
        <h1>{t.projectPagesTitle}</h1>
      </section>

      <section className="panel">
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.slug} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.shortDescription}</p>
              <ul>
                {project.techStack.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.liveDemoUrl ? (
                  <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="primary-button">
                    Live Demo
                  </a>
                ) : null}
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="secondary-button">
                    GitHub
                  </a>
                ) : null}
              </div>
              <div className="project-actions">
                <Link href={`/projects/${project.slug}?lang=${lang}`} className="secondary-button">
                  {t.openProjectPage}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}