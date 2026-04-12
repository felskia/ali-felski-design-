import { motion } from "motion/react";

export default function Strategy() {
  return (
    <div className="pt-40 pb-24 bg-portfolio-gray min-h-screen">
      <div className="layout-container">
        <div className="col-span-12 lg:col-start-2 lg:col-span-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-12"
          >
            Management Strategy
          </motion.h1>
          <div className="prose prose-lg max-w-none text-portfolio-dark/70 space-y-8">
            <p className="text-xl leading-relaxed font-serif">
              Effective management strategy is about more than just oversight—it's about creating an environment where creativity and data-driven decisions coexist.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-portfolio-dark">Operational Excellence</h3>
                <p>Streamlining workflows and communication channels to ensure teams can focus on what they do best: creating value.</p>
              </div>
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-4 text-portfolio-dark">Data-Informed Culture</h3>
                <p>Integrating research and analytics into the core decision-making process to reduce risk and increase impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
