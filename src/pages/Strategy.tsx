import { motion } from "motion/react";

export default function Strategy() {
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
              Management Strategy
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pt-[100px] pb-24 bg-portfolio-gray border-y border-divider">
        <div className="layout-container">
          <div className="col-span-12">
            <div className="prose prose-lg max-w-none text-portfolio-dark/70 space-y-8">
            <p className="text-xl leading-relaxed font-serif">
              Effective management strategy is about more than just oversight—it's about creating an environment where creativity and data-driven decisions coexist.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-portfolio-dark leading-tight">Operational Excellence</h3>
                <p>Streamlining workflows and communication channels to ensure teams can focus on what they do best: creating value.</p>
              </div>
              <div className="bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-bold mb-6 text-portfolio-dark leading-tight">Data-Informed Culture</h3>
                <p>Integrating research and analytics into the core decision-making process to reduce risk and increase impact.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
