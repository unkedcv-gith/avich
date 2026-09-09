import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client lazily to avoid startup crashes if key is missing
let ai: GoogleGenAI | null = null;
function getAI() {
  if (!ai) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    ai = new GoogleGenAI({ apiKey: key });
  }
  return ai;
}

const SYSTEM_INSTRUCTION = `Eres un asistente virtual amable y profesional de AVICH, un laboratorio de investigación veterinaria especializado en ensayos para animales de producción y compañía.
Tu objetivo es responder preguntas sobre nuestros servicios, nuestro modelo de trabajo y nuestras capacidades, y **guiar al usuario para que nos contacte** para avanzar con su proyecto o si tiene preguntas muy específicas.

INFORMACIÓN DE AVICH:
- Servicios: Eficacia clínica, Seguridad/Tolerancia, Palatabilidad, Farmacocinética y Residuos.
- Modelo de Trabajo: "Soporte Técnico" (diseño a medida y ejecución de fases específicas) o "Paquete Completo" (desde el protocolo hasta el informe final).
- Especies de Producción: Bovinos, Ovinos, Caprinos, Equinos, Aves (estudios a corral y a campo).
- Especies de Compañía: Caninos, Felinos (ensayos clínicos con propietarios y clínicas veterinarias).
- Proceso: 1. Definición (objetivos), 2. Protocolo (diseño GLP/GCP), 3. Ejecución (fase de campo/clínica), 4. Informe (registro y QA).
- Diferenciadores: Estándares internacionales VICH, normas GLP (Buenas Prácticas de Laboratorio) y GCP (Buenas Prácticas Clínicas), unidad de Quality Assurance independiente. Equipo con gran experiencia.

REGLAS:
- Mantén tus respuestas cortas (máximo 2 párrafos cortos).
- Sé muy cortés.
- Si el usuario muestra intención de contratar, cotizar, o preguntar detalles muy técnicos/específicos que no se pueden responder, invítalos siempre a usar el botón de "Contacto" en el menú principal o a ir a la sección de contacto al final de la página.
`;

app.post("/api/chat", async (req, res) => {
  try {
    const { history, message } = req.body;
    const client = getAI();
    
    // Create a new chat session to generate a response
    // Using gemini-2.5-flash as the default for text generation
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        { role: "user", parts: [{ text: SYSTEM_INSTRUCTION }] },
        { role: "model", parts: [{ text: "Entendido, actuaré como el asistente de AVICH basándome en esas directrices." }] },
        ...history,
        { role: "user", parts: [{ text: message }] }
      ]
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Chat error:", error);
    res.status(500).json({ error: error.message || "Error al procesar la solicitud." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
