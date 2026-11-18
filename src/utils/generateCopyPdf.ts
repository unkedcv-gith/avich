import { jsPDF } from 'jspdf';
import { translations } from '../i18n/translations';

// News items text copy for PDF without binary image asset imports
const newsItemsCopy = [
  {
    title: "Ampliamos nuestra capacidad analítica VICH para registros veterinarios",
    date: "Septiembre 2026",
    tag: "Infraestructura & Capacidad",
    description: "Incorporamos tecnología de punta y equipamiento automatizado en nuestro laboratorio, superando las 15.000 muestras mensuales con máxima precisión y trazabilidad auditada para la región."
  },
  {
    title: "Nuevos protocolos de eficacia y seguridad para biológicos veterinarios",
    date: "Septiembre 2026",
    tag: "Ensayos Clínicos & VICH",
    description: "Fortalecemos nuestra oferta de ensayos clínicos y de campo bajo estándares VICH GL9 (GCP), ofreciendo a los laboratorios acompañamiento integral de punta a punta en el proceso regulatorio."
  },
  {
    title: "Simposio Internacional de Farma & Biotecnología Veterinaria 2026",
    date: "Agosto 2026",
    tag: "Eventos & Capacitación",
    description: "AVICH participó como disertante principal sobre validación analítica y bioequivalencia en especies de producción, compartiendo metodologías de punta con referentes globales."
  },
  {
    title: "Acreditación de nuevos ensayos microbiológicos e inmunológicos",
    date: "Julio 2026",
    tag: "Calidad & Certificación",
    description: "Sumamos 12 nuevos ensayos acreditados para la cuantificación de principios activos y vacunas inactivadas, consolidando nuestros estándares de bioseguridad y control."
  },
  {
    title: "Estudio de farmacocinética comparativa en equinos de alto rendimiento",
    date: "Junio 2026",
    tag: "Investigación Especies",
    description: "Desarrollamos protocolos avanzados de monitoreo plasmático y detección de residuos para fármacos innovadores orientados a medicina equina deportiva y reproductiva."
  }
];

