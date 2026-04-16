import Image from 'next/image';
import PortfolioHeader from '@/components/PortfolioHeader';
import TypewriterRoles from '@/components/TypewriterRoles';
import ContactForm from '@/components/ContactForm';
import { getLang, ui } from '@/data/i18n';

const roles = ['Software Engineer', 'Full-Stack Developer', 'Problem Solver'];

const copyByLang = {
  en: {
    hello: 'Hello, I am',
    homeIntro:
      'Software engineer based in Kigali, Rwanda, building practical web applications with clean architecture, strong delivery habits, and measurable impact.',
    aboutTitle: 'About Me',
    aboutRole: "I'm a Software Engineer",
    aboutBody:
      'I build full-stack products with Django, .NET, React, and modern tooling, focusing on maintainable code, clear UX, and production-ready delivery.',
    readMore: 'Read more',
    myServices: 'My Services',
    myProjects: 'My Projects',
    myCertifications: 'My Certifications',
    discussProject: 'Discuss Project',
    certificate: 'Certificate',
    testimonial: 'Testimonial',
    contactMe: 'Contact Me',
    sendMessage: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully.',
    error: 'Failed to send message. Try again.',
    hireMe: 'Hire Me'
  },
  fr: {
    hello: 'Bonjour, je suis',
    homeIntro:
      'Ingenieur logiciel base a Kigali, Rwanda, je construis des applications web pratiques avec une architecture propre et une execution fiable.',
    aboutTitle: 'A propos de moi',
    aboutRole: 'Je suis ingenieur logiciel',
    aboutBody:
      'Je developpe des produits full-stack avec Django, React et des outils modernes, en priorisant la qualite et la maintenabilite.',
    readMore: 'Lire plus',
    myServices: 'Mes services',
    myProjects: 'Mes projets',
    myCertifications: 'Mes certifications',
    discussProject: 'Discuter du projet',
    certificate: 'Certificat',
    testimonial: 'Temoignage',
    contactMe: 'Contactez-moi',
    sendMessage: 'Envoyer le message',
    sending: 'Envoi en cours...',
    success: 'Message envoye avec succes.',
    error: 'Echec de l envoi. Veuillez reessayer.',
    hireMe: 'Engagez-moi'
  },
  rw: {
    hello: 'Muraho, nitwa',
    homeIntro:
      'Ndi software engineer i Kigali, Rwanda, nkora web applications zifite architecture nziza kandi zitangwa neza.',
    aboutTitle: 'Ibyanjye',
    aboutRole: 'Ndi software engineer',
    aboutBody:
      'Nkora full-stack products nkoresheje Django, React n izindi tools zigezweho, nshyira imbere code isukuye kandi yizewe.',
    readMore: 'Soma byinshi',
    myServices: 'Serivisi zanjye',
    myProjects: 'Imishinga yanjye',
    myCertifications: 'Impamyabushobozi zanjye',
    discussProject: 'Vuganaho umushinga',
    certificate: 'Impamyabumenyi',
    testimonial: 'Ubuhamya',
    contactMe: 'Vugana nanjye',
    sendMessage: 'Ohereza ubutumwa',
    sending: 'Ihereza...',
    success: 'Ubutumwa bwoherejwe neza.',
    error: 'Ntibyakunze kohereza ubutumwa. Ongera ugerageze.',
    hireMe: 'Nkorana nanjye'
  }
} as const;

const testimonials = [
  {
    name: 'Client A',
    text: 'Adrien delivered reliable features quickly and communicated every milestone clearly.'
  },
  {
    name: 'Client B',
    text: 'Great execution quality, clean UI, and dependable backend work from start to finish.'
  },
  {
    name: 'Client C',
    text: 'Professional, focused, and consistent with deadlines even during rapid iteration cycles.'
  }
];

