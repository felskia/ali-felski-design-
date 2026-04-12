import { motion } from "motion/react";

export default function Services() {
  return (
    <div className="pt-40 pb-24 bg-portfolio-gray min-h-screen">
      <div className="layout-container">
        <div className="col-span-12 lg:col-start-2 lg:col-span-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-12"
          >
            Services
          </motion.h1>
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
    </div>
  );
}
