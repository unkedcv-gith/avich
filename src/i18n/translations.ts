export interface SpeciesTrialItem {
  name: string;
  trialTitle: string;
  trialType: string;
  protocol: string;
  parameters: string[];
}

export interface TeamMemberTranslation {
  role: string;
  desc: string;
  tags: string[];
}

export interface TranslationSchema {
  nav: {
    about: string;
    services: string;
    species: string;
    differentiators: string;
    news: string;
    contact: string;
    subtitle: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    ctaServices: string;
    ctaAbout: string;
  };
  about: {
    metrics: {
      years: { suffix: string; desc: string };
      trials: { suffix: string; desc: string };
      samples: { suffix: string; desc: string };
    };
    tag: string;
    heading: string;
    p1: string;
    p2: string;
    seeMore: string;
    cards: Array<{
      tag: string;
      title: string;
      preview: string;
      detail: string;
    }>;
  };
  workModel: {
    tag: string;
    title: string;
    subtitle: string;
    m1: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
      footer: string;
    };
    m2: {
      tag: string;
      title: string;
      desc: string;
      bullets: string[];
      footer: string;
    };
    noteBold: string;
    noteText: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    consultProtocol: string;
    items: Array<{
      label: string;
      title: string;
      desc: string;
    }>;
  };
  process: {
    tag: string;
    title: string;
    steps: Array<{
      title: string;
      desc: string;
    }>;
    cardTag: string;
    cardTitle: string;
    cardDesc: string;
    tags: string[];
    values: string[];
  };
  species: {
    tag: string;
    title: string;
    subtitle: string;
    productionTitle: string;
    productionSub: string;
    productionItems: SpeciesTrialItem[];
    companionTitle: string;
    companionSub: string;
    companionItems: SpeciesTrialItem[];
    simulatedTrial: string;
    productionFooter: string;
    companionFooter: string;
  };
  team: {
    tag: string;
    title: string;
    subtitle: string;
    quote: string;
    members: TeamMemberTranslation[];
  };
  whyUs: {
    tag: string;
    title: string;
    p1: {
      beforeVich: string;
      vichBold: string;
      afterVich: string;
      aBold: string;
      afterA: string;
    };
    p2: string;
    vichFooter: string;
  };
  news: {
    badge: string;
    title: string;
    subtitle: string;
    empty: string;
    readMore: string;
    loadMore: string;
  };
  clients: {
    tag: string;
    title: string;
    subtitle: string;
    prevAria: string;
    nextAria: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    emailLabel: string;
    locationLabel: string;
    locationValue: string;
    form: {
      name: string;
      company: string;
      email: string;
      species: string;
      speciesOptions: string[];
      modality: string;
      modalityOptions: string[];
      productDetails: string;
      placeholder: string;
      submit: string;
      confidentiality: string;
      successTitle: string;
      successDesc: string;
    };
  };
  footer: {
    rights: string;
    croDesc: string;
    adminTitle: string;
    adminAria: string;
  };
  mobileNav: {
    home: string;
    species: string;
    services: string;
    team: string;
    contact: string;
  };
  whatsApp: {
    tooltip: string;
    message: string;
    aria: string;
  };
  languageSelector: {
    ariaLabel: string;
    title: string;
  };
}

