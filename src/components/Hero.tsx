import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] bg-portfolio-gold pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-[90px] lg:pb-[128px] overflow-hidden border-b-[10px] border-white">
      <div className="layout-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-start-3 lg:col-span-10"
        >
          <h1 className="text-[28px] xs:text-[36px] sm:text-[42px] md:text-[60px] lg:text-[78px] font-bold text-white mt-8 sm:mt-12 md:mt-[36px] mb-4 leading-[1.1] md:leading-[1.05] tracking-tight break-words">
            Design Leadership,<br className="hidden md:block" />
            Product Design, UX<br className="hidden md:block" />
            & Research
          </h1>
          
          <p className="text-[18px] text-[#644646] mb-12 leading-relaxed font-serif font-medium sm:max-w-[70%] lg:max-w-[610px]">
            I'm Ali, and I drive product and lead design–turning complex systems into clear, effective experiences, through data, collaboration and storytelling.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <Link
              to="/portfolio"
              className="inline-block px-8 py-3 bg-white text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-white/90 transition-colors duration-500"
            >
              LEARN MORE
            </Link>
            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-white text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-white/90 transition-colors duration-500"
            >
              ABOUT ME
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

