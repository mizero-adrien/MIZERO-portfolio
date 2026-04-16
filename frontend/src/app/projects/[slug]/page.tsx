import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PortfolioHeader from '@/components/PortfolioHeader';
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
    description: project.shortDescription
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

  const status = project.liveDemoUrl && project.liveDemoUrl.trim().length > 0 ? 'Live' : 'Under Development';

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

      <section className="services project-detail-section" id="project-detail">
        <h2 className="heading">{project.name}</h2>
        <div className="services-container">
          <article className="services-box project-detail-card">
            <p>{project.shortDescription}</p>
            <p className="project-status-row">
              <strong>Condition:</strong> {status}
            </p>
            <p className="project-status-row">
              <strong>Description:</strong> {project.description}
            </p>
            <p className="project-status-row">
              <strong>Challenge:</strong> {project.challenge}
            </p>
            <p className="project-status-row">
              <strong>Solution:</strong> {project.solution}
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

            <div className="project-links-row">
              <Link href={`/projects?lang=${lang}`} className="btn btn-small">
                Back to Projects
              </Link>
              <Link href={`/?lang=${lang}#contact`} className="btn btn-small">
                Discuss this Project
              </Link>
            </div>
          </article>
        </div>
      </section>

      {project.screenshots.length > 0 ? (
        <section className="services project-detail-section">
          <h2 className="heading">Screenshots</h2>
          <div className="services-container screenshot-cards">
            {project.screenshots.map((image, index) => (
              <div className="services-box screenshot-box" key={image}>
                <Image src={image} alt={`${project.name} screenshot ${index + 1}`} width={1200} height={720} />
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
