export const translations = {
  nl: {
    nav: {
      home: 'Home',
      about: 'Over',
      experience: 'Ervaring',
      projects: 'Projecten',
      contact: 'Contact',
    },
    hero: {
      title: 'Full Stack Developer',
      description: 'Digitale ervaringen creëren met moderne webtechnologieën.',
      description2: 'Gepassioneerd door clean code en elegant design.',
      viewWork: 'Bekijk Werk',
    },
    about: {
      title: 'Over',
      intro: 'Een gepassioneerde ontwikkelaar met 9 jaar programmeerervaring als hobby en 1 jaar professionele ervaring, toegewijd aan het creëren van uitzonderlijke digitale ervaringen en het oplossen van complexe problemen.',
      journey: 'Mijn Reis',
      journeyText1: 'Mijn programmeerreis begon op <strong>14-jarige leeftijd</strong> als hobby toen ik de magie ontdekte van het omzetten van ideeën in realiteit door middel van code. Wat begon als nieuwsgierigheid werd al snel een brandende passie die me de afgelopen 9 jaar heeft gedreven.',
      journeyText2: 'Tijdens mijn studie aan <strong>Het Spectrum Kantoor (2014-2021)</strong> ontving ik een stage-award voor het maken van tools die medestudenten hielpen. Deze vroege erkenning toonde me de kracht van technologie om een positieve impact te maken.',
      journeyText3: 'Ik studeerde af aan <strong>Artevelde Hogeschool</strong> met een diploma in Programmeren (2021-2024), waar ik mijn vaardigheden in moderne webontwikkeling aanscherpte en leerde problemen te benaderen met zowel creativiteit als technische precisie. Sinds september 2024 werk ik professioneel als Full Stack Developer bij Simcogroup.',
      skills: 'Technische Vaardigheden',
      languages: 'Talen',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools & Technologieën',
      spokenLanguages: 'Talen die ik spreek',
      highlight1Title: '9+ Jaar Coderen',
      highlight1Desc: 'Hobby sinds 14 jaar oud',
      highlight2Title: 'Award Winnaar',
      highlight2Desc: 'Stage-award voor tool ontwikkeling',
      highlight3Title: 'Full Stack',
      highlight3Desc: 'Frontend en backend expertise',
      highlight4Title: 'Modern Tech',
      highlight4Desc: 'Altijd up-to-date met trends',
    },
    experience: {
      title: 'Ervaring',
      intro: 'Van student tot professionele ontwikkelaar - een tijdlijn van groei, leren en prestaties.',
      achievements: 'Belangrijkste Prestaties',
      jobs: {
        simcogroup: {
          title: 'Full Stack Developer',
          period: 'September 2024 - Heden',
          location: 'België',
          type: 'Fulltime',
          description: 'Ontwikkelen van geavanceerde applicaties en webplatformen met moderne technologieën.',
          achievements: [
            'Ontwikkelde cross-platform mobiele apps voor Android en iOS met Tauri en React',
            'Focus op gebruiksvriendelijke designs met duidelijke typografie en intuïtieve interfaces',
            'Configureerde NGINX als webserver voor Laravel applicaties',
            'Implementeerde NGINX als reverse proxy voor Next.js applicaties',
            'Configureerde Cloudflare als DNS provider voor optimale beveiliging en prestaties',
            'Bouwde schaalbare webplatformen met Next.js, Laravel en NestJS'
          ]
        },
        techbirds: {
          title: 'Software Development Stagiair',
          period: 'April 2024 - Mei 2024',
          location: 'België',
          type: 'Stage',
          description: 'Intensieve stage gericht op moderne ontwikkelpraktijken en teamcollaboratie.',
          achievements: [
            'Ontwikkelde essentiële soft skills waaronder communicatie en teamwerk',
            'Bouwde applicaties met C#, TypeScript en Next.js',
            'Leerde en paste scaffolding technieken toe voor efficiënte code generatie',
            'Implementeerde CI/CD processen om ontwikkelworkflows te optimaliseren',
            'Ervaring opgedaan met moderne ontwikkelmethodologieën'
          ]
        },
        artevelde: {
          title: 'Student - Graduaat Programmeren',
          period: '2021 - 2024',
          location: 'Gent, België',
          type: 'Opleiding',
          description: 'Uitgebreide programmeeropleiding gericht op moderne webontwikkeling.',
          achievements: [
            'Afgestudeerd met sterke basis in programmeerprincipes',
            'Gespecialiseerd in webontwikkelingstechnologieën',
            'Voltooide verschillende projecten met moderne frameworks',
            'Ontwikkelde probleemoplossend en analytisch denkvermogen'
          ]
        },
        spectrum: {
          title: 'Student - Kantoor',
          period: '2014 - 2021',
          location: 'België',
          type: 'Opleiding',
          description: 'Secundair onderwijs met focus op kantooradministratie en vroege programmeerervaring.',
          achievements: [
            'Ontving stage-award voor het maken van innovatieve tools',
            'Ontwikkelde tools die medestudenten hielpen tijdens stages',
            'Erkend door professionals uit de industrie voor uitzonderlijk werk',
            'Vroege demonstratie van programmeertalent en probleemoplossend vermogen'
          ]
        }
      }
    },
    projects: {
      title: 'Geselecteerd Werk',
      intro: 'Een showcase van mijn werk, variërend van mobiele apps, webplatforms en innovatieve tools die echte problemen oplossen.',
      features: 'Belangrijkste Features',
      all: 'Alles',
      mobile: 'Mobiel',
      web: 'Web',
      tools: 'Tools',
      items: {
        crossPlatform: {
          title: 'Cross-Platform Desktop & Mobiele Apps',
          description: 'Ontwikkelde applicaties voor Windows, macOS, iOS en Android met Tauri en React met focus op gebruiksvriendelijk design en duidelijke typografie.',
          features: [
            'Windows, macOS, iOS & Android ondersteuning',
            'Gebruiksvriendelijk interface design',
            'Duidelijke typografie en toegankelijkheid',
            'Native prestaties met webtechnologieën'
          ],
          status: 'Professioneel'
        },
        webPlatform: {
          title: 'Webplatform Infrastructuur',
          description: 'Bouwde schaalbare webplatformen met Next.js, Laravel en NestJS met NGINX configuratie en Cloudflare integratie.',
          features: [
            'NGINX webserver configuratie voor Laravel',
            'Reverse proxy setup voor Next.js',
            'Cloudflare DNS en beveiligingsoptimalisatie',
            'Schaalbaar architectuurontwerp'
          ],
          status: 'Professioneel'
        },
        modernWeb: {
          title: 'Moderne Webapplicaties',
          description: 'Ontwikkelde applicaties met C#, TypeScript en Next.js met focus op moderne ontwikkelpraktijken en CI/CD.',
          features: [
            'Moderne scaffolding technieken',
            'Geautomatiseerde CI/CD pipelines',
            'Clean code architectuur',
            'Team samenwerkingsworkflows'
          ],
          status: 'Stage'
        },
        studentTools: {
          title: 'Student Tool Suite',
          description: 'Creëerde innovatieve tools die medestudenten hielpen tijdens stages, met erkenning van professionals uit de industrie.',
          features: [
            'Student productiviteitsverbetering',
            'Intuïtieve gebruikersinterface',
            'Probleemoplossende automatisering',
            'Peer samenwerkingsfuncties'
          ],
          status: 'Award Winnaar'
        }
      }
    },
    contact: {
      title: 'Neem Contact Op',
      intro: 'Klaar om je volgende project te starten? Ik hoor graag over je ideeën en bespreek hoe we samen kunnen werken om ze tot leven te brengen.',
      name: 'Je naam',
      email: 'Je email',
      subject: 'Onderwerp',
      message: 'Je bericht',
      send: 'Verstuur Bericht',
      emailTitle: 'Email',
      emailValue: 'Laten we verbinden',
      emailDesc: 'Ik reageer meestal binnen 24 uur',
      githubTitle: 'GitHub',
      githubValue: '@dionvanhecke',
      githubDesc: 'Bekijk mijn laatste projecten',
      linkedinTitle: 'LinkedIn',
      linkedinValue: 'Professioneel Netwerk',
      linkedinDesc: 'Laten we professioneel verbinden',
      locationTitle: 'Locatie',
      locationValue: 'België',
      locationDesc: 'Open voor remote mogelijkheden',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      experience: 'Expérience',
      projects: 'Projets',
      contact: 'Contact',
    },
    hero: {
      title: 'Développeur Full Stack',
      description: 'Créer des expériences numériques avec des technologies web modernes.',
      description2: 'Passionné par le code propre et le design élégant.',
      viewWork: 'Voir le Travail',
    },
    about: {
      title: 'À propos',
      intro: 'Un développeur passionné avec 9 ans d\'expérience en programmation comme hobby et 1 an d\'expérience professionnelle, dédié à la création d\'expériences numériques exceptionnelles et à la résolution de problèmes complexes.',
      journey: 'Mon Parcours',
      journeyText1: 'Mon parcours de programmation a commencé à <strong>14 ans</strong> comme hobby lorsque j\'ai découvert la magie de transformer des idées en réalité grâce au code. Ce qui a commencé comme de la curiosité est rapidement devenu une passion ardente qui m\'anime depuis 9 ans.',
      journeyText2: 'Pendant mes études à <strong>Het Spectrum Kantoor (2014-2021)</strong>, j\'ai reçu un prix de stage pour la création d\'outils qui ont aidé mes camarades étudiants. Cette reconnaissance précoce m\'a montré le pouvoir de la technologie pour avoir un impact positif.',
      journeyText3: 'J\'ai obtenu mon diplôme de <strong>Artevelde Hogeschool</strong> en Programmation (2021-2024), où j\'ai perfectionné mes compétences en développement web moderne et appris à aborder les problèmes avec créativité et précision technique. Depuis septembre 2024, je travaille professionnellement comme développeur Full Stack chez Simcogroup.',
      skills: 'Compétences Techniques',
      languages: 'Langages',
      frameworks: 'Frameworks & Bibliothèques',
      tools: 'Outils & Technologies',
      spokenLanguages: 'Langues que je parle',
      highlight1Title: '9+ Ans de Code',
      highlight1Desc: 'Hobby depuis 14 ans',
      highlight2Title: 'Lauréat',
      highlight2Desc: 'Prix de stage pour développement d\'outils',
      highlight3Title: 'Full Stack',
      highlight3Desc: 'Expertise frontend et backend',
      highlight4Title: 'Tech Moderne',
      highlight4Desc: 'Toujours à jour avec les tendances',
    },
    experience: {
      title: 'Expérience',
      intro: 'D\'étudiant à développeur professionnel - une chronologie de croissance, d\'apprentissage et de réalisations.',
      achievements: 'Réalisations Clés',
      jobs: {
        simcogroup: {
          title: 'Développeur Full Stack',
          period: 'Septembre 2024 - Présent',
          location: 'Belgique',
          type: 'Temps plein',
          description: 'Développement d\'applications de pointe et de plateformes web avec des technologies modernes.',
          achievements: [
            'Développé des applications mobiles multiplateformes pour Android et iOS avec Tauri et React',
            'Concentré sur des designs conviviaux avec une typographie claire et des interfaces intuitives',
            'Configuré NGINX comme serveur web pour les applications Laravel',
            'Implémenté NGINX comme proxy inverse pour les applications Next.js',
            'Configuré Cloudflare comme fournisseur DNS pour une sécurité et des performances optimales',
            'Construit des plateformes web évolutives avec Next.js, Laravel et NestJS'
          ]
        },
        techbirds: {
          title: 'Stagiaire en Développement Logiciel',
          period: 'Avril 2024 - Mai 2024',
          location: 'Belgique',
          type: 'Stage',
          description: 'Stage intensif axé sur les pratiques de développement modernes et la collaboration en équipe.',
          achievements: [
            'Développé des compétences interpersonnelles essentielles, notamment la communication et le travail d\'équipe',
            'Construit des applications avec C#, TypeScript et Next.js',
            'Appris et appliqué des techniques de scaffolding pour une génération de code efficace',
            'Implémenté des processus CI/CD pour optimiser les flux de travail de développement',
            'Acquis de l\'expérience avec les méthodologies de développement modernes'
          ]
        },
        artevelde: {
          title: 'Étudiant - Graduaat Programmeren',
          period: '2021 - 2024',
          location: 'Gand, Belgique',
          type: 'Éducation',
          description: 'Formation complète en programmation axée sur le développement web moderne.',
          achievements: [
            'Diplômé avec une base solide en principes de programmation',
            'Spécialisé dans les technologies de développement web',
            'Complété divers projets utilisant des frameworks modernes',
            'Développé des compétences en résolution de problèmes et en pensée analytique'
          ]
        },
        spectrum: {
          title: 'Étudiant - Kantoor',
          period: '2014 - 2021',
          location: 'Belgique',
          type: 'Éducation',
          description: 'Enseignement secondaire axé sur l\'administration de bureau et l\'exposition précoce à la programmation.',
          achievements: [
            'Reçu un prix de stage pour la création d\'outils innovants',
            'Développé des outils qui ont aidé les camarades étudiants pendant les stages',
            'Reconnu par des professionnels de l\'industrie pour un travail exceptionnel',
            'Démonstration précoce d\'aptitudes en programmation et en résolution de problèmes'
          ]
        }
      }
    },
    projects: {
      title: 'Travaux Sélectionnés',
      intro: 'Une vitrine de mon travail couvrant des applications mobiles, des plateformes web et des outils innovants qui résolvent des problèmes réels.',
      features: 'Fonctionnalités Clés',
      all: 'Tout',
      mobile: 'Mobile',
      web: 'Web',
      tools: 'Outils',
      items: {
        crossPlatform: {
          title: 'Applications Desktop & Mobile Multiplateformes',
          description: 'Développé des applications pour Windows, macOS, iOS et Android avec Tauri et React en mettant l\'accent sur un design convivial et une typographie claire.',
          features: [
            'Support Windows, macOS, iOS & Android',
            'Design d\'interface convivial',
            'Typographie claire et accessibilité',
            'Performances natives avec technologies web'
          ],
          status: 'Professionnel'
        },
        webPlatform: {
          title: 'Infrastructure de Plateforme Web',
          description: 'Construit des plateformes web évolutives avec Next.js, Laravel et NestJS avec configuration NGINX et intégration Cloudflare.',
          features: [
            'Configuration serveur web NGINX pour Laravel',
            'Configuration proxy inverse pour Next.js',
            'Optimisation DNS et sécurité Cloudflare',
            'Conception d\'architecture évolutive'
          ],
          status: 'Professionnel'
        },
        modernWeb: {
          title: 'Applications Web Modernes',
          description: 'Développé des applications avec C#, TypeScript et Next.js en mettant l\'accent sur les pratiques de développement modernes et CI/CD.',
          features: [
            'Techniques de scaffolding modernes',
            'Pipelines CI/CD automatisés',
            'Architecture de code propre',
            'Flux de travail de collaboration en équipe'
          ],
          status: 'Stage'
        },
        studentTools: {
          title: 'Suite d\'Outils Étudiants',
          description: 'Créé des outils innovants qui ont aidé les camarades étudiants pendant les stages, avec reconnaissance des professionnels de l\'industrie.',
          features: [
            'Amélioration de la productivité étudiante',
            'Interface utilisateur intuitive',
            'Automatisation de résolution de problèmes',
            'Fonctionnalités de collaboration entre pairs'
          ],
          status: 'Lauréat'
        }
      }
    },
    contact: {
      title: 'Contactez-moi',
      intro: 'Prêt à démarrer votre prochain projet? J\'aimerais entendre parler de vos idées et discuter de la façon dont nous pouvons travailler ensemble pour les concrétiser.',
      name: 'Votre nom',
      email: 'Votre email',
      subject: 'Sujet',
      message: 'Votre message',
      send: 'Envoyer le Message',
      emailTitle: 'Email',
      emailValue: 'Connectons-nous',
      emailDesc: 'Je réponds généralement dans les 24 heures',
      githubTitle: 'GitHub',
      githubValue: '@dionvanhecke',
      githubDesc: 'Découvrez mes derniers projets',
      linkedinTitle: 'LinkedIn',
      linkedinValue: 'Réseau Professionnel',
      linkedinDesc: 'Connectons-nous professionnellement',
      locationTitle: 'Localisation',
      locationValue: 'Belgique',
      locationDesc: 'Ouvert aux opportunités à distance',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      title: 'Full Stack Developer',
      description: 'Crafting digital experiences with modern web technologies.',
      description2: 'Passionate about clean code and elegant design.',
      viewWork: 'View Work',
    },
    about: {
      title: 'About',
      intro: 'A passionate developer with 9 years of coding experience as a hobby and 1 year of professional experience, dedicated to creating exceptional digital experiences and solving complex problems.',
      journey: 'My Journey',
      journeyText1: 'My programming journey began at <strong>14 years old</strong> as a hobby when I discovered the magic of turning ideas into reality through code. What started as curiosity quickly became a burning passion that has driven me for the past 9 years.',
      journeyText2: 'During my studies at <strong>Het Spectrum Kantoor (2014-2021)</strong>, I received an internship award for creating tools that helped fellow students. This early recognition showed me the power of technology to make a positive impact.',
      journeyText3: 'I graduated from <strong>Artevelde Hogeschool</strong> with a degree in Programming (2021-2024), where I honed my skills in modern web development and learned to approach problems with both creativity and technical precision. Since September 2024, I work professionally as a Full Stack Developer at Simcogroup.',
      skills: 'Technical Skills',
      languages: 'Languages',
      frameworks: 'Frameworks & Libraries',
      tools: 'Tools & Technologies',
      spokenLanguages: 'Languages I Speak',
      highlight1Title: '9+ Years Coding',
      highlight1Desc: 'Hobby since age 14',
      highlight2Title: 'Award Winner',
      highlight2Desc: 'Internship award for tool development',
      highlight3Title: 'Full Stack',
      highlight3Desc: 'Frontend and backend expertise',
      highlight4Title: 'Modern Tech',
      highlight4Desc: 'Always up-to-date with trends',
    },
    experience: {
      title: 'Experience',
      intro: 'From student to professional developer - a timeline of growth, learning, and achievements.',
      achievements: 'Key Achievements',
      jobs: {
        simcogroup: {
          title: 'Full Stack Developer',
          period: 'September 2024 - Present',
          location: 'Belgium',
          type: 'Full-time',
          description: 'Developing cutting-edge applications and web platforms with modern technologies.',
          achievements: [
            'Developed cross-platform mobile apps for Android and iOS using Tauri and React',
            'Focused on user-friendly designs with clear typography and intuitive interfaces',
            'Configured NGINX as webserver for Laravel applications',
            'Implemented NGINX as reverse proxy for Next.js applications',
            'Set up Cloudflare as DNS provider for optimal security and performance',
            'Built scalable web platforms using Next.js, Laravel, and NestJS'
          ]
        },
        techbirds: {
          title: 'Software Development Intern',
          period: 'April 2024 - May 2024',
          location: 'Belgium',
          type: 'Internship',
          description: 'Intensive internship focused on modern development practices and team collaboration.',
          achievements: [
            'Developed essential soft skills including communication and teamwork',
            'Built applications using C#, TypeScript, and Next.js',
            'Learned and applied scaffolding techniques for efficient code generation',
            'Implemented CI/CD processes to optimize development workflows',
            'Gained experience with modern development methodologies'
          ]
        },
        artevelde: {
          title: 'Student - Graduaat Programmeren',
          period: '2021 - 2024',
          location: 'Ghent, Belgium',
          type: 'Education',
          description: 'Comprehensive programming education focusing on modern web development.',
          achievements: [
            'Graduated with strong foundation in programming principles',
            'Specialized in web development technologies',
            'Completed various projects using modern frameworks',
            'Developed problem-solving and analytical thinking skills'
          ]
        },
        spectrum: {
          title: 'Student - Kantoor',
          period: '2014 - 2021',
          location: 'Belgium',
          type: 'Education',
          description: 'Secondary education with focus on office administration and early programming exposure.',
          achievements: [
            'Received internship award for creating innovative tools',
            'Developed tools that helped fellow students during internships',
            'Recognized by industry professionals for exceptional work',
            'Early demonstration of programming aptitude and problem-solving skills'
          ]
        }
      }
    },
    projects: {
      title: 'Selected Work',
      intro: 'A showcase of my work spanning mobile apps, web platforms, and innovative tools that solve real-world problems.',
      features: 'Key Features',
      all: 'All',
      mobile: 'Mobile',
      web: 'Web',
      tools: 'Tools',
      items: {
        crossPlatform: {
          title: 'Cross-Platform Desktop & Mobile Apps',
          description: 'Developed applications for Windows, macOS, iOS, and Android using Tauri and React with focus on user-friendly design and clear typography.',
          features: [
            'Windows, macOS, iOS & Android support',
            'User-friendly interface design',
            'Clear typography and accessibility',
            'Native performance with web technologies'
          ],
          status: 'Professional'
        },
        webPlatform: {
          title: 'Web Platform Infrastructure',
          description: 'Built scalable web platforms using Next.js, Laravel, and NestJS with NGINX configuration and Cloudflare integration.',
          features: [
            'NGINX webserver configuration for Laravel',
            'Reverse proxy setup for Next.js',
            'Cloudflare DNS and security optimization',
            'Scalable architecture design'
          ],
          status: 'Professional'
        },
        modernWeb: {
          title: 'Modern Web Applications',
          description: 'Developed applications using C#, TypeScript, and Next.js with focus on modern development practices and CI/CD.',
          features: [
            'Modern scaffolding techniques',
            'Automated CI/CD pipelines',
            'Clean code architecture',
            'Team collaboration workflows'
          ],
          status: 'Internship'
        },
        studentTools: {
          title: 'Student Tool Suite',
          description: 'Created innovative tools that helped fellow students during internships, earning recognition from industry professionals.',
          features: [
            'Student productivity enhancement',
            'Intuitive user interface',
            'Problem-solving automation',
            'Peer collaboration features'
          ],
          status: 'Award Winner'
        }
      }
    },
    contact: {
      title: 'Get In Touch',
      intro: 'Ready to start your next project? I\'d love to hear about your ideas and discuss how we can work together to bring them to life.',
      name: 'Your name',
      email: 'Your email',
      subject: 'Subject',
      message: 'Your message',
      send: 'Send Message',
      emailTitle: 'Email',
      emailValue: 'Let\'s connect',
      emailDesc: 'I typically respond within 24 hours',
      githubTitle: 'GitHub',
      githubValue: '@dionvanhecke',
      githubDesc: 'Check out my latest projects',
      linkedinTitle: 'LinkedIn',
      linkedinValue: 'Professional Network',
      linkedinDesc: 'Let\'s connect professionally',
      locationTitle: 'Location',
      locationValue: 'Belgium',
      locationDesc: 'Open to remote opportunities',
    },
  },
}

export type Language = 'nl' | 'fr' | 'en'
