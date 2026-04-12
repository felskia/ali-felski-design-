import { motion } from "motion/react";

export default function BrandMergeCaseStudy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-portfolio-gold pt-32 pb-20 border-b-[10px] border-white">
        <div className="layout-container">
          <div className="col-span-12 grid grid-cols-12 gap-x-20 items-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="col-span-12 lg:col-span-5 pb-10"
            >
              <h1 className="text-[78px] font-bold text-white leading-[1.05] tracking-tight mb-4">
                Brand Merge
              </h1>
              <p className="text-[22px] text-white/90 font-serif italic mb-12">
                Fintech, Brand Integration, UX
              </p>
              
              <div className="grid grid-cols-2 gap-x-10 gap-y-8 text-white/90">
                <div>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-wider text-white">Role</h4>
                  <p>Product Design Lead</p>
                </div>
                <div className="col-span-2">
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-wider text-white">Responsibilities</h4>
                  <div className="grid grid-cols-2 gap-x-4">
                    <ul className="space-y-1">
                      <li>Product Strategy</li>
                      <li>UX Architecture</li>
                      <li>Brand Alignment</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>Stakeholder Management</li>
                      <li>Design Systems</li>
                      <li>User Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="col-span-12 lg:col-span-7"
            >
              <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white/20">
                <img 
                  src="/BILL-casestudy2.png" 
                  alt="Brand Merge" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="layout-container">
          <div className="col-span-12 lg:col-start-3 lg:col-span-8 prose prose-xl max-w-none text-portfolio-dark/70">
            <h2 className="text-4xl font-bold text-portfolio-dark mb-8">The Challenge</h2>
            <p>
              Merging the BILL and Divvy brands required a deep understanding of both user bases to build a unified financial back-end solution. 
              The challenge was to maintain the strengths of both platforms while creating a cohesive new identity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
