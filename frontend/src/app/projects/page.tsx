import Link from 'next/link';
import PortfolioHeader from '@/components/PortfolioHeader';
import { getLang, ui } from '@/data/i18n';
import { projects } from '@/data/projects';

type ProjectsPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams;
  const lang = getLang(params?.lang);
  const t = ui[lang];

  const projectStatus = (liveDemoUrl?: string) =>
    liveDemoUrl && liveDemoUrl.trim().length > 0 ? 'Live' : 'Under Development';

  return (
    <>
      <PortfolioHeader
        labels={{
          home: t.home,
          about: t.navAbout,
          services: 'Services',
          projects: t.navProjects,
          blog: t.navBlog,
          certifications: t.certificationsTitle,
          experience: t.experienceTitle
        }}
        themeLight={t.themeLight}
        themeDark={t.themeDark}
      />

      <section className="services projects-page-section" id="projects-list">
        <h2 className="heading">All Projects</h2>
        <div className="services-container">
          {projects.map((project) => (
            <div className="services-box" key={project.slug}>
              <h3>{project.name}</h3>
              <p>{project.shortDescription}</p>
              <p className="project-status-row">
                <strong>Status:</strong> {projectStatus(project.liveDemoUrl)}
              </p>
              <p className="project-status-row">
                <strong>Tech Stack:</strong> {project.techStack.join(', ')}
              </p>
              <div className="project-links-row">
                {project.githubUrl ? (
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn-small">
                    GitHub Link
                  </a>
                ) : (
                  <span className="project-link-disabled">GitHub: Not Available</span>
                )}
                {project.liveDemoUrl ? (
                  <a href={project.liveDemoUrl} target="_blank" rel="noreferrer" className="btn btn-small">
                    Live Link
                  </a>
                ) : (
                  <span className="project-link-disabled">Live: Under Development</span>
                )}
              </div>
              <Link href={`/projects/${project.slug}?lang=${lang}`} className="btn project-detail-btn">
                Open Project Page
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