const coreCapabilities = [
  {
    title: 'Backend Architecture',
    description:
      'Scalable Django and DRF APIs with authentication, role-ready data models, and secure integration patterns.'
  },
  {
    title: 'Frontend Delivery',
    description:
      'Modern interfaces with React and Next.js focused on clarity, responsiveness, and performance.'
  },
  {
    title: 'Systems Integration',
    description:
      'Reliable integrations with payment services, mapping APIs, media pipelines, and external services using stable data contracts.'
  },
  {
    title: 'Deployment & Operations',
    description:
      'Production-ready delivery using CI/CD pipelines, environment-aware configuration, release automation, and post-deployment monitoring for dependable uptime.'
  }
];

const certifications = [
  'Africa on FHIR certificate',
  'PC hardware maintenance certificate',
  'AFRETEC web development certificate'
];

const educationByLang = {
  en: [
    {
      program: 'Bachelor in Information Systems',
      institution: 'University of Rwanda',
      period: '2022 - 2026',
      description:
        'Focused on software engineering fundamentals, data structures, databases, and practical full-stack project delivery.'
    }
  ],
  fr: [
    {
      program: 'Licence en systemes d information',
      institution: 'Universite du Rwanda',
      period: '2022 - 2026',
      description:
        'Formation axee sur les fondamentaux du genie logiciel, les structures de donnees, les bases de donnees et la livraison full-stack.'
    }
  ],
  rw: [
    {
      program: 'Icyiciro cya mbere cya kaminuza muri Information Systems',
      institution: 'Kaminuza y u Rwanda',
      period: '2022 - 2026',
      description:
        'Nize neza iby ibanze muri software engineering, data structures, databases no gutanga imishinga ya full-stack.'
    }
  ]
} as const;

const experiences = [
  {
    company: 'Freelance & Personal Projects',
    role: 'Full-Stack Software Engineer',
    description:
      'Built and shipped web applications with Django, React, and Next.js while handling API design, integrations, testing, and deployment workflows.',
    startDate: '2023',
    endDate: 'Present'
  },
  {
    company: 'University of Rwanda Projects',
    role: 'Software Developer',
    description:
      'Delivered research and coursework projects including recommendation systems and safety-focused solutions with measurable outcomes.',
    startDate: '2022',
    endDate: '2024'
  }
];

