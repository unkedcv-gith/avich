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
  }
];

export const newsList = initialNewsList;