export function generateCopyPdf(lang: 'es' | 'en' | 'pt' = 'es'): jsPDF {
  const t = translations[lang] || translations.es;
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const margin = 16;
  const contentWidth = pageWidth - margin * 2;
  let y = margin;

  // Helper for page break checks
  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - margin - 12) {
      doc.addPage();
      y = margin + 8;
      // Top running header on subsequent pages
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      doc.setTextColor(140, 140, 160);
      doc.text('AVICH · Documento Maestro de Textos Web (Para Corrección)', margin, y - 3);
      doc.setDrawColor(220, 220, 235);
      doc.line(margin, y - 1, pageWidth - margin, y - 1);
      y += 5;
    }
  };

  // Helper: Section Title
  const addSectionHeader = (num: string, title: string) => {
    checkPageBreak(18);
    y += 4;
    doc.setFillColor(106, 0, 200); // #6A00C8
    doc.roundedRect(margin, y, contentWidth, 7.5, 1.5, 1.5, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text(`${num}. ${title.toUpperCase()}`, margin + 3.5, y + 5.2);
    y += 12;
  };

  // Helper: Subtitle / Subheading
  const addSubheader = (title: string, tag?: string) => {
    checkPageBreak(12);
    if (tag) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(7.5);
      doc.setTextColor(253, 133, 72); // #FD8548
      doc.text(`[TAG / BADGE]: ${tag.toUpperCase()}`, margin, y);
      y += 4.5;
    }
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(26, 22, 64); // #1a1640
    doc.text(title, margin, y);
    y += 5.5;
  };

  // Helper: Paragraph Text with separate label and content lines (no overlap)
  const addParagraph = (label: string, text: string, indent = 0) => {
    if (!text) return;
    
    if (label) {
      checkPageBreak(8);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(106, 0, 200); // Purple label
      doc.text(`${label}:`, margin + indent, y);
      y += 4.2;

      const lines = doc.splitTextToSize(text, contentWidth - indent - 3);
      checkPageBreak(lines.length * 4.2 + 2);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(45, 45, 60);
      doc.text(lines, margin + indent + 3, y);
      y += lines.length * 4.2 + 2.5;
    } else {
      const lines = doc.splitTextToSize(text, contentWidth - indent);
      checkPageBreak(lines.length * 4.2 + 2);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8.5);
      doc.setTextColor(45, 45, 60);
      doc.text(lines, margin + indent, y);
      y += lines.length * 4.2 + 2.5;
    }
  };

  // Helper: Bullet Point
  const addBullet = (bulletText: string, indent = 3) => {
    const lines = doc.splitTextToSize(bulletText, contentWidth - indent - 5);
    const blockHeight = lines.length * 4.2 + 2;
    checkPageBreak(blockHeight);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(253, 133, 72);
    doc.text('•', margin + indent, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(45, 45, 60);
    doc.text(lines, margin + indent + 4, y);
    y += blockHeight;
  };

  // =========================================================================
  // DOCUMENT COVER / HEADER
  // =========================================================================
  doc.setFillColor(26, 22, 64); // #1a1640
  doc.rect(margin, y, contentWidth, 24, 'F');
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(15);
  doc.setTextColor(255, 255, 255);
  doc.text('AVICH · VETERINARY RESEARCH', margin + 6, y + 9);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(253, 133, 72); // Orange
  doc.text('RELEVAMIENTO INTEGRAL DE TEXTOS Y CONTENIDOS WEB', margin + 6, y + 16);
  
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(200, 200, 220);
  doc.text(`Documento generado para revisión y corrección editorial · Fecha: ${new Date().toLocaleDateString('es-AR')}`, margin + 6, y + 21);
  
  y += 29;

  // Introduction Note
  doc.setFillColor(248, 247, 253);
  doc.setDrawColor(106, 0, 200);
  doc.roundedRect(margin, y, contentWidth, 14, 1.5, 1.5, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(106, 0, 200);
  doc.text('INSTRUCCIONES PARA EL CLIENTE:', margin + 3.5, y + 4.5);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(60, 60, 80);
  doc.text('Este documento contiene la totalidad de los textos, títulos, subtítulos, itemizados y fichas que componen el sitio web.', margin + 3.5, y + 8.5);
  doc.text('Puede realizar anotaciones o sugerencias de corrección sobre cualquier sección para su ajuste inmediato.', margin + 3.5, y + 12);
  y += 18;

  // =========================================================================
  // 01. CABECERA Y NAVEGACIÓN
  // =========================================================================
  addSectionHeader('01', 'Barra de Navegación y Cabecera');
  addParagraph('Subtítulo institucional del Logo', t.nav.subtitle);
  addParagraph('Enlaces del Menú Principal', `${t.nav.about}  |  ${t.nav.services}  |  ${t.nav.species}  |  ${t.nav.differentiators}  |  ${t.nav.news}  |  ${t.nav.contact}`);
  addParagraph('Selector de Idiomas', 'Español (ES)  |  English (EN)  |  Português Brasil (PT-BR)');
  addParagraph('Botón flotante de WhatsApp', `${t.whatsApp.tooltip} (Mensaje: "${t.whatsApp.message}")`);

  // =========================================================================
  // 02. HERO / PORTADA PRINCIPAL
  // =========================================================================
  addSectionHeader('02', 'Hero / Portada Principal');
  addSubheader(t.hero.title, t.hero.badge);
  addParagraph('Bajada / Descripción', t.hero.description);
  addParagraph('Botón Principal (CTA)', t.hero.ctaServices);
  addParagraph('Botón Secundario (CTA)', t.hero.ctaAbout);

  // =========================================================================
  // 03. MÉTRICAS Y DATOS CLAVE
  // =========================================================================
  addSectionHeader('03', 'Métricas y Trayectoria');
  addBullet(`+20 ${t.about.metrics.years.suffix} — ${t.about.metrics.years.desc}`);
  addBullet(`+250 ${t.about.metrics.trials.suffix} — ${t.about.metrics.trials.desc}`);
  addBullet(`+15.000 ${t.about.metrics.samples.suffix} — ${t.about.metrics.samples.desc}`);

  // =========================================================================
  // 04. SOBRE AVICH / QUIÉNES SOMOS
  // =========================================================================
  addSectionHeader('04', 'Sobre AVICH / Quiénes Somos');
  addSubheader(t.about.heading, t.about.tag);
  addParagraph('Párrafo 1', t.about.p1);
  addParagraph('Párrafo 2', t.about.p2);
  
  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(106, 0, 200);
  doc.text('Tarjetas Desplegables de Enfoque:', margin, y);
  y += 5;

  t.about.cards.forEach((card, idx) => {
    addSubheader(`Ficha ${idx + 1}: ${card.title}`, card.tag);
    addParagraph('Resumen / Preview', card.preview, 3);
    addParagraph('Detalle ampliado', card.detail, 3);
    y += 1.5;
  });

  // =========================================================================
  // 05. MODELOS DE TRABAJO
  // =========================================================================
  addSectionHeader('05', 'Modelos de Trabajo (Sección Lila Pleno)');
  addSubheader(t.workModel.title, t.workModel.tag);
  addParagraph('Subtítulo', t.workModel.subtitle);
  
  y += 2;
  addSubheader(`Modalidad 1: ${t.workModel.m1.title}`, t.workModel.m1.tag);
  addParagraph('Descripción', t.workModel.m1.desc, 3);
  addParagraph('Puntos clave del servicio', '', 3);
  t.workModel.m1.bullets.forEach((b) => addBullet(b, 5));
  addParagraph('Destinado a', t.workModel.m1.footer, 3);

  y += 2;
  addSubheader(`Modalidad 2: ${t.workModel.m2.title}`, t.workModel.m2.tag);
  addParagraph('Descripción', t.workModel.m2.desc, 3);
  addParagraph('Puntos clave del servicio', '', 3);
  t.workModel.m2.bullets.forEach((b) => addBullet(b, 5));
  addParagraph('Destinado a', t.workModel.m2.footer, 3);

  y += 2;
  addParagraph('Nota de Calidad (Recuadro Destacado)', `${t.workModel.noteBold} ${t.workModel.noteText}`);

  // =========================================================================
  // 06. SERVICIOS INTEGRALES DE I+D
  // =========================================================================
  addSectionHeader('06', 'Servicios Integrales de I+D');
  addSubheader(t.services.title, t.services.tag);
  addParagraph('Subtítulo', t.services.subtitle);
  addParagraph('Texto de acción en tarjeta', t.services.consultProtocol);

  y += 2;
  t.services.items.forEach((item, idx) => {
    addSubheader(`Servicio 0${idx + 1}: ${item.title}`, item.label);
    addParagraph('Descripción', item.desc, 3);
    y += 1.5;
  });

  // =========================================================================
  // 07. PROCESO DE VALIDACIÓN
  // =========================================================================
  addSectionHeader('07', 'Proceso de Validación / Cómo Trabajamos (Sección Naranja Pleno)');
  addSubheader(t.process.title, t.process.tag);

  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(26, 22, 64);
  doc.text('Pasos del Proceso (Itemizado):', margin, y);
  y += 5;

  t.process.steps.forEach((step, idx) => {
    addSubheader(`Paso ${idx + 1}: ${step.title}`);
    addParagraph('Detalle', step.desc, 3);
    y += 1.5;
  });

  y += 2;
  addSubheader(`Tarjeta Lateral: ${t.process.cardTitle}`, t.process.cardTag);
  addParagraph('Descripción institucional', t.process.cardDesc, 3);
  addParagraph('Etiquetas normativas', t.process.tags.join('  •  '), 3);
  addParagraph('Valores fundamentales de trabajo', t.process.values.join('  •  '), 3);

  // =========================================================================
  // 08. ESPECIES Y PROTOCOLOS DE ENSAYO CLÍNICO
  // =========================================================================
  addSectionHeader('08', 'Especies y Protocolos de Ensayo Clínico');
  addSubheader(t.species.title.replace('\n', ' '), t.species.tag);
  addParagraph('Subtítulo', t.species.subtitle);

  // Production Animals
  y += 3;
  addSubheader(`Bloque 1: ${t.species.productionTitle} (${t.species.productionSub})`);
  addParagraph('Garantía de calidad', t.species.productionFooter, 2);
  y += 2;

  t.species.productionItems.forEach((sp) => {
    addSubheader(`Especie: ${sp.name}`);
    addParagraph('Título del Ensayo Simulado', sp.trialTitle, 3);
    addParagraph('Tipo de Ensayo', sp.trialType, 3);
    addParagraph('Protocolo de Ejecución', sp.protocol, 3);
    addParagraph('Parámetros Evaluados', sp.parameters.join('  •  '), 3);
    y += 2;
  });

  // Companion Animals
  y += 3;
  addSubheader(`Bloque 2: ${t.species.companionTitle} (${t.species.companionSub})`);
  addParagraph('Garantía de calidad', t.species.companionFooter, 2);
  y += 2;

  t.species.companionItems.forEach((sp) => {
    addSubheader(`Especie: ${sp.name}`);
    addParagraph('Título del Ensayo Simulado', sp.trialTitle, 3);
    addParagraph('Tipo de Ensayo', sp.trialType, 3);
    addParagraph('Protocolo de Ejecución', sp.protocol, 3);
    addParagraph('Parámetros Evaluados', sp.parameters.join('  •  '), 3);
    y += 2;
  });

  // =========================================================================
  // 09. EQUIPO PROFESIONAL Y ASESORES
  // =========================================================================
  addSectionHeader('09', 'Equipo Profesional y Asesores');
  addSubheader(t.team.title, t.team.tag);
  addParagraph('Subtítulo', t.team.subtitle);
  addParagraph('Cita Institucional de Socios', t.team.quote);

  y += 2;
  t.team.members.forEach((m, idx) => {
    addSubheader(`Integrante 0${idx + 1}: ${m.role}`);
    addParagraph('Perfil profesional', m.desc, 3);
    addParagraph('Especialidades / Áreas', m.tags.join('  •  '), 3);
    y += 2;
  });

  // =========================================================================
  // 10. POR QUÉ ELEGIRNOS / DIFERENCIALES
  // =========================================================================
  addSectionHeader('10', 'Por Qué Elegirnos / Identidad AVICH');
  addSubheader(t.whyUs.title, t.whyUs.tag);
  addParagraph('Significado del Acrónimo', `${t.whyUs.p1.beforeVich}${t.whyUs.p1.vichBold}${t.whyUs.p1.afterVich}${t.whyUs.p1.aBold}${t.whyUs.p1.afterA}`);
  addParagraph('Marco VICH y Rigor', t.whyUs.p2);
  addParagraph('Pie de Referencia VICH', t.whyUs.vichFooter);

  // =========================================================================
  // 11. SLIDES Y PATROCINADORES / CLIENTES
  // =========================================================================
  addSectionHeader('11', 'Clientes y Patrocinadores (Carrusel)');
  addSubheader(t.clients.title, t.clients.tag);
  addParagraph('Bajada', t.clients.subtitle);
  addParagraph('Marcas presentes en el slider', 'Biogénesis Bagó (Salud Animal)  •  Pharmavet (Animal Health)  •  Agrosíntesis (Investigación Agropecuaria)  •  Vetpharma (Laboratorios Veterinarios)  •  Bovitech (Sanidad Bovina)  •  Zoodiagnosis (Diagnóstico Veterinario Especializado)');

  // =========================================================================
  // 12. NOVEDADES Y ARTÍCULOS
  // =========================================================================
  addSectionHeader('12', 'Novedades y Actualidad Científica');
  addSubheader(t.news.title, t.news.badge);
  addParagraph('Bajada', t.news.subtitle);

  y += 2;
  newsItemsCopy.forEach((art, idx) => {
    addSubheader(`Artículo ${idx + 1}: ${art.title} (${art.date})`, art.tag);
    addParagraph('Cuerpo del artículo', art.description, 3);
    y += 2;
  });

  // =========================================================================
  // 13. FORMULARIO DE CONTACTO Y DATOS CORPORATIVOS
  // =========================================================================
  addSectionHeader('13', 'Contacto y Formulario');
  addSubheader(t.contact.title, t.contact.tag);
  addParagraph('Bajada', t.contact.subtitle);
  addParagraph(t.contact.emailLabel, 'contacto@avich.com.ar');
  addParagraph(t.contact.locationLabel, t.contact.locationValue);
  
  y += 2;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(106, 0, 200);
  doc.text('Campos y Opciones del Formulario:', margin, y);
  y += 5;
  addBullet(`Campo 1: ${t.contact.form.name}`);
  addBullet(`Campo 2: ${t.contact.form.company}`);
  addBullet(`Campo 3: ${t.contact.form.email}`);
  addBullet(`Campo 4: ${t.contact.form.species} — Opciones: ${t.contact.form.speciesOptions.join(', ')}`);
  addBullet(`Campo 5: ${t.contact.form.modality} — Opciones: ${t.contact.form.modalityOptions.join(', ')}`);
  addBullet(`Campo 6: ${t.contact.form.productDetails} (Placeholder: "${t.contact.form.placeholder}")`);

  // =========================================================================
  // 14. PIE DE PÁGINA Y LEGALES
  // =========================================================================
  addSectionHeader('14', 'Pie de Página y Legales');
  addParagraph('Línea de Copyright', `© ${new Date().getFullYear()} AVICH. ${t.footer.rights}`);
  addParagraph('Definición Institucional', t.footer.croDesc);
  addParagraph('Navegación Móvil (Pestañas fijas)', `${t.mobileNav.home}  |  ${t.mobileNav.species}  |  ${t.mobileNav.services}  |  ${t.mobileNav.team}  |  ${t.mobileNav.contact}`);

  // =========================================================================
  // PAGE NUMBERING PASS
  // =========================================================================
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 170);
    doc.text(
      `Página ${i} de ${totalPages}`,
      pageWidth / 2,
      pageHeight - 8,
      { align: 'center' }
    );
    doc.text(
      'AVICH · Relevamiento de Textos Web para Corrección',
      pageWidth - margin,
      pageHeight - 8,
      { align: 'right' }
    );
  }

  return doc;
}
