import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API routes
  app.get("/api/projects", (req, res) => {
    const projects = [
      {
        id: 1,
        title: "Mariana Tek Redesign",
        description: "Rebrand across mobile, web and mobile to improve usability and consistency.",
        type: "case-study",
        image: "/portfolio-cards/project-MT-site.png"
      },
      {
        id: 2,
        title: "Brand Merge",
        description: "Merging of BILL and Divvy brands to build one financially back-end solution.",
        type: "case-study",
        image: "/BILL-casestudy2.png"
      },
      {
        id: 3,
        title: "The Ultimate Business Management Software",
        type: "other",
        image: "https://picsum.photos/seed/business/800/1000"
      },
      {
        id: 4,
        title: "A Year of Service, a Lifetime of Difference",
        type: "other",
        image: "/portfolio-cards/project-service-year.png"
      },
      {
        id: 5,
        title: "Live Results: Presidential Election",
        type: "other",
        image: "/portfolio-cards/WAPO-map-card.png"
      }
    ];
    res.json(projects);
  });

  app.post("/api/contact", express.json(), async (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact form submission:`, { name, email, message });

    if (!resend) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      return res.json({ success: true, message: "Message received (but email not sent)!" });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: ["alifelski@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });

      if (error) {
        console.error("Resend error:", error);
        return res.status(500).json({ success: false, error: error.message });
      }

      res.json({ success: true, data });
    } catch (err) {
      console.error("Server error:", err);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