export const translations: Record<'es' | 'en' | 'pt', TranslationSchema> = {
  // ==========================================
  // SPANISH (DEFAULT)
  // ==========================================
  es: {
    nav: {
      about: 'Qué hacemos',
      services: 'Servicios',
      species: 'Especies',
      differentiators: 'Por qué elegirnos',
      news: 'Novedades',
      contact: 'Contacto',
      subtitle: 'Veterinary Research'
    },
    hero: {
      badge: 'Veterinary Research',
      title: 'Gestión integral de ensayos clínicos veterinarios',
      description: 'Diseñamos, ejecutamos y gestionamos estudios clínicos bajo estándares internacionales para el registro de productos ante SENASA y organismos regulatorios.',
      ctaServices: 'Conocé nuestros servicios',
      ctaAbout: 'Descubrí AVICH'
    },
    about: {
      metrics: {
        years: {
          suffix: 'años de trayectoria',
          desc: 'de nuestro equipo en la industria veterinaria'
        },
        trials: {
          suffix: 'ensayos realizados',
          desc: 'estudios clínicos y de campo ejecutados bajo normativa VICH'
        },
        samples: {
          suffix: 'muestras mensuales',
          desc: 'procesadas y analizadas con trazabilidad y alta rigurosidad'
        }
      },
      tag: 'Quiénes Somos',
      heading: 'Una CRO veterinaria hecha por veterinarios.',
      p1: 'AVICH es una Contract Research Organization especializada en productos veterinarios. Somos un equipo interdisciplinario con más de 20 años en la industria, especializado en la conducción de estudios clínicos en animales de producción y de compañía.',
      p2: 'Trabajamos junto a universidades y profesionales de toda la región para ofrecer un servicio integral: desde el diseño del protocolo hasta el registro, cumpliendo los requisitos vigentes de los entes reguladores de cada país.',
      seeMore: 'Ver más',
      cards: [
        {
          tag: 'Qué estudiamos',
          title: 'Eficacia, seguridad, farmacocinética y estudios de campo',
          preview: 'Medicamentos, vacunas y nuevas tecnologías',
          detail: 'Diseño y ejecución de protocolos de alta rigurosidad para aprobación y registro de productos veterinarios.'
        },
        {
          tag: 'Bajo qué marco',
          title: 'Guías VICH de Buenas Prácticas Clínicas',
          preview: 'VICH GL9 (GCP) y normativa local vigente',
          detail: 'Armonización técnica internacional que asegura que cada informe sea auditable ante organismos de control.'
        },
        {
          tag: 'Para quién',
          title: 'Laboratorios que desarrollan o registran productos',
          preview: 'En Argentina y toda la región',
          detail: 'Flexibilidad para empresas que requieren capacidad de campo o tercerización integral de punta a punta.'
        },
        {
          tag: 'Ante quién',
          title: 'Organismos regulatorios oficiales',
          preview: 'En Argentina, SENASA y entes regionales',
          detail: 'Confección y seguimiento proactivo de expedientes para optimizar tiempos de dictamen regulatorio.'
        }
      ]
    },
    workModel: {
      tag: 'El Diferencial',
      title: 'Un modelo de trabajo modular: el laboratorio elige cómo trabajar.',
      subtitle: 'Dos formas de acompañar el desarrollo y registro de un producto, según cuánto quiera delegar cada cliente.',
      m1: {
        tag: 'Modalidad 1',
        title: 'Soporte Técnico',
        desc: 'AVICH diseña y ejecuta los estudios, y entrega los protocolos e informes listos para que el laboratorio los presente por su cuenta ante el organismo regulatorio.',
        bullets: [
          'Diseño de protocolo y ejecución del estudio',
          'Informe final auditable, listo para presentar',
          'El laboratorio conserva la gestión regulatoria'
        ],
        footer: 'Para laboratorios con área regulatoria propia que necesitan capacidad de ejecución a campo.'
      },
      m2: {
        tag: 'Modalidad 2',
        title: 'Paquete Completo',
        desc: 'AVICH se encarga de todo el proceso de punta a punta: diseño, ejecución, informes y la presentación del expediente ante el organismo regulatorio.',
        bullets: [
          'Todo lo del Soporte Técnico',
          'Armado y presentación del expediente de registro',
          'Seguimiento del trámite hasta la aprobación'
        ],
        footer: 'Para laboratorios que quieren un único interlocutor desde la idea hasta el registro.'
      },
      noteBold: 'Ambas modalidades trabajan bajo el mismo estándar.',
      noteText: 'Cambia cuánto delega el laboratorio, no la calidad del estudio ni la confidencialidad con la que se maneja cada proyecto.'
    },
    services: {
      tag: 'Servicios',
      title: 'Lo que hacemos, estudio por estudio.',
      subtitle: 'Cada servicio puede contratarse dentro de cualquiera de las dos modalidades.',
      consultProtocol: 'Consultar protocolo',
      items: [
        {
          label: 'ENSAYOS CLÍNICOS',
          title: 'Estudios de eficacia',
          desc: 'Demostramos que el producto hace lo que promete, con diseño estadístico y controles adecuados a la especie y la indicación.'
        },
        {
          label: 'ENSAYOS CLÍNICOS',
          title: 'Estudios de seguridad',
          desc: 'Evaluamos tolerancia y seguridad en la especie de destino, incluyendo márgenes de dosis y observación de efectos adversos.'
        },
        {
          label: 'ENSAYOS CLÍNICOS',
          title: 'Farmacocinética y residuos',
          desc: 'Curvas de absorción y eliminación, tiempos de retiro y estudios de depleción de residuos para productos en animales de producción.'
        },
        {
          label: 'A CAMPO',
          title: 'Pruebas a campo',
          desc: 'Estudios en condiciones reales de producción, con la red de establecimientos y profesionales con la que trabajamos en toda la región.'
        },
        {
          label: 'REGULATORIO',
          title: 'Registro de productos',
          desc: 'Armado del expediente, presentación ante SENASA y seguimiento del trámite. Incluido en el Paquete Completo.'
        },
        {
          label: 'COMPLEMENTARIOS',
          title: 'Asesoramiento y formación',
          desc: 'Consultoría a terceros, y charlas y capacitación en registro y lanzamiento de productos veterinarios.'
        }
      ]
    },
    process: {
      tag: 'Cómo trabajamos',
      title: 'De la idea al registro, en cuatro pasos.',
      steps: [
        {
          title: 'Definición',
          desc: 'Entendemos el producto, la indicación y el mercado de destino, y definimos qué estudios exige el registro.'
        },
        {
          title: 'Protocolo',
          desc: 'Diseñamos el protocolo según guías VICH-GCP y la normativa local, con diseño estadístico y comité de ética cuando corresponde.'
        },
        {
          title: 'Ejecución',
          desc: 'Conducimos el estudio a campo o en clínica, con monitoreo, registros trazables y control de calidad de los datos.'
        },
        {
          title: 'Informe y registro',
          desc: 'Entregamos el informe final auditable. En Paquete Completo, presentamos y seguimos el expediente ante el organismo regulatorio.'
        }
      ],
      cardTag: 'Estándares y valores',
      cardTitle: 'Trabajamos según las guías VICH de Buenas Prácticas Clínicas.',
      cardDesc: 'VICH es el programa internacional que armoniza los requisitos técnicos para el registro de productos veterinarios entre la Unión Europea, Japón y Estados Unidos. Sus guías son el marco de referencia de nuestro trabajo.',
      tags: ['VICH GL9 · GCP', 'SENASA', 'Normativa regional'],
      values: ['Credibilidad', 'Confianza', 'Confidencialidad', 'Transparencia', 'Ética', 'Agilidad']
    },
    species: {
      tag: 'Especies',
      title: 'Producción y compañía,\ncon el mismo rigor.',
      subtitle: 'Selecciona una especie para conocer un ejemplo de protocolo y diseño experimental que ejecutamos bajo estándares VICH.',
      productionTitle: 'Animales de producción',
      productionSub: 'Ensayos a corral y a campo',
      productionItems: [
        {
          name: 'Bovinos',
          trialTitle: 'Eficacia antiparasitaria y curvas de depleción tisular (LMR)',
          trialType: 'Ensayo a campo & Bioequivalencia',
          protocol: 'Evaluación de formulaciones inyectables y pour-on en rodeos de carne y tambos lecheros. Monitoreo de eficacia fecal (FECRT) y determinación de tiempos de retiro reglamentarios.',
          parameters: ['VICH GL9 (GCP)', 'Curvas de retiro', 'Trazabilidad individual', 'Seguridad local']
        },
        {
          name: 'Ovinos',
          trialTitle: 'Eficacia frente a nematodos gastrointestinales y ectoparásitos',
          trialType: 'Ensayo a corral y a campo',
          protocol: 'Estudio controlado de eficacia terapéutica en majadas comerciales con desafío natural y artificial. Monitoreo de coprocultivos seriados y tolerancia tisular.',
          parameters: ['Eficacia fecal >95%', 'Evaluación dermatológica', 'Tiempos de retiro en lana/carne']
        },
        {
          name: 'Caprinos',
          trialTitle: 'Farmacocinética comparada y residuos en leche caprina',
          trialType: 'Estudio PK/PD y Seguridad',
          protocol: 'Caracterización de perfiles plasmáticos y excreción láctea en animales de tambo caprino bajo esquemas de dosificación escalonada y análisis cromatográfico por HPLC/MS.',
          parameters: ['Perfil farmacocinético', 'Residuos lácteos', 'Monitoreo bioquímico']
        },
        {
          name: 'Equinos',
          trialTitle: 'Seguridad y eficacia de antiinflamatorios no esteroides (AINEs)',
          trialType: 'Ensayo clínico en equinos deportivos',
          protocol: 'Evaluación de respuesta analgésica y antiinflamatoria en patologías musculoesqueléticas, con seguimiento termográfico, ecográfico y control estricto de farmacovigilancia.',
          parameters: ['Control antidoping VICH', 'Tolerancia gástrica', 'Seguimiento ecográfico']
        },
        {
          name: 'Aves',
          trialTitle: 'Inmunogenicidad de biológicos y promotores zootécnicos',
          trialType: 'Ensayo en parrilleros y ponedoras',
          protocol: 'Evaluación serológica de anticuerpos post-vacunación, índice de conversión alimenticia y monitoreo de lesiones intestinales (score de Johnson & Reid) en galpones experimentales.',
          parameters: ['Conversión alimenticia', 'Titulación serológica ELISA', 'Residuos en huevo y carne']
        }
      ],
      companionTitle: 'Animales de compañía',
      companionSub: 'Ensayos clínicos y veterinarias asociadas',
      companionItems: [
        {
          name: 'Caninos',
          trialTitle: 'Eficacia clínica multicéntrica en dolor articular crónico (OA)',
          trialType: 'Ensayo clínico ciego con propietarios',
          protocol: 'Estudio en clínicas asociadas con consentimiento informado. Evaluación de mejoría funcional mediante escalas validadas (CBPI / LOAD) y parámetros hematológicos seriados.',
          parameters: ['VICH GL9 (GCP)', 'Consentimiento informado', 'Escalas validadas CBPI', 'Doble ciego']
        },
        {
          name: 'Felinos',
          trialTitle: 'Pruebas de palatabilidad y tolerancia en patologías renales',
          trialType: 'Estudio de aceptación y seguridad específica',
          protocol: 'Evaluación de aceptación espontánea de presentaciones orales en gatos hogareños y seguimiento de seguridad renal (creatinina, SDMA, urea) con visitas programadas.',
          parameters: ["Test de dos opciones (palatabilidad)", 'Seguridad renal SDMA', "Bienestar animal 'Cat-Friendly'"]
        }
      ],
      simulatedTrial: 'Ensayo simulado',
      productionFooter: 'Monitoreo de bioseguridad y trazabilidad individual en cada lote',
      companionFooter: 'Consentimiento informado y apego a normas éticas y de bienestar animal'
    },
    team: {
      tag: 'Equipo',
      title: 'Tres veterinarios con años de servicio técnico y pruebas a campo.',
      subtitle: 'Los socios de AVICH vienen de la industria: conocen el trabajo desde el laboratorio, desde el campo y desde el expediente regulatorio.',
      quote: '"Sabemos lo que un laboratorio necesita porque estuvimos de ese lado: diseñando ensayos, acompañando registros y resolviendo problemas a campo."',
      members: [
        {
          role: 'SOCIO FUNDADOR · DIRECCIÓN TÉCNICA',
          desc: 'Médico veterinario con más de 20 años en servicio técnico de la industria veterinaria. Especializado en diseño y conducción de ensayos clínicos en animales de producción.',
          tags: ['Ensayos clínicos', 'Bovinos', 'Servicio técnico']
        },
        {
          role: 'SOCIO FUNDADOR · ESTUDIOS A CAMPO',
          desc: 'Médico veterinario con amplia experiencia en pruebas a campo y seguimiento de lotes en establecimientos productivos. Conduce los estudios en condiciones reales de producción.',
          tags: ['Pruebas a campo', 'Farmacocinética', 'Red regional']
        },
        {
          role: 'SOCIO FUNDADOR · ASUNTOS REGULATORIOS',
          desc: 'Médico veterinario especializado en registro de productos y vinculación con organismos regulatorios. Coordina la modalidad Paquete Completo y la formación a terceros.',
          tags: ['Registro SENASA', 'Capacitación', 'Compañía']
        }
      ]
    },
    whyUs: {
      tag: 'Por qué nos llamamos así',
      title: 'El nombre dice lo que hacemos.',
      p1: {
        beforeVich: 'AVICH lleva adentro ',
        vichBold: 'VICH',
        afterVich: ', el estándar internacional de Buenas Prácticas Clínicas para el registro de productos veterinarios. La A es de ',
        aBold: 'Asesoramiento',
        afterA: ': acompañar a cada laboratorio para que su producto llegue al registro con estudios confiables.'
      },
      p2: 'Trabajamos según las guías VICH; el programa fija estándares técnicos y no certifica empresas, y así lo comunicamos.',
      vichFooter: 'VICH: International Cooperation on Harmonisation of Technical Requirements for Registration of Veterinary Medicinal Products, desde 1996.'
    },
    news: {
      badge: 'Novedades & Actualidad',
      title: 'Últimas noticias de AVICH',
      subtitle: 'Innovación constante en investigación veterinaria, incorporación de biotecnología y avances en normativa VICH.',
      empty: 'No hay novedades publicadas por el momento.',
      readMore: 'Leer más',
      loadMore: 'Cargar más novedades'
    },
    clients: {
      tag: 'Trayectoria y Confianza',
      title: 'Clientes que confían en nosotros',
      subtitle: 'Acompañamos a laboratorios veterinarios líderes en cada fase del desarrollo, registro y cumplimiento normativo VICH.',
      prevAria: 'Cliente anterior',
      nextAria: 'Cliente siguiente'
    },
    contact: {
      tag: 'Contacto',
      title: 'Trabajemos juntos',
      subtitle: 'Escribinos para conocer más sobre nuestro modelo de trabajo y cómo podemos ayudar en el registro de tus productos.',
      emailLabel: 'Email',
      locationLabel: 'Ubicación',
      locationValue: 'Chascomús, Buenos Aires, Argentina',
      form: {
        name: 'Nombre',
        company: 'Laboratorio / empresa',
        email: 'Correo electrónico',
        species: 'Especie de destino',
        speciesOptions: ['Bovinos', 'Ovinos', 'Caprinos', 'Equinos', 'Aves', 'Caninos', 'Felinos', 'Varias / a definir'],
        modality: 'Modalidad',
        modalityOptions: ['No lo sé todavía', 'Soporte Técnico', 'Paquete Completo'],
        productDetails: 'Qué producto querés desarrollar o registrar',
        placeholder: 'Tipo de producto, indicación, etapa en la que está...',
        submit: 'Enviar consulta',
        confidentiality: 'Toda consulta se maneja bajo confidencialidad. Podemos firmar un acuerdo de confidencialidad antes de la primera reunión.',
        successTitle: '¡Consulta enviada!',
        successDesc: 'Gracias por contactarnos. Un especialista de AVICH se pondrá en contacto con vos a la brevedad.'
      }
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      croDesc: 'Contract Research Organization (CRO) en Argentina.',
      adminTitle: 'Administración de Novedades',
      adminAria: 'Acceso Administrador'
    },
    mobileNav: {
      home: 'Inicio',
      species: 'Especies',
      services: 'Servicios',
      team: 'Nosotros',
      contact: 'Contacto'
    },
    whatsApp: {
      tooltip: '¿En qué podemos ayudarte?',
      message: 'Hola, me gustaría recibir más información sobre los servicios de AVICH.',
      aria: 'Contactar por WhatsApp'
    },
    languageSelector: {
      ariaLabel: 'Seleccionar idioma',
      title: 'Idioma'
    }
  },

  // ==========================================
  // ENGLISH
  // ==========================================
  en: {
    nav: {
      about: 'What We Do',
      services: 'Services',
      species: 'Species',
      differentiators: 'Why Choose Us',
      news: 'News',
      contact: 'Contact',
      subtitle: 'Veterinary Research'
    },
    hero: {
      badge: 'Veterinary Research',
      title: 'Comprehensive management of veterinary clinical trials',
      description: 'We design, execute, and manage clinical studies under international standards for product registration with SENASA and regulatory authorities.',
      ctaServices: 'Explore our services',
      ctaAbout: 'Discover AVICH'
    },
    about: {
      metrics: {
        years: {
          suffix: 'years of track record',
          desc: 'of our specialized team in the veterinary industry'
        },
        trials: {
          suffix: 'trials conducted',
          desc: 'clinical and field studies performed under VICH standards'
        },
        samples: {
          suffix: 'monthly samples',
          desc: 'processed and analyzed with traceability and strict rigor'
        }
      },
      tag: 'About Us',
      heading: 'A veterinary CRO built by veterinarians.',
      p1: 'AVICH is a Contract Research Organization specialized in veterinary products. We are an interdisciplinary team with over 20 years in the industry, specialized in conducting clinical studies in livestock, poultry, and companion animals.',
      p2: 'We collaborate with universities and veterinary professionals across the region to provide an end-to-end service: from protocol design through registration, adhering to the requirements of regulatory agencies in each country.',
      seeMore: 'Learn more',
      cards: [
        {
          tag: 'What we study',
          title: 'Efficacy, safety, pharmacokinetics, and field studies',
          preview: 'Pharmaceuticals, biologicals, and novel technologies',
          detail: 'Design and execution of highly rigorous protocols for regulatory approval and registration of veterinary products.'
        },
        {
          tag: 'Under which framework',
          title: 'VICH Guidelines for Good Clinical Practice',
          preview: 'VICH GL9 (GCP) and current local regulations',
          detail: 'International technical harmonization ensuring every study report is fully auditable before regulatory agencies.'
        },
        {
          tag: 'Who it is for',
          title: 'Laboratories developing or registering products',
          preview: 'In Argentina and throughout the region',
          detail: 'Flexibility for companies requiring field execution capacity or turnkey full-cycle outsourcing.'
        },
        {
          tag: 'Before which authorities',
          title: 'Official regulatory agencies',
          preview: 'SENASA in Argentina and regional authorities',
          detail: 'Preparation and proactive dossier tracking to accelerate official technical rulings and registration timelines.'
        }
      ]
    },
    workModel: {
      tag: 'Our Differentiator',
      title: 'A modular working model: the laboratory decides how to partner.',
      subtitle: 'Two ways to accompany product development and registration, based on how much each client wishes to delegate.',
      m1: {
        tag: 'Modality 1',
        title: 'Technical Support',
        desc: 'AVICH designs and executes the studies, delivering audited protocols and reports ready for the laboratory to submit directly to regulatory authorities.',
        bullets: [
          'Protocol design and clinical study execution',
          'Auditable final report, ready for formal submission',
          'The laboratory retains regulatory filing management'
        ],
        footer: 'For pharmaceutical companies with an in-house regulatory team needing field trial execution capacity.'
      },
      m2: {
        tag: 'Modality 2',
        title: 'Full Package',
        desc: 'AVICH handles the entire process from start to finish: design, execution, reporting, and dossier submission to the regulatory agency.',
        bullets: [
          'Everything included in Technical Support',
          'Preparation and official filing of the registration dossier',
          'Administrative and technical follow-up until approval'
        ],
        footer: 'For laboratories that want a single trusted interlocutor from initial concept to official registration.'
      },
      noteBold: 'Both modalities operate under the exact same standard.',
      noteText: 'What changes is how much the laboratory delegates, not the scientific rigor, data integrity, or confidentiality applied to every project.'
    },
    services: {
      tag: 'Services',
      title: 'What we do, study by study.',
      subtitle: 'Each service can be engaged within either of the two operational modalities.',
      consultProtocol: 'Inquire about protocol',
      items: [
        {
          label: 'CLINICAL TRIALS',
          title: 'Efficacy studies',
          desc: 'We demonstrate that the product delivers on its clinical claims, with statistical design and controls tailored to the target species and indication.'
        },
        {
          label: 'CLINICAL TRIALS',
          title: 'Safety studies',
          desc: 'We evaluate target animal tolerance and safety, establishing margin of safety dosages and systematic adverse event surveillance.'
        },
        {
          label: 'CLINICAL TRIALS',
          title: 'Pharmacokinetics and residues',
          desc: 'Absorption and elimination profiles, withdrawal periods, and tissue residue depletion curves for food-producing animals.'
        },
        {
          label: 'FIELD TRIALS',
          title: 'Field trials',
          desc: 'Studies conducted under real commercial farming conditions, leveraging our established regional network of farms and veterinary specialists.'
        },
        {
          label: 'REGULATORY',
          title: 'Product registration',
          desc: 'Dossier compilation, official filing before SENASA, and ongoing technical follow-up. Included in the Full Package.'
        },
        {
          label: 'COMPLEMENTARY',
          title: 'Advisory and training',
          desc: 'Expert third-party consulting, symposiums, and specialized corporate training in veterinary product registration and launch.'
        }
      ]
    },
    process: {
      tag: 'How we work',
      title: 'From concept to registration, in four steps.',
      steps: [
        {
          title: 'Definition',
          desc: 'We evaluate the molecule, target indication, and commercial destination, identifying all specific studies required for registration.'
        },
        {
          title: 'Protocol',
          desc: 'We design the study protocol in compliance with VICH-GCP guidelines and local regulatory codes, incorporating robust statistical power and ethics review.'
        },
        {
          title: 'Execution',
          desc: 'We conduct the trial in field or clinical settings, maintaining rigorous monitoring, fully traceable records, and verified data quality control.'
        },
        {
          title: 'Reporting & Filing',
          desc: 'We deliver an auditable final report. Under the Full Package, we compile, submit, and oversee the regulatory dossier before the authority.'
        }
      ],
      cardTag: 'Standards & Values',
      cardTitle: 'We operate under VICH Good Clinical Practice guidelines.',
      cardDesc: 'VICH is the international programme harmonizing technical requirements for veterinary medicinal product registration across the European Union, Japan, and the United States. Its guidelines serve as the benchmark for our work.',
      tags: ['VICH GL9 · GCP', 'SENASA', 'Regional Regulations'],
      values: ['Credibility', 'Trust', 'Confidentiality', 'Transparency', 'Ethics', 'Agility']
    },
    species: {
      tag: 'Species',
      title: 'Production and companion,\nwith equal scientific rigor.',
      subtitle: 'Select a species to explore an illustrative protocol and experimental design executed under VICH standards.',
      productionTitle: 'Production animals',
      productionSub: 'Feedlot, pasture, and herd trials',
      productionItems: [
        {
          name: 'Bovine',
          trialTitle: 'Antiparasitic efficacy and tissue depletion curves (MRL)',
          trialType: 'Field Trial & Bioequivalence',
          protocol: 'Evaluation of injectable and pour-on formulations in beef cattle and dairy herds. Monitoring fecal egg count reduction (FECRT) and establishing statutory withdrawal periods.',
          parameters: ['VICH GL9 (GCP)', 'Withdrawal curves', 'Individual traceability', 'Local tissue safety']
        },
        {
          name: 'Ovine',
          trialTitle: 'Efficacy against gastrointestinal nematodes and ectoparasites',
          trialType: 'Pen & Field Trial',
          protocol: 'Controlled clinical efficacy study in commercial flocks under natural and artificial challenge. Sequential fecal cultures and dermatological tolerance assessments.',
          parameters: ['Fecal efficacy >95%', 'Dermatological score', 'Wool/meat withdrawal times']
        },
        {
          name: 'Caprine',
          trialTitle: 'Comparative pharmacokinetics and residue depletion in goat milk',
          trialType: 'PK/PD & Safety Study',
          protocol: 'Characterization of plasma concentration profiles and milk excretion in dairy goats following escalated dose regimens and HPLC/MS chromatographic analysis.',
          parameters: ['Pharmacokinetic profile', 'Milk residue depletion', 'Serum biochemistry monitoring']
        },
        {
          name: 'Equine',
          trialTitle: 'Safety and efficacy of non-steroidal anti-inflammatory drugs (NSAIDs)',
          trialType: 'Clinical trial in sport horses',
          protocol: 'Assessment of analgesic and anti-inflammatory response in musculoskeletal conditions with thermographic, ultrasound monitoring, and strict pharmacovigilance.',
          parameters: ['VICH antidoping control', 'Gastric tolerance', 'Ultrasound validation']
        },
        {
          name: 'Poultry',
          trialTitle: 'Immunogenicity of biologicals and zootechnical performance enhancers',
          trialType: 'Broiler and layer experimental trial',
          protocol: 'Serological post-vaccination antibody titration, feed conversion ratio evaluation, and enteric lesion scoring (Johnson & Reid score) in experimental broiler houses.',
          parameters: ['Feed conversion ratio', 'ELISA serological titers', 'Egg and meat residue control']
        }
      ],
      companionTitle: 'Companion animals',
      companionSub: 'Clinical trials and partner veterinary centers',
      companionItems: [
        {
          name: 'Canine',
          trialTitle: 'Multicenter clinical efficacy in chronic joint pain (Osteoarthritis)',
          trialType: 'Blinded clinical trial with pet owners',
          protocol: 'Study conducted in partner veterinary clinics with informed owner consent. Functional improvement assessment using validated scales (CBPI / LOAD) and serial hematology.',
          parameters: ['VICH GL9 (GCP)', 'Informed owner consent', 'Validated CBPI scales', 'Double-blinded']
        },
        {
          name: 'Feline',
          trialTitle: 'Palatability and tolerance trials in feline renal pathologies',
          trialType: 'Acceptance and target safety study',
          protocol: 'Evaluation of spontaneous voluntary acceptance of oral formulations in domestic cats, with longitudinal renal safety monitoring (creatinine, SDMA, urea) across scheduled checkups.',
          parameters: ['Two-bowl palatability test', 'SDMA renal safety', "'Cat-Friendly' welfare protocol"]
        }
      ],
      simulatedTrial: 'Simulated trial',
      productionFooter: 'Biosecurity surveillance and individual batch traceability',
      companionFooter: 'Informed client consent and strict adherence to animal welfare ethics'
    },
    team: {
      tag: 'Team',
      title: 'Three veterinarians with extensive technical service and field trial expertise.',
      subtitle: 'The partners of AVICH come from within the veterinary industry: they understand projects from the laboratory, the farm, and the regulatory filing desk.',
      quote: '"We understand what a pharmaceutical company needs because we have stood on that side: designing trials, guiding regulatory approvals, and resolving real-world field challenges."',
      members: [
        {
          role: 'FOUNDING PARTNER · TECHNICAL DIRECTION',
          desc: 'Veterinary Doctor with over 20 years in technical service within the animal health industry. Specialized in designing and executing clinical trials in livestock.',
          tags: ['Clinical trials', 'Bovine', 'Technical service']
        },
        {
          role: 'FOUNDING PARTNER · FIELD STUDIES',
          desc: 'Veterinary Doctor with vast experience in field trials and herd tracking in commercial production facilities. Leads studies under real-world production conditions.',
          tags: ['Field trials', 'Pharmacokinetics', 'Regional network']
        },
        {
          role: 'FOUNDING PARTNER · REGULATORY AFFAIRS',
          desc: 'Veterinary Doctor specialized in product registration and liaison with regulatory agencies. Coordinates the Full Package modality and corporate training programs.',
          tags: ['SENASA registration', 'Corporate training', 'Companion animals']
        }
      ]
    },
    whyUs: {
      tag: 'Why this name',
      title: 'The name reflects what we do.',
      p1: {
        beforeVich: 'AVICH carries within its name ',
        vichBold: 'VICH',
        afterVich: ', the international standard of Good Clinical Practice for veterinary product registration. The A stands for ',
        aBold: 'Advisory (Asesoramiento)',
        afterA: ': partnering closely with every laboratory so its product achieves approval supported by dependable, audit-ready data.'
      },
      p2: 'We operate strictly according to VICH guidelines; the international program defines technical standards and does not certify corporations, and we communicate this with full transparency.',
      vichFooter: 'VICH: International Cooperation on Harmonisation of Technical Requirements for Registration of Veterinary Medicinal Products, since 1996.'
    },
    news: {
      badge: 'News & Insights',
      title: 'Latest news from AVICH',
      subtitle: 'Continuous innovation in veterinary research, biotechnology integration, and advances in VICH compliance.',
      empty: 'There are no published news articles at this time.',
      readMore: 'Read more',
      loadMore: 'Load more news'
    },
    clients: {
      tag: 'Track Record & Trust',
      title: 'Clients who place their trust in us',
      subtitle: 'We partner with leading veterinary laboratories across every stage of development, registration, and VICH regulatory compliance.',
      prevAria: 'Previous client',
      nextAria: 'Next client'
    },
    contact: {
      tag: 'Contact',
      title: "Let's work together",
      subtitle: 'Reach out to learn more about our working model and how we can support the clinical development and registration of your products.',
      emailLabel: 'Email',
      locationLabel: 'Location',
      locationValue: 'Chascomús, Buenos Aires, Argentina',
      form: {
        name: 'Name',
        company: 'Laboratory / Company',
        email: 'Email address',
        species: 'Target species',
        speciesOptions: ['Bovine', 'Ovine', 'Caprine', 'Equine', 'Poultry', 'Canine', 'Feline', 'Multiple / to be defined'],
        modality: 'Modality',
        modalityOptions: ["I'm not sure yet", 'Technical Support', 'Full Package'],
        productDetails: 'Product to be developed or registered',
        placeholder: 'Type of product, indication, current stage of development...',
        submit: 'Send inquiry',
        confidentiality: 'All inquiries are handled with strict confidentiality. We are available to execute a Non-Disclosure Agreement (NDA) prior to the first meeting.',
        successTitle: 'Inquiry sent!',
        successDesc: 'Thank you for reaching out. An AVICH specialist will contact you promptly.'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      croDesc: 'Contract Research Organization (CRO) based in Argentina.',
      adminTitle: 'News Administration',
      adminAria: 'Admin Access'
    },
    mobileNav: {
      home: 'Home',
      species: 'Species',
      services: 'Services',
      team: 'About',
      contact: 'Contact'
    },
    whatsApp: {
      tooltip: 'How can we help you?',
      message: 'Hello, I would like to receive more information regarding AVICH veterinary research services.',
      aria: 'Contact via WhatsApp'
    },
    languageSelector: {
      ariaLabel: 'Select language',
      title: 'Language'
    }
  },

  // ==========================================
  // PORTUGUESE (BRAZIL)
  // ==========================================
  pt: {
    nav: {
      about: 'O que fazemos',
      services: 'Serviços',
      species: 'Espécies',
      differentiators: 'Por que nos escolher',
      news: 'Novidades',
      contact: 'Contato',
      subtitle: 'Veterinary Research'
    },
    hero: {
      badge: 'Veterinary Research',
      title: 'Gestão integral de ensaios clínicos veterinários',
      description: 'Projetamos, executamos e gerenciamos estudos clínicos sob padrões internacionais para o registro de produtos junto ao SENASA e órgãos regulatórios.',
      ctaServices: 'Conheça nossos serviços',
      ctaAbout: 'Descubra a AVICH'
    },
    about: {
      metrics: {
        years: {
          suffix: 'anos de trajetória',
          desc: 'da nossa equipe na indústria veterinária'
        },
        trials: {
          suffix: 'ensaios realizados',
          desc: 'estudos clínicos e a campo executados sob normas VICH'
        },
        samples: {
          suffix: 'amostras mensais',
          desc: 'processadas e analisadas com rastreabilidade e alto rigor'
        }
      },
      tag: 'Quem Somos',
      heading: 'Uma CRO veterinária feita por veterinários.',
      p1: 'A AVICH é uma Contract Research Organization especializada em produtos veterinários. Somos uma equipe interdisciplinar com mais de 20 anos na indústria, especializada na condução de estudos clínicos em animais de produção e companhia.',
      p2: 'Trabalhamos em conjunto com universidades e profissionais de toda a região para oferecer um serviço integral: desde o desenho do protocolo até o registro, atendendo aos requisitos vigentes dos órgãos reguladores de cada país.',
      seeMore: 'Ver mais',
      cards: [
        {
          tag: 'O que estudamos',
          title: 'Eficácia, segurança, farmacocinética e estudos a campo',
          preview: 'Medicamentos, vacinas e novas tecnologias',
          detail: 'Desenho e execução de protocolos de alto rigor para aprovação e registro de produtos veterinários.'
        },
        {
          tag: 'Sob qual padrão',
          title: 'Diretrizes VICH de Boas Práticas Clínicas',
          preview: 'VICH GL9 (GCP) e regulamentações locais vigentes',
          detail: 'Harmonização técnica internacional que garante que cada relatório seja auditável perante órgãos reguladores.'
        },
        {
          tag: 'Para quem',
          title: 'Laboratórios que desenvolvem ou registram produtos',
          preview: 'Na Argentina e em toda a região',
          detail: 'Flexibilidade para empresas que necessitam de capacidade a campo ou terceirização integral de ponta a ponta.'
        },
        {
          tag: 'Perante quem',
          title: 'Órgãos regulatórios oficiais',
          preview: 'Na Argentina, SENASA e órgãos regionais',
          detail: 'Elaboração e acompanhamento proativo de processos para otimizar prazos de aprovação regulatória.'
        }
      ]
    },
    workModel: {
      tag: 'O Diferencial',
      title: 'Um modelo de trabalho modular: o laboratório escolhe como trabalhar.',
      subtitle: 'Duas formas de acompanhar o desenvolvimento e registro de um produto, conforme o nível de delegação desejado por cada cliente.',
      m1: {
        tag: 'Modalidade 1',
        title: 'Suporte Técnico',
        desc: 'A AVICH desenha e executa os estudos, entregando protocolos e relatórios prontos para que o laboratório os apresente por conta própria ao órgão regulador.',
        bullets: [
          'Desenho de protocolo e execução do estudo',
          'Relatório final auditável, pronto para submissão',
          'O laboratório mantém a gestão regulatória'
        ],
        footer: 'Para laboratórios com equipe regulatória própria que necessitam de capacidade de execução a campo.'
      },
      m2: {
        tag: 'Modalidade 2',
        title: 'Pacote Completo',
        desc: 'A AVICH cuida de todo o processo de ponta a ponta: desenho, execução, relatórios e submissão do processo perante o órgão regulador.',
        bullets: [
          'Tudo incluído no Suporte Técnico',
          'Elaboração e submissão do processo de registro',
          'Acompanhamento do trâmite até a aprovação'
        ],
        footer: 'Para laboratórios que buscam um único interlocutor desde a ideia inicial até o registro.'
      },
      noteBold: 'Ambas as modalidades operam sob o mesmo padrão.',
      noteText: 'O que muda é o quanto o laboratório delega, não a qualidade do estudo nem a estrita confidencialidade aplicada a cada projeto.'
    },
    services: {
      tag: 'Serviços',
      title: 'O que fazemos, estudo por estudo.',
      subtitle: 'Cada serviço pode ser contratado em qualquer uma das duas modalidades.',
      consultProtocol: 'Consultar protocolo',
      items: [
        {
          label: 'ENSAIOS CLÍNICOS',
          title: 'Estudos de eficácia',
          desc: 'Demonstramos que o produto cumpre o prometido, com delineamento estatístico e controles adequados à espécie e indicação.'
        },
        {
          label: 'ENSAIOS CLÍNICOS',
          title: 'Estudos de segurança',
          desc: 'Avaliamos tolerância e segurança na espécie de destino, incluindo margens de dosagem e monitoramento de efeitos adversos.'
        },
        {
          label: 'ENSAIOS CLÍNICOS',
          title: 'Farmacocinética e resíduos',
          desc: 'Curvas de absorção e eliminação, períodos de carência e estudos de depleção de resíduos para produtos em animais de produção.'
        },
        {
          label: 'A CAMPO',
          title: 'Testes a campo',
          desc: 'Estudos em condições reais de produção, com a rede de estabelecimentos e profissionais com que trabalhamos em toda a região.'
        },
        {
          label: 'REGULATÓRIO',
          title: 'Registro de produtos',
          desc: 'Montagem do dossiê, submissão ao SENASA e acompanhamento do processo. Incluído no Pacote Completo.'
        },
        {
          label: 'COMPLEMENTARES',
          title: 'Consultoria e capacitação',
          desc: 'Consultoria técnica a terceiros, palestras e capacitação no registro e lançamento de produtos veterinários.'
        }
      ]
    },
    process: {
      tag: 'Como trabalhamos',
      title: 'Da ideia ao registro, em quatro etapas.',
      steps: [
        {
          title: 'Definição',
          desc: 'Compreendemos o produto, a indicação e o mercado-alvo, definindo quais estudos são exigidos pelo registro.'
        },
        {
          title: 'Protocolo',
          desc: 'Desenvolvemos o protocolo conforme as diretrizes VICH-GCP e regulamentações locais, com planejamento estatístico e comitê de ética quando aplicável.'
        },
        {
          title: 'Execução',
          desc: 'Conduzimos o estudo a campo ou em clínica, com monitoramento contínuo, registros rastreáveis e controle de qualidade dos dados.'
        },
        {
          title: 'Relatório e Registro',
          desc: 'Entregamos o relatório final auditável. No Pacote Completo, submetemos e acompanhamos o processo perante o órgão regulador.'
        }
      ],
      cardTag: 'Padrões e valores',
      cardTitle: 'Trabalhamos de acordo com as diretrizes VICH de Boas Práticas Clínicas.',
      cardDesc: 'O VICH é o programa internacional que harmoniza os requisitos técnicos para registro de produtos veterinários entre a União Europeia, Japão e Estados Unidos. Suas diretrizes são a referência central do nosso trabalho.',
      tags: ['VICH GL9 · GCP', 'SENASA', 'Normas regionais'],
      values: ['Credibilidade', 'Confiança', 'Confidencialidade', 'Transparência', 'Ética', 'Agilidade']
    },
    species: {
      tag: 'Espécies',
      title: 'Produção e companhia,\ncom o mesmo rigor.',
      subtitle: 'Selecione uma espécie para conhecer um exemplo de protocolo e delineamento experimental que executamos sob normas VICH.',
      productionTitle: 'Animais de produção',
      productionSub: 'Ensaios a pasto e confinamento',
      productionItems: [
        {
          name: 'Bovinos',
          trialTitle: 'Eficácia antiparasitária e curvas de depleção tecidual (LMR)',
          trialType: 'Ensaio a campo & Bioequivalência',
          protocol: 'Avaliação de formulações injetáveis e pour-on em rebanhos de corte e gado leiteiro. Monitoramento de eficácia fecal (FECRT) e determinação de períodos de carência.',
          parameters: ['VICH GL9 (GCP)', 'Curvas de carência', 'Rastreabilidade individual', 'Segurança tecidual']
        },
        {
          name: 'Ovinos',
          trialTitle: 'Eficácia contra nematódeos gastrintestinais e ectoparasitas',
          trialType: 'Ensaio em piquete e a campo',
          protocol: 'Estudo controlado de eficácia terapêutica em rebanhos comerciais com desafio natural e artificial. Coproculturas seriadas e tolerância tecidual.',
          parameters: ['Eficácia fecal >95%', 'Avaliação dermatológica', 'Carência em lã/carne']
        },
        {
          name: 'Caprinos',
          trialTitle: 'Farmacocinética comparada e resíduos em leite caprino',
          trialType: 'Estudo PK/PD e Segurança',
          protocol: 'Caracterização de perfis plasmáticos e excreção no leite em rebanhos caprinos leiteiros sob regimes de dosagem escalonada e análise por HPLC/MS.',
          parameters: ['Perfil farmacocinético', 'Resíduos no leite', 'Monitoramento bioquímico']
        },
        {
          name: 'Equinos',
          trialTitle: 'Segurança e eficácia de anti-inflamatórios não esteroidais (AINEs)',
          trialType: 'Ensaio clínico em equinos atletas',
          protocol: 'Avaliação da resposta analgésica e anti-inflamatória em afecções musculoesqueléticas, com monitoramento termográfico, ultrassonográfico e farmacovigilância.',
          parameters: ['Controle antidoping VICH', 'Tolerância gástrica', 'Seguimento ultrassonográfico']
        },
        {
          name: 'Aves',
          trialTitle: 'Imunogenicidade de produtos biológicos e promotores zootécnicos',
          trialType: 'Ensaio em frangos de corte e poedeiras',
          protocol: 'Avaliação sorológica de anticorpos pós-vacinais, conversão alimentar e monitoramento de lesões intestinais (escore de Johnson & Reid) em galpões experimentais.',
          parameters: ['Conversão alimentar', 'Titulação sorológica ELISA', 'Resíduos em ovo e carne']
        }
      ],
      companionTitle: 'Animais de companhia',
      companionSub: 'Ensaios clínicos e clínicas veterinárias associadas',
      companionItems: [
        {
          name: 'Caninos',
          trialTitle: 'Eficácia clínica multicêntrica em dor articular crônica (Osteoartrite)',
          trialType: 'Ensaio clínico cego com proprietários',
          protocol: 'Estudo em clínicas associadas com consentimento informado. Avaliação da melhora funcional através de escalas validadas (CBPI / LOAD) e hematologia seriada.',
          parameters: ['VICH GL9 (GCP)', 'Consentimento informado', 'Escalas validadas CBPI', 'Duplo-cego']
        },
        {
          name: 'Felinos',
          trialTitle: 'Testes de palatabilidade e tolerância em nefropatias felinas',
          trialType: 'Estudo de aceitação e segurança específica',
          protocol: 'Avaliação da aceitação espontânea de apresentações orais em gatos domésticos e monitoramento da função renal (creatinina, SDMA, ureia) em consultas programadas.',
          parameters: ['Teste de dois recipientes (palatabilidade)', 'Segurança renal SDMA', "Bem-estar 'Cat-Friendly'"]
        }
      ],
      simulatedTrial: 'Ensaio simulado',
      productionFooter: 'Monitoramento de biossegurança e rastreabilidade individual em cada lote',
      companionFooter: 'Consentimento informado e estrita adesão a normas de bem-estar animal'
    },
    team: {
      tag: 'Equipe',
      title: 'Três veterinários com anos de serviço técnico e testes a campo.',
      subtitle: 'Os sócios da AVICH vêm da indústria: conhecem o trabalho do laboratório, do campo e dos processos regulatórios.',
      quote: '"Sabemos o que um laboratório necessita porque estivemos daquele lado: desenhando ensaios, acompanhando registros e resolvendo desafios a campo."',
      members: [
        {
          role: 'SÓCIO FUNDADOR · DIREÇÃO TÉCNICA',
          desc: 'Médico veterinário com mais de 20 anos em serviço técnico na indústria veterinária. Especializado no desenho e condução de ensaios clínicos em animais de produção.',
          tags: ['Ensaios clínicos', 'Bovinos', 'Serviço técnico']
        },
        {
          role: 'SÓCIO FUNDADOR · ESTUDOS A CAMPO',
          desc: 'Médico veterinário com ampla experiência em testes a campo e acompanhamento de lotes em fazendas produtivas. Conduz os estudos em condições reais de produção.',
          tags: ['Testes a campo', 'Farmacocinética', 'Rede regional']
        },
        {
          role: 'SÓCIO FUNDADOR · ASSUNTOS REGULATÓRIOS',
          desc: 'Médico veterinário especializado no registro de produtos e relacionamento com órgãos regulatórios. Coordena a modalidade Pacote Completo e capacitação a terceiros.',
          tags: ['Registro SENASA', 'Capacitação', 'Companhia']
        }
      ]
    },
    whyUs: {
      tag: 'Por que nos chamamos assim',
      title: 'O nome diz o que fazemos.',
      p1: {
        beforeVich: 'A AVICH traz no seu nome o ',
        vichBold: 'VICH',
        afterVich: ', o padrão internacional de Boas Práticas Clínicas para registro de produtos veterinários. A letra A vem de ',
        aBold: 'Assessoria (Asesoramiento)',
        afterA: ': acompanhar cada laboratório para que seu produto chegue ao registro com estudos confiáveis e auditáveis.'
      },
      p2: 'Trabalhamos de acordo com as diretrizes VICH; o programa estabelece padrões técnicos e não certifica empresas, e comunicamos isso com total transparência.',
      vichFooter: 'VICH: International Cooperation on Harmonisation of Technical Requirements for Registration of Veterinary Medicinal Products, desde 1996.'
    },
    news: {
      badge: 'Novidades & Atualidades',
      title: 'Últimas notícias da AVICH',
      subtitle: 'Inovação contínua em pesquisa veterinária, incorporação de biotecnologia e avanços nas normas VICH.',
      empty: 'Nenhuma novidade publicada no momento.',
      readMore: 'Ler mais',
      loadMore: 'Carregar mais novidades'
    },
    clients: {
      tag: 'Trajetória e Confiança',
      title: 'Clientes que confiam em nós',
      subtitle: 'Apoiamos laboratórios veterinários líderes em cada fase do desenvolvimento, registro e conformidade com as normas VICH.',
      prevAria: 'Cliente anterior',
      nextAria: 'Próximo cliente'
    },
    contact: {
      tag: 'Contato',
      title: 'Vamos trabalhar juntos',
      subtitle: 'Escreva-nos para saber mais sobre nosso modelo de trabalho e como podemos ajudar no registro dos seus produtos veterinários.',
      emailLabel: 'E-mail',
      locationLabel: 'Localização',
      locationValue: 'Chascomús, Buenos Aires, Argentina',
      form: {
        name: 'Nome',
        company: 'Laboratório / Empresa',
        email: 'E-mail',
        species: 'Espécie de destino',
        speciesOptions: ['Bovinos', 'Ovinos', 'Caprinos', 'Equinos', 'Aves', 'Caninos', 'Felinos', 'Várias / a definir'],
        modality: 'Modalidade',
        modalityOptions: ['Ainda não tenho certeza', 'Suporte Técnico', 'Pacote Completo'],
        productDetails: 'Qual produto você deseja desenvolver ou registrar',
        placeholder: 'Tipo de produto, indicação, fase em que se encontra...',
        submit: 'Enviar consulta',
        confidentiality: 'Todas as consultas são tratadas com total confidencialidade. Podemos firmar um termo de confidencialidade (NDA) antes da primeira reunião.',
        successTitle: 'Consulta enviada!',
        successDesc: 'Obrigado pelo contato. Um especialista da AVICH entrará em contato em breve.'
      }
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      croDesc: 'Contract Research Organization (CRO) na Argentina.',
      adminTitle: 'Administração de Notícias',
      adminAria: 'Acesso Administrador'
    },
    mobileNav: {
      home: 'Início',
      species: 'Espécies',
      services: 'Serviços',
      team: 'Sobre Nós',
      contact: 'Contato'
    },
    whatsApp: {
      tooltip: 'Como podemos ajudar você?',
      message: 'Olá, gostaria de receber mais informações sobre os serviços de pesquisa veterinária da AVICH.',
      aria: 'Contatar por WhatsApp'
    },
    languageSelector: {
      ariaLabel: 'Selecionar idioma',
      title: 'Idioma'
    }
  }
};
