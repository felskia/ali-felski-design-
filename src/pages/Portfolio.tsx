import { motion } from "motion/react";
import Projects from "../components/Projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-portfolio-gold pt-32 sm:pt-40 md:pt-48 pb-10 sm:pb-16 md:pb-20 border-b-[10px] border-white">
        <div className="layout-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12 mt-8 sm:mt-12 md:mt-[36px]"
          >
            <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[68px] font-bold text-white leading-[1.1] md:leading-[1.05] tracking-tight">
              Portfolio
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="bg-portfolio-gray border-y border-divider">
        <Projects />
      </div>
    </div>
  );
}
