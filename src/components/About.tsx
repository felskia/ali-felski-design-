import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="layout-container">
        <div className="col-span-12 grid grid-cols-12 gap-x-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-5 w-full"
          >
            <div className="aspect-square bg-portfolio-beige relative">
              {/* Optional: Add an image here if available */}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-7 space-y-8"
          >
            <h2 className="text-6xl font-bold leading-tight text-portfolio-dark">
              About me
            </h2>
            <p className="text-xl text-portfolio-dark/70 leading-relaxed">
              Using data to build beautiful, thoughtful and effective solutions 
              in Design leadership, Design, Product, User experience, and research.
            </p>
            <div className="pt-4">
              <a 
                href="/about"
                className="inline-block px-8 py-3 border border-[#644646]/20 text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-portfolio-gold hover:text-white hover:border-portfolio-gold transition-all duration-500"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
