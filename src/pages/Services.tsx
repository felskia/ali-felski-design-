import { motion } from "motion/react";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-portfolio-gold pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 border-b-[10px] border-white">
        <div className="layout-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-12"
          >
            <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[68px] font-bold text-white leading-[1.1] md:leading-[1.05] tracking-tight">
              Services
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pt-[100px] pb-24 bg-portfolio-gray border-y border-divider">
        <div className="layout-container">
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Design Leadership</h2>
              <p className="text-lg text-portfolio-dark/70 leading-relaxed">
                Guiding teams to deliver exceptional user experiences through strategic vision and collaborative processes.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">User Experience</h2>
              <p className="text-lg text-portfolio-dark/70 leading-relaxed">
                Creating intuitive, user-centered designs that solve complex problems and delight users.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Research & Strategy</h2>
              <p className="text-lg text-portfolio-dark/70 leading-relaxed">
                Uncovering deep insights through qualitative and quantitative research to inform product strategy.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Product Design</h2>
              <p className="text-lg text-portfolio-dark/70 leading-relaxed">
                End-to-end design from concept to high-fidelity prototypes and developer handoff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
