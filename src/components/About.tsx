import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="pt-[100px] pb-24 md:pb-32 bg-portfolio-gray border-y border-divider overflow-hidden">
      <div className="layout-container">
        <div className="col-span-12 md:col-start-2 md:col-span-10 grid grid-cols-1 md:grid-cols-12 gap-y-12 lg:gap-x-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-5 w-full order-2 md:order-1"
          >
            <div className="aspect-[4/5] bg-portfolio-beige relative overflow-hidden shadow-xl">
              <img 
                src="/ali-photo.jpg" 
                alt="Ali Felski" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-7 space-y-6 md:space-y-8 order-1 md:order-2"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-portfolio-dark">
              About me
            </h2>
            <p className="text-[18px] text-portfolio-dark/70 leading-relaxed">
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
