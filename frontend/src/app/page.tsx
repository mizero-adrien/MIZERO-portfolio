import Image from 'next/image';
import Link from 'next/link';
import LiveName from '@/components/LiveName';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import ContactForm from '@/components/ContactForm';
import { getLang, ui } from '@/data/i18n';

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.7.6 4.1.6.7 0 1.3.6 1.3 1.3V21c0 .7-.6 1.3-1.3 1.3C10.5 22.3 1.7 13.5 1.7 2c0-.7.6-1.3 1.3-1.3h4.1c.7 0 1.3.6 1.3 1.3 0 1.4.2 2.8.6 4.1.1.4 0 .9-.2 1.2L6.6 10.8Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M3.5 5.5h17c.8 0 1.5.7 1.5 1.5v10c0 .8-.7 1.5-1.5 1.5h-17C2.7 18.5 2 17.8 2 17V7c0-.8.7-1.5 1.5-1.5Zm0 2 8.5 5.7 8.5-5.7" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M6.5 9.5H3.4V21h3.1V9.5ZM5 2.7A1.8 1.8 0 1 0 5 6.3a1.8 1.8 0 0 0 0-3.6Zm4.1 6.8V21h3v-6.1c0-1.6.3-3.2 2.3-3.2s2 1.8 2 3.3V21h3v-6.8c0-3.3-.7-5.8-4.5-5.8-1.8 0-3 1-3.5 2H12V9.5h-2.9Z" />
    </svg>
  );
}

const skills = [
  'Python',
  'JavaScript',
  'C#',
  'SQL',
  'HTML',
  'CSS',
  'Django',
  'Django REST Framework',
  'JWT Authentication',
  'React',
  'Tailwind CSS',
  'Next.js',
  'Vite',
  'PostgreSQL',
  'MySQL',
  'Microsoft Azure',
  'Git',
  'GitHub',
  'CI/CD Pipelines',
  'Deployment Automation',
  'Netlify',
  'Firebase',
  'Google Maps API',
  'Mobile Money Integrations',
  'FFmpeg Processing'
];

const experience = [
  'Built full-stack applications with Django, Django REST Framework, React, Tailwind CSS, .NET Framework, and Flutter for mobile.',
  'Built a Book Recommendation System using Machine Learning and AI to suggest personalized books based on user interests and behavior.',
  'Worked on hackathon and academic projects under tight deadlines while keeping delivery stable and user-focused.',
  'Integrated authentication, uploads, theming, APIs, deployment workflows, and CI/CD pipelines into production-style web applications.'
];

const highlights = [
  { value: '6+', label: 'Projects delivered across web and API work' },
  { value: 'Full-stack', label: 'Backend, frontend, integrations, and deployment' }
];

const capabilities = [
  {
    title: 'Backend Architecture',
    details:
      'Scalable Django and DRF APIs with authentication, role-ready data models, and secure integration patterns.'
  },
  {
    title: 'Frontend Delivery',
    details:
      'Modern interfaces with React and Next.js focused on clarity, responsiveness, and performance.'
  },
  {
    title: 'Systems Integration',
    details:
      'Reliable integrations with payment services, mapping APIs, media pipelines, and external services using stable data contracts.'
  },
  {
    title: 'Deployment & Operations',
    details:
      'Production-ready delivery using CI/CD pipelines, environment-aware configuration, release automation, and post-deployment monitoring for dependable uptime.'
  }
];

const process = [
  'Discover requirements and user outcomes.',
  'Design architecture and reliable data flow.',
  'Build iterative features with clean code standards.',
  'Deploy, monitor, and refine from real usage feedback.'
];

const certifications = [
  'Africa on FHIR certificate',
  'PC hardware maintenance certificate',
  'AFRETEC web development certificate'
];

type HomeProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const lang = getLang(params?.lang);
  const t = ui[lang];

  return (
    <main className="page-shell">
      <header className="top-nav" id="top">
        <a href="#top" className="brand">
          <span>AM</span>
          <strong>Adrien Mizero</strong>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">{t.navAbout}</a>
          <Link href={`/projects?lang=${lang}`}>{t.navProjects}</Link>
          <Link href={`/blog?lang=${lang}`}>{t.navBlog}</Link>
          <a href="#skills">{t.navSkills}</a>
          <a href="#contact">{t.navContact}</a>
        </nav>
        <LanguageSwitcher />
      </header>

      <section className="hero">
        <div className="hero-copy">
          <h1>
            <LiveName />
          </h1>
          <p className="eyebrow">{t.subtitle}</p>
          <div className="highlight-row" aria-label="Profile highlights">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="highlight-card">
                <strong>{highlight.value}</strong>
                <span>{highlight.label}</span>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <Link href={`/projects?lang=${lang}`} className="primary-button">
              {t.viewProjects}
            </Link>
            <a href="#contact" className="secondary-button">
              {t.contactMe}
            </a>
          </div>
          <dl className="contact-strip">
            <div className="contact-item">
              <dt>Phone</dt>
              <dd>
                <a href="tel:+250786649017" className="contact-link">
                  <span className="contact-icon" aria-hidden="true">
                    <PhoneIcon />
                  </span>
                  <span>0786649017</span>
                </a>
              </dd>
            </div>
            <div className="contact-item">
              <dt>Email</dt>
              <dd>
                <a href="mailto:admizero66@gmail.com" className="contact-link">
                  <span className="contact-icon" aria-hidden="true">
                    <EmailIcon />
                  </span>
                  <span>admizero66@gmail.com</span>
                </a>
              </dd>
            </div>
            <div className="contact-item contact-item-icon-only">
              <dt className="visually-hidden">LinkedIn</dt>
              <dd>
                <a
                  href="https://www.linkedin.com/in/adrien-mizero-b4690539a"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                  aria-label="LinkedIn profile"
                >
                  <span className="contact-icon" aria-hidden="true">
                    <LinkedInIcon />
                  </span>
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <aside className="profile-card" aria-label="Profile summary">
          <div className="portrait-placeholder">
            <Image
              src="/images/adrien-mizero.jpeg"
              alt="Portrait of Adrien Mizero"
              fill
              priority
              sizes="(max-width: 1040px) 100vw, 32vw"
              className="portrait-image"
            />
          </div>
          <p className="portrait-note">Photo path: public/images/adrien-mizero.jpeg</p>
          <div className="profile-meta">
            <p className="profile-label">Currently focused on</p>
            <ul>
              <li>Flutter development</li>
              <li>Data Structures and Algorithms</li>
              <li>Artificial intelligence</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="content-grid" id="about">
        <article className="panel about-panel">
          <h2>{t.summaryTitle}</h2>
          <p>
            Motivated software engineer with a strong passion for full-stack development
            and a background in Django, Python, and JavaScript. I focus on clean backend
            architecture, responsive frontend experiences, and practical solutions that
            work in real environments.
          </p>
          <p>
            I turn software ideas into dependable products with clean architecture,
            strong delivery habits, and measurable impact.
          </p>
          <p>
            I communicate clearly, collaborate effectively, and enjoy learning new tools
            that help solve complex problems with discipline and precision.
          </p>
        </article>

        <article className="panel education-panel">
          <h2>{t.educationTitle}</h2>
          <div className="timeline-item">
            <h3>Bachelor of Science in Information Technology</h3>
            <p>University of Rwanda, Kigali</p>
            <span>Expected Graduation: 2026</span>
          </div>
        </article>
      </section>

      <section className="panel" id="capabilities">
        <h2>{t.capabilitiesTitle}</h2>
        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article key={capability.title} className="capability-card">
              <h3>{capability.title}</h3>
              <p>{capability.details}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel" id="experience">
        <h2>{t.experienceTitle}</h2>
        <div className="list-grid">
          {experience.map((item) => (
            <div key={item} className="list-card">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section" id="skills">
        <article className="panel">
          <h2>{t.skillsTitle}</h2>
          <div className="skill-cloud">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </article>

        <article className="panel">
          <h2>{t.languagesTitle}</h2>
          <div className="language-list">
            <div>
              <strong>English</strong>
              <span>Fluent</span>
            </div>
            <div>
              <strong>French</strong>
              <span>Beginner</span>
            </div>
            <div>
              <strong>Kinyarwanda</strong>
              <span>Mother tongue</span>
            </div>
          </div>
        </article>
      </section>

      <section className="panel" id="certifications">
        <h2>{t.certificationsTitle}</h2>
        <div className="cert-grid">
          {certifications.map((certification) => (
            <div key={certification} className="cert-card">
              {certification}
            </div>
          ))}
        </div>
      </section>

      <section className="panel" id="workflow">
        <h2>{t.workflowTitle}</h2>
        <div className="workflow-grid">
          {process.map((step, index) => (
            <article key={step} className="workflow-card">
              <span>0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel contact-panel" id="contact">
        <h2>{t.contactTitle}</h2>
        <p>{t.contactBody}</p>
        
        <ContactForm translations={{
          formName: t.formName,
          formEmail: t.formEmail,
          formMessage: t.formMessage,
          formSend: t.formSend,
          formSending: t.formSending,
          formSuccess: t.formSuccess,
          formError: t.formError,
        }} />

        <div className="contact-footer">
          <a href="#top" className="secondary-button">{t.backToTop}</a>
        </div>
      </section>

      <a href="mailto:admizero66@gmail.com?subject=Project%20Opportunity" className="fab-hire-me" aria-label={t.hireMe}>
        {t.hireMe}
      </a>
    </main>
  );
}