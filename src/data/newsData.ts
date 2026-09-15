export interface NewsItem {
  id: number | string;
  date: string;
  image: string;
  imageAlt?: string;
  title: string;
  description: string;
  tag?: string;
  published?: boolean;
}

export const initialNewsList: NewsItem[] = [
  {
    id: 1,
    date: "Septiembre 2026",
    tag: "Infraestructura & Capacidad",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Científico en laboratorio observando a través de microscopio",
    title: "Ampliamos nuestra capacidad analítica VICH para registros veterinarios",
    description: "Incorporamos tecnología de punta y equipamiento automatizado en nuestro laboratorio, superando las 15.000 muestras mensuales con máxima precisión y trazabilidad auditada para la región.",
    published: true
  },
  {
    id: 2,
    date: "Septiembre 2026",
    tag: "Ensayos Clínicos & VICH",
    image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Bovinos en campo de ensayo clínico y sanidad animal AVICH",
    title: "Nuevos protocolos de eficacia y seguridad para biológicos veterinarios",
    description: "Fortalecemos nuestra oferta de ensayos clínicos y de campo bajo estándares VICH GL9 (GCP), ofreciendo a los laboratorios acompañamiento integral de punta a punta en el proceso regulatorio.",
    published: true
  },
  {
    id: 3,
    date: "Agosto 2026",
    tag: "Eventos & Capacitación",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Simposio internacional de biotecnología veterinaria",
    title: "Simposio Internacional de Farma & Biotecnología Veterinaria 2026",
    description: "AVICH participó como disertante principal sobre validación analítica y bioequivalencia en especies de producción, compartiendo metodologías de punta con referentes globales.",
    published: true
  },
  {
    id: 4,
    date: "Julio 2026",
    tag: "Calidad & Certificación",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tubos de ensayo con muestras biológicas de laboratorio",
    title: "Acreditación de nuevos ensayos microbiológicos e inmunológicos",
    description: "Sumamos 12 nuevos ensayos acreditados para la cuantificación de principios activos y vacunas inactivadas, consolidando nuestros estándares de bioseguridad y control.",
    published: true
  },
  {
    id: 5,
    date: "Junio 2026",
    tag: "Investigación Especies",
    image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Equinos en ensayo de farmacocinética",
    title: "Estudios de farmacocinética comparada en equinos deportivos",
    description: "Desarrollamos protocolos avanzados para el monitoreo de AINEs y tiempos de retiro en equinos de alto rendimiento con tecnología cromatográfica HPLC/MS.",
    published: true
  },
  {
    id: 6,
    date: "Mayo 2026",
    tag: "Alianzas & Desarrollo",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Investigadores en campo de desarrollo antiparasitario",
    title: "Alianza estratégica para evaluación de antiparasitarios de última generación",
    description: "Iniciamos ensayos a campo con laboratorios multinacionales para medir la eficacia y resistencia frente a helmintos en bovinos y ovinos de la región.",
    published: true
  }
];

export const newsList = initialNewsList;