type HomeProps = {
  searchParams?: Promise<{
    lang?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const lang = getLang(params?.lang);
  const uiText = ui[lang];
  const copy = copyByLang[lang];
  const education = educationByLang[lang];

  return (
    <>
      <PortfolioHeader
        labels={{
          home: uiText.home,
          about: uiText.navAbout,
          services: copy.myServices,
          projects: uiText.navProjects,
          blog: uiText.navBlog,
          certifications: uiText.certificationsTitle,
          experience: uiText.experienceTitle
        }}
        themeLight={uiText.themeLight}
        themeDark={uiText.themeDark}
      />

      <section id="home" className="home">
        <div className="home-img">
          <Image
            src="/images/adrien-mizero.jpeg"
            alt="Adrien Mizero"
            width={460}
            height={460}
            priority
          />
        </div>
        <div className="home-content">
          <h3>{copy.hello}</h3>
          <h1>Adrien Mizero</h1>
          <h3>
            And I&apos;m a <TypewriterRoles roles={roles} />
          </h3>
          <p>{copy.homeIntro}</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/adrien-mizero-b4690539a" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <i className="bx bxl-linkedin" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <i className="bx bxl-github" />
            </a>
            <a href="mailto:admizero66@gmail.com" aria-label="Email">
              <i className="bx bxs-envelope" />
            </a>
            <a href="tel:+250786649017" aria-label="Phone">
              <i className="bx bxs-phone" />
            </a>
          </div>
          <a href="#contact" className="btn">
            {copy.contactMe}
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-content">
          <h2 className="heading">{copy.aboutTitle}</h2>
          <h3>
            {copy.aboutRole}
          </h3>
          <p>{copy.aboutBody}</p>
          <a href="#services" className="btn">
            {copy.readMore}
          </a>
        </div>
        <div className="about-img">
          <Image src="/images/adrien-mizero.jpeg" alt="Adrien profile" width={420} height={420} />
        </div>
      </section>

      <section id="services" className="services">
        <h2 className="heading">{copy.myServices}</h2>
        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code" />
            <h3>Web Development</h3>
            <p>
              End-to-end web products from architecture and API design to frontend implementation
              and deployment.
            </p>
            <a href="#contact" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bx-palette" />
            <h3>Mobile App Development</h3>
            <p>
              Cross-platform mobile applications built with Flutter for smooth performance,
              responsive layouts, and reliable user experiences.
            </p>
            <a href="#contact" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bx-data" />
            <h3>API Integration</h3>
            <p>
              Reliable integrations for payment, media processing, maps, and third-party data
              services.
            </p>
            <a href="#contact" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      <section className="services core-capabilities-section">
        <h2 className="heading">Core Capabilities</h2>
        <div className="services-container">
          {coreCapabilities.map((item) => (
            <div className="services-box" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="services experience-section">
        <h2 className="heading">{uiText.experienceTitle}</h2>
        <div className="experience-tree">
          {experiences.map((item) => (
            <article className="services-box experience-card" key={`${item.company}-${item.role}`}>
              <h3>{item.role}</h3>
              <p className="experience-row">
                <strong>Company:</strong> {item.company}
              </p>
              <p className="experience-row">{item.description}</p>
              <p className="experience-row">
                <strong>Start Date:</strong> {item.startDate}
              </p>
              <p className="experience-row">
                <strong>End Date:</strong> {item.endDate}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="services education-section">
        <p className="section-sticker">{uiText.educationTitle}</p>
        <h2 className="heading">{uiText.educationTitle}</h2>
        <div className="services-container">
          {education.map((item) => (
            <article className="services-box education-card" key={`${item.program}-${item.period}`}>
              <h3>{item.program}</h3>
              <p className="education-meta">{item.institution}</p>
              <p className="education-period">{item.period}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="certifications" className="services certifications-section">
        <h2 className="heading">{copy.myCertifications}</h2>
        <div className="services-container">
          {certifications.map((item) => (
            <div className="services-box certification-box" key={item}>
              <i className="bx bx-badge-check" />
              <h3>{copy.certificate}</h3>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <h2 className="heading">{copy.testimonial}</h2>
        <div className="wrapper">
          {testimonials.map((item) => (
            <div className="testimonial-item" key={item.name}>
              <Image src="/images/adrien-mizero.jpeg" alt={item.name} width={140} height={140} />
              <h2>{item.name}</h2>
              <div className="rating">
                <i className="bx bxs-star" id="star" />
                <i className="bx bxs-star" id="star" />
                <i className="bx bxs-star" id="star" />
                <i className="bx bxs-star" id="star" />
                <i className="bx bxs-star" id="star" />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="heading">{copy.contactMe}</h2>
        <ContactForm
          translations={{
            formName: uiText.formName,
            formEmail: uiText.formEmail,
            formMessage: uiText.formMessage,
            formSend: copy.sendMessage,
            formSending: copy.sending,
            formSuccess: copy.success,
            formError: copy.error
          }}
        />
      </section>

      <footer className="footer">
        <div className="social">
          <a href="https://www.linkedin.com/in/adrien-mizero-b4690539a" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="bx bxl-github" />
          </a>
          <a href="mailto:admizero66@gmail.com" aria-label="Email">
            <i className="bx bxs-envelope" />
          </a>
          <a href="tel:+250786649017" aria-label="Phone">
            <i className="bx bxs-phone" />
          </a>
        </div>
        <p className="copyright">&copy; Adrien Mizero - All Rights Reserved</p>
      </footer>

      <a href="#contact" className="hire-me-btn" aria-label={copy.hireMe}>
        {copy.hireMe}
      </a>
    </>
  );
}
