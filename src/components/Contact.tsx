import { motion } from "motion/react";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

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
    <section id="contact" className={`${isContactPage ? 'pt-32 sm:pt-40 md:pt-48 pb-32' : 'py-32'} bg-portfolio-gold text-white`}>
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`col-span-12 text-center ${isContactPage ? 'mt-8 sm:mt-12 md:mt-[36px]' : ''}`}
        >
          <h2 className={`font-bold mb-6 md:mb-8 tracking-tight ${isContactPage ? 'text-[32px] sm:text-[42px] md:text-[54px] lg:text-[68px]' : 'text-4xl md:text-6xl'}`}>Contact Me</h2>
          <p className="text-lg md:text-2xl text-white/90 leading-relaxed mx-auto mb-10 md:mb-16">
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
              className="w-full py-4 bg-white text-[#644646] font-orienta font-bold uppercase tracking-widest hover:bg-white/90 transition-colors duration-500 disabled:opacity-50"
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

          {/* Email link removed as requested */}
        </motion.div>
      </div>
    </section>
  );
}

