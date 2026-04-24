import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

async function startServer() {
  const app = express();
  app.use(cors({
    origin: ["https://felskia.github.io", "https://alifelskidesign.com"]
  }));
  const PORT = 3000;

  app.get("/api/projects", (req, res) => {
    const projects = [
      { id: 2, title: "Brand Merge", description: "Merging of BILL and Divvy brands to build one financially back-end solution.", type: "case-study", image: "/BILL-casestudy2.png" },
      { id: 1, title: "Mariana Tek Redesign", description: "Usability and design overhaul across mobile, web and tablet.", type: "case-study", image: "/WI-cropped.png" },
      { id: 3, title: "Mariana Tek Marketing", type: "other", image: "/portfolio-cards/project-MT-site.png" },
      { id: 4, title: "A Year of Service, a Lifetime of Difference", type: "other", image: "/portfolio-cards/project-service-year.png" },
      { id: 5, title: "Election Results", type: "other", image: "/portfolio-cards/WAPO-map-card.png" }
    ];
    res.json(projects);
  });

  app.post("/api/contact", express.json(), async (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact form submission received:`, { name, email, message });

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    if (!resend) {
      console.warn("RESEND_API_KEY is not set. Email will not be sent.");
      return res.json({ success: true, message: "Message received (but email not sent)!" });
    }

    try {
      const { data, error } = await resend.emails.send({
        from: "contact@alifelskidesign.com",
        to: ["alifelski@gmail.com"],
        subject: `I'd love more information: ${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.5;">
            <h2>New Contact Form Submission</h2>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f4f4f4; padding: 15px; border-left: 4px solid #333;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        `,
      });

      if (error) {
        console.error("Resend Error Details:", JSON.stringify(error, null, 2));
        return res.status(400).json({ success: false, error: error.message || "Validation Error", code: error.name });
      }

      console.log("Email sent successfully:", data);
      res.json({ success: true, data });
    } catch (err) {
      console.error("Unexpected Server Error:", err);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
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
