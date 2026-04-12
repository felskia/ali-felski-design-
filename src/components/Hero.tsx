import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-portfolio-gold pt-32 pb-20 overflow-hidden border-b-[10px] border-white">
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-start-3 lg:col-span-10"
        >
          <h1 className="text-[78px] font-bold text-white mt-[36px] mb-4 leading-[1.05] tracking-tight">
            Design Leadership,<br />
            Product Design, UX<br />
            & Research
          </h1>
          
          <p className="text-[22px] text-[#644646] mb-12 leading-relaxed font-serif font-medium lg:max-w-[70%]">
            I'm Ali and I build beautiful, thoughtful and effective 
            solutions with data, collaboration and storytelling.
          </p>
          
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-white/90 transition-colors duration-500"
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

