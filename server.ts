import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const SYSTEM_INSTRUCTION = `You are "ZA Assistant", the direct, intelligent client concierge for ZA Consultancy, founded by Zafir Ahmed in Chiniot and Chenab Nagar, Punjab, Pakistan.

BACKGROUND & BUSINESS INFO:
- Founder: Zafir Ahmed, Professional Web Developer (Chiniot, Punjab, Pakistan).
- Training: Comprehensive web developer trainings in modern frontend architectures, responsive systems, and high-performance web engineering. Direct communication ("One person who answers your messages") and zero agency fluff.
- Contact: WhatsApp/Phone: +92 316 3370864, Email: zafir.webstudio@gmail.com.
- Core Services:
  1. Website Design: Bespoke high-converting websites, mobile-first, blazing fast, local SEO, WhatsApp integrations.
  2. Virtual Assistance: Executive operational help, inquiry triage, client follow-ups, scheduling, CRM coordination.
- Selected Work:
  - Nasir Real Estate (https://nasirrealestate.netlify.app): Real estate portal for houses, plots, and commercial properties in Chenab Nagar & Chiniot.
  - Michael Salazar, DDS (https://michealsalazardentist.netlify.app): Modern dental clinic website concept.
  - SuperMeal.pk (https://www.supermeal.pk/): Nationwide online food ordering, takeaway, and restaurant discovery platform in Pakistan.

CHATBOT ROLE & MULTI-STEP BOOKINGS:
1. You act as a warm, professional, high-end studio representative.
2. For multi-step project inquiries or bookings, guide the user step-by-step:
   - Step 1: Identify which service they need or their primary business challenge.
   - Step 2: Inquire about their business type, location, and key goals.
   - Step 3: Ask about timeline or budget expectations.
   - Step 4: Summarize their booking brief into a clean recap and encourage them to connect with Zafir directly on WhatsApp (+92 316 3370864).
3. If the user shares enough info for a booking, provide a concise summary and advise that they can tap the "WhatsApp Booking" button to transmit the summary directly to Zafir's personal chat.
4. Keep replies conversational, concise, respectful, and focused on practical business solutions. Avoid robotic phrases.`;

// API endpoint for context-aware chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If an API key is present and not a dummy placeholder, call Gemini 3.8 Flash
    if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
      const contents = messages.map((m: { role: 'user' | 'model'; text: string }) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));

      // 10 second timeout safety
      const apiPromise = ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const timeoutPromise = new Promise<never>((_, reject) =>
        setTimeout(() => reject(new Error('Gemini API timeout')), 9000)
      );

      const response = await Promise.race([apiPromise, timeoutPromise]);
      const reply = response.text || "I'm here to help you get started with ZA Consultancy. What service can we assist your business with?";
      return res.json({ reply });
    }

    // Context-aware fallback if key is unconfigured in local sandbox
    const lastUserMsg = [...messages].reverse().find((m: any) => m.role === 'user')?.text?.toLowerCase() || '';

    let fallbackReply = "I can guide you through our services at ZA Consultancy (Website Design, Virtual Assistance) or prepare a multi-step booking for Zafir Ahmed. Which service are you exploring?";

    if (lastUserMsg.includes('book') || lastUserMsg.includes('start') || lastUserMsg.includes('quote')) {
      fallbackReply = "Let's set up your project booking! Step 1: Which service do you need (Website Design or Virtual Assistance)? Also, tell me a bit about your business type and timeline.";
    } else if (lastUserMsg.includes('web') || lastUserMsg.includes('design') || lastUserMsg.includes('site')) {
      fallbackReply = "For Website Design, we build bespoke, ultra-fast websites optimized for mobile and local SEO (like our work for Nasir Real Estate, SuperMeal.pk, and Michael Salazar DDS). Typical turnaround is 7–14 days. Would you like to review deliverables or proceed to booking via WhatsApp?";
    } else if (lastUserMsg.includes('virtual') || lastUserMsg.includes('va') || lastUserMsg.includes('assistant')) {
      fallbackReply = "Our Virtual Assistance service provides dedicated operational support, client message triage, and appointment coordination managed with mechanical precision. You can message Zafir on WhatsApp (+92 316 3370864) to confirm your requirements.";
    } else if (lastUserMsg.includes('supermeal') || lastUserMsg.includes('food') || lastUserMsg.includes('restaurant')) {
      fallbackReply = "SuperMeal.pk (https://www.supermeal.pk/) is an online food ordering and takeaway portal across Pakistan connecting diners with top restaurants. We specialize in similar high-traffic e-commerce and marketplace portals. Would you like to build an online ordering platform?";
    } else if (lastUserMsg.includes('zafir') || lastUserMsg.includes('about') || lastUserMsg.includes('founder') || lastUserMsg.includes('chiniot')) {
      fallbackReply = "Zafir Ahmed is a professional web developer based in Chiniot, Pakistan, with specialized web developer trainings in modern frontend architectures, responsive design, and performance optimization. He works directly with business owners with zero agency middleman.";
    }

    return res.json({ reply: fallbackReply });
  } catch (error: any) {
    console.error('Gemini chat error:', error);
    return res.json({
      reply: "I've noted your inquiry! You can also click the 'WhatsApp Zafir' button below to continue this conversation directly with Zafir Ahmed at +92 316 3370864.",
    });
  }
});

// Vite Middleware for development, or static serving for production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ZA Consultancy server running on port ${PORT}`);
  });
}

startServer();
