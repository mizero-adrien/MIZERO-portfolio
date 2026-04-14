export type Lang = 'en' | 'fr' | 'rw';

export const languageLabels: Record<Lang, string> = {
  en: 'English',
  fr: 'Francais',
  rw: 'Kinyarwanda'
};

export const ui = {
  en: {
    navAbout: 'About',
    navProjects: 'Projects',
    navBlog: 'Blog',
    navSkills: 'Skills',
    navContact: 'Contact',
    viewProjects: 'View Projects',
    contactMe: 'Contact Me',
    hireMe: 'Hire Me',
    subtitle: 'Software Engineer based in Kigali, Rwanda',
    lede:
      'I turn software ideas into dependable products with clean architecture, strong delivery habits, and measurable impact.',
    summaryTitle: 'Bio',
    educationTitle: 'Education',
    capabilitiesTitle: 'Core Capabilities',
    experienceTitle: 'Experience',
    skillsTitle: 'Technical Skills',
    languagesTitle: 'Languages',
    certificationsTitle: 'Certifications',
    workflowTitle: 'Workflow',
    contactTitle: 'Contact',
    contactBody:
      'Available for software engineering opportunities, collaborations, and projects that need reliable full-stack delivery.',
    backToTop: 'Back to top',
    projectPagesTitle: 'Project Pages',
    projectPagesIntro:
      'Each project has a dedicated URL so you can share links directly in job applications, messages, and your CV.',
    openProjectPage: 'Open Project Page',
    projectDetail: 'Project Detail',
    backToAllProjects: 'Back to All Projects',
    liveDemo: 'Live Demo',
    sourceCode: 'Source Code',
    challenge: 'Challenge',
    solution: 'Solution',
    techStack: 'Tech Stack',
    addLinks: 'How to Add Links',
    addLinksBody:
      'Add liveUrl and repoUrl inside the project object in src/data/projects.ts. Buttons appear automatically on this page.',
    blogTitle: 'Blog',
    blogIntro: 'Thoughts and learnings about software development, problem-solving, and continuous growth.',
    backToBlog: 'Back to Blog',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSend: 'Send',
    formSending: 'Sending...',
    formSuccess: '✓ Message sent! I\'ll get back to you soon.',
    formError: 'Error sending message. Please try again or email me directly.'
  },
  fr: {
    navAbout: 'A propos',
    navProjects: 'Projets',
    navBlog: 'Blog',
    navSkills: 'Competences',
    navContact: 'Contact',
    viewProjects: 'Voir les projets',
    contactMe: 'Me contacter',
    hireMe: 'Engagez-moi',
    subtitle: 'Ingenieur logiciel base a Kigali, Rwanda',
    lede:
      'Je transforme des idees logicielles en produits fiables avec une architecture propre, une execution rigoureuse et un impact concret.',
    summaryTitle: 'Bio',
    educationTitle: 'Education',
    capabilitiesTitle: 'Capacites principales',
    experienceTitle: 'Experience',
    skillsTitle: 'Competences techniques',
    languagesTitle: 'Langues',
    certificationsTitle: 'Certifications',
    workflowTitle: 'Processus',
    contactTitle: 'Contact',
    contactBody:
      'Disponible pour des opportunites en ingenierie logicielle, collaborations et projets necessitant une execution full-stack fiable.',
    backToTop: 'Retour en haut',
    projectPagesTitle: 'Pages de projets',
    projectPagesIntro:
      'Chaque projet a une URL dediee que vous pouvez partager dans vos candidatures, messages et CV.',
    openProjectPage: 'Ouvrir la page du projet',
    projectDetail: 'Detail du projet',
    backToAllProjects: 'Retour aux projets',
    liveDemo: 'Demo en ligne',
    sourceCode: 'Code source',
    challenge: 'Defi',
    solution: 'Solution',
    techStack: 'Technologies',
    addLinks: 'Comment ajouter les liens',
    addLinksBody:
      'Ajoutez liveUrl et repoUrl dans l objet projet de src/data/projects.ts. Les boutons apparaissent automatiquement sur cette page.',
    blogTitle: 'Blog',
    blogIntro: 'Reflexions et apprentissages sur le developpement logiciel, la resolution de problemes et la croissance continue.',
    backToBlog: 'Retour au blog',
    formName: 'Nom',
    formEmail: 'Email',
    formMessage: 'Message',
    formSend: 'Envoyer',
    formSending: 'Envoi en cours...',
    formSuccess: '✓ Message envoyé! Je vous repondrai bientôt.',
    formError: 'Erreur lors de l\'envoi du message. Veuillez reessayer ou m\'envoyer un email directement.'
  },
  rw: {
    navAbout: 'Ibyanjye',
    navProjects: 'Imishinga',
    navBlog: 'Blog',
    navSkills: 'Ubushobozi',
    navContact: 'Tuvugane',
    viewProjects: 'Reba imishinga',
    contactMe: 'Vugana nanjye',
    hireMe: 'Nkorana nanjye',
    subtitle: 'Inzobere muri software ikorera i Kigali, Rwanda',
    lede:
      'Nhindura ibitekerezo bya software bikavamo ibisubizo byizewe bifite architecture nziza, gutanga neza no kugira umumaro ugaragara.',
    summaryTitle: 'Bio',
    educationTitle: 'Amashuri',
    capabilitiesTitle: 'Ubushobozi bwanjye',
    experienceTitle: 'Uburambe',
    skillsTitle: 'Ubumenyi bwa tekiniki',
    languagesTitle: 'Indimi',
    certificationsTitle: 'Impamyabushobozi',
    workflowTitle: 'Uko nkora',
    contactTitle: 'Twavugana',
    contactBody:
      'Niteguye amahirwe y akazi muri software engineering, ubufatanye n imishinga ikeneye full-stack yizewe.',
    backToTop: 'Subira hejuru',
    projectPagesTitle: 'Paji z imishinga',
    projectPagesIntro:
      'Buri mushinga ufite URL yawo ku buryo ushobora kuyisangiza mu busabe bw akazi, ubutumwa cyangwa CV.',
    openProjectPage: 'Fungura paji y umushinga',
    projectDetail: 'Ibisobanuro by umushinga',
    backToAllProjects: 'Subira ku mishinga yose',
    liveDemo: 'Reba uko ikora',
    sourceCode: 'Kode y umushinga',
    challenge: 'Ikibazo',
    solution: 'Igisubizo',
    techStack: 'Tekinoloji',
    addLinks: 'Uko wongeramo links',
    addLinksBody:
      'Andika liveUrl na repoUrl mu mushinga uri muri src/data/projects.ts. Buttons zizahita zigaragara kuri iyi paji.',
    blogTitle: 'Blog',
    blogIntro: 'Imibare nibyo numva bijyanye iterambere ry isoferi, gukemura ibibazo n iterambere ryagenka.',
    backToBlog: 'Subira ku blog',
    formName: 'Izina',
    formEmail: 'Email',
    formMessage: 'Ubutumwa',
    formSend: 'Ohereza',
    formSending: 'Ihereza...',
    formSuccess: '✓ Ubutumwa bwaherejwe! Nizakusubiza haruguru.',
    formError: 'Ikosa mu gereza ry\'ubutumwa. Gerageza nanone cyangwa nandike email.'
  }
} as const;

export function getLang(value?: string): Lang {
  if (value === 'fr' || value === 'rw' || value === 'en') {
    return value;
  }

  return 'en';
}