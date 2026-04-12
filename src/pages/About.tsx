import { motion } from "motion/react";
import AboutComponent from "../components/About";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-portfolio-gold pt-32 pb-20 border-b-[10px] border-white">
        <div className="layout-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-12 lg:col-start-3 lg:col-span-8"
          >
            <h1 className="text-[78px] font-bold text-white leading-[1.05] tracking-tight">
              About
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="bg-white">
        <AboutComponent />
      </div>
    </div>
  );
}
