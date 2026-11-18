import fs from 'fs';
import path from 'path';
import { generateCopyPdf } from '../src/utils/generateCopyPdf';

const doc = generateCopyPdf('es');
const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

const outputDir = path.resolve(process.cwd(), 'public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'AVICH-Textos-Completos-Web.pdf');
fs.writeFileSync(outputPath, pdfBuffer);

console.log(`PDF successfully generated at: ${outputPath} (${pdfBuffer.length} bytes)`);
