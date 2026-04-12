import { motion } from "motion/react";
import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-32 bg-portfolio-gold text-white">
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-start-3 lg:col-span-8 text-center"
        >
          <h2 className="text-6xl font-bold mb-8 tracking-tight">Contact Me</h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mx-auto mb-16">
            Let me help your business. Whether it's short or long term, I look forward to talking.
          </p>
          
          <form onSubmit={handleSubmit} className="text-left space-y-6 max-w-xl mx-auto">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider">Name</label>
              <input 
                required
                type="text" 
                id="name" 
                name="name"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider">Email</label>
              <input 
                required
                type="email" 
                id="email" 
                name="email"
                className="w-full bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:border-white transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider">Message</label>
              <textarea 
                required
                id="message" 
                name="message"
                rows={4}
                className="w-full bg-white/10 border border-white/20 px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
                placeholder="How can I help?"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={status === "submitting"}
              className="w-full py-4 bg-white text-portfolio-gold font-bold uppercase tracking-widest hover:bg-white/90 transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center font-bold pt-4"
              >
                Thank you! I'll get back to you soon.
              </motion.p>
            )}

            {status === "error" && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center font-bold pt-4 text-red-200"
              >
                Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </form>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <a 
              href="mailto:hello@alifelski.com" 
              className="text-2xl font-bold border-b-2 border-white pb-2 hover:opacity-80 transition-opacity"
            >
              hello@alifelski.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

