import Link from 'next/link';
import type { Metadata } from 'next';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { blogPosts } from '@/data/blog';
import { notFound } from 'next/navigation';
import { createElement } from 'react';
import { getLang, ui } from '@/data/i18n';

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Blog Post Not Found | Adrien Mizero' };
  }

  return {
    title: `${post.title} | Adrien Mizero`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { slug } = await params;
  const paramsData = await searchParams;
  const lang = getLang(paramsData?.lang);
  const t = ui[lang];
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="page-shell">
      <header className="top-nav" id="top">
        <Link href={`/?lang=${lang}`} className="brand">
          <span>AM</span>
          <strong>Adrien Mizero</strong>
        </Link>
        <nav aria-label="Blog navigation">
          <Link href={`/?lang=${lang}`}>{t.home}</Link>
          <Link href={`/blog?lang=${lang}`}>{t.navBlog}</Link>
          <Link href={`/?lang=${lang}#contact`}>{t.navContact}</Link>
        </nav>
        <LanguageSwitcher />
      </header>

      <section className="panel">
        <div className="blog-post">
          <div className="blog-post-header">
            <Link href={`/blog?lang=${lang}`} className="blog-back-link">
              ← {t.backToBlog}
            </Link>

            <div className="blog-post-meta">
              <span className="blog-category">{post.category}</span>
              <span className="blog-date">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="blog-read-time">
                {post.readTime} min read
              </span>
            </div>

            <h1 className="blog-post-title">{post.title}</h1>
          </div>

          <article className="blog-post-content">
            {post.content.split('\n\n').map((paragraph, index) => {
              // Handle headers
              if (paragraph.trim().startsWith('#')) {
                const level = paragraph.match(/^#+/)?.[0].length || 1;
                const text = paragraph.replace(/^#+\s/, '');
                const tagName = `h${Math.min(level + 1, 6)}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
                return createElement(
                  tagName,
                  { key: index, className: `blog-heading blog-h${level}` },
                  text,
                );
              }

              // Handle code blocks
              if (
                paragraph.trim().startsWith('```') &&
                paragraph.trim().endsWith('```')
              ) {
                const code = paragraph
                  .replace(/^```.*\n/, '')
                  .replace(/\n```$/, '');
                return (
                  <pre key={index} className="blog-code-block">
                    <code>{code}</code>
                  </pre>
                );
              }

              // Handle list items
              if (paragraph.trim().startsWith('-')) {
                const items = paragraph.split('\n').filter((line) =>
                  line.trim().startsWith('-'),
                );
                return (
                  <ul key={index} className="blog-list">
                    {items.map((item, i) => (
                      <li key={i}>{item.replace(/^-\s/, '')}</li>
                    ))}
                  </ul>
                );
              }

              // Handle numbered lists
              if (paragraph.trim().match(/^\d+\./)) {
                const items = paragraph.split('\n').filter((line) =>
                  line.trim().match(/^\d+\./),
                );
                return (
                  <ol key={index} className="blog-list">
                    {items.map((item, i) => (
                      <li key={i}>
                        {item.replace(/^\d+\.\s/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }

              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="blog-paragraph">
                    {paragraph}
                  </p>
                );
              }

              return null;
            })}
          </article>

          <footer className="blog-post-footer">
            <Link href={`/blog?lang=${lang}`} className="blog-back-button">
              ← {t.backToBlog}
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}
