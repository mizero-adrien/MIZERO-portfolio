import Link from 'next/link';
import PortfolioHeader from '@/components/PortfolioHeader';
import { blogPosts } from '@/data/blog';
import { getLang, ui } from '@/data/i18n';

type BlogPageProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export const metadata = {
  title: 'Blog | Adrien Mizero',
  description:
    'Articles about software development, learning paths, and technical insights.',
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const lang = getLang(params?.lang);
  const t = ui[lang];
  const servicesLabelByLang = {
    en: 'My Services',
    fr: 'Mes services',
    rw: 'Serivisi zanjye',
  };

  return (
    <>
      <PortfolioHeader
        labels={{
          home: t.home,
          about: t.navAbout,
          services: servicesLabelByLang[lang],
          projects: t.navProjects,
          blog: t.navBlog,
          certifications: t.certificationsTitle,
          experience: t.experienceTitle,
        }}
        themeLight={t.themeLight}
        themeDark={t.themeDark}
      />

      <main className="page-shell">
        <section className="panel">
          <p className="eyebrow">Blog</p>
          <h1>{t.blogTitle}</h1>
          <p className="lede">{t.blogIntro}</p>
        </section>

        <section className="panel">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.slug} className="blog-card">
                <div className="blog-meta">
                  <span className="blog-category">{post.category}</span>
                  <span className="blog-date">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <h2 className="blog-title">
                  <Link href={`/blog/${post.slug}?lang=${lang}`}>{post.title}</Link>
                </h2>

                <p className="blog-excerpt">{post.excerpt}</p>

                <div className="blog-footer">
                  <span className="blog-read-time">{post.readTime} min read</span>
                  <Link href={`/blog/${post.slug}?lang=${lang}`} className="blog-read-more">
                    {t.readArticle} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
