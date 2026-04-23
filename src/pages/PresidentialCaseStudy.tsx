import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function PresidentialCaseStudy() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-portfolio-gold pt-32 sm:pt-40 md:pt-48 pb-0 border-b-[10px] border-white relative z-20 mb-[-30px]">
        <div className="layout-container">
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 md:gap-x-12 md:items-start lg:items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 lg:col-span-6 min-[736px]:col-span-6 pb-[65px] md:pb-[65px] z-10 mt-8 sm:mt-12 lg:mt-0"
            >
              <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[68px] font-bold text-white leading-[1.05] tracking-tight mb-2 font-serif">
                Election Results
              </h1>
              <div className="border-b border-[#EAC96D] mb-6">
                <p className="text-[24px] text-white/90 font-serif mb-6">
                  UX and Design
                </p>
              </div>

              <div className="space-y-[14px] text-white">
                <div className="flex flex-row items-baseline gap-2">
                  <h4 className="text-[18px] font-bold text-white font-serif mb-1">Role</h4>
                  <p className="text-[16px] font-medium opacity-90">UX and Design lead</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[18px] font-bold text-white font-serif mb-1">Deliverables</h4>
                  <p className="text-[16px] leading-relaxed opacity-90">
                    App UX, Responsive Web
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="col-span-12 lg:col-span-6 min-[736px]:col-span-6 relative mt-0"
            >
              <div className="shadow-lg md:shadow-2xl overflow-hidden min-[736px]:w-full lg:w-full aspect-video">
                <img 
                  src="/portfolio-cards/WAPO-map-card.png" 
                  alt="Presidential Election Project" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 bg-portfolio-gray border-t border-b border-divider">
        <div className="layout-container">
          <div className="col-span-12 flex flex-col min-[861px]:grid min-[861px]:grid-cols-2 gap-0 items-center">
            <div className="min-[861px]:pr-12 lg:pr-20 space-y-4">
              <h4 className="text-[24px] md:text-[32px] font-bold text-portfolio-dark font-serif mb-2">Project</h4>
              <p className="text-[18px] md:text-[22px] leading-relaxed text-portfolio-dark font-serif font-normal">
                Build an election application that would iframe into the Washington Post (web and mobile). Infographics were needed for: presidential, senate, house and gubernatorial races.
              </p>
            </div>
            
            {/* Cropped grey bar for smaller screens */}
            <div className="min-[861px]:hidden my-12 px-6">
              <div className="h-px bg-divider w-full"></div>
            </div>

            <div className="relative min-[861px]:pl-12 lg:pl-20 space-y-4">
              <div className="hidden min-[861px]:block absolute left-0 top-0 bottom-0 w-px bg-divider"></div>
              <h4 className="text-[24px] md:text-[32px] font-bold text-portfolio-dark font-serif mb-2">Result</h4>
              <p className="text-[18px] md:text-[22px] leading-relaxed text-portfolio-dark font-serif font-normal">
                We built an app that was used by millions of people across the country to see real-time data on election night.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Experience Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="layout-container">
          <div className="col-span-12 lg:col-span-10 lg:col-start-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="overflow-hidden flex justify-center"
            >
              <img 
                src="/portfolio-cards/WAPO-wphone.png" 
                alt="WAPO Mobile Experience" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design Assets & Results side-by-side Section */}
      <section className="pt-9 pb-24 bg-white border-b border-divider">
        <div className="layout-container items-start">
          <div className="col-span-12 md:col-span-6 mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="shadow-xl overflow-hidden border border-divider rounded-sm"
            >
              <img 
                src="/portfolio-cards/wapo-design-assets.png" 
                alt="WAPO Design Assets" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="shadow-xl overflow-hidden border border-divider rounded-sm"
            >
              <img 
                src="/portfolio-cards/WAPO-counties.png" 
                alt="WAPO County Results" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-portfolio-gold text-white text-center">
        <div className="layout-container">
          <div className="col-span-12">
            <h2 className="text-[42px] md:text-[54px] font-bold font-serif mb-6 leading-tight">Want to learn more?</h2>
            <p className="text-lg md:text-xl font-serif max-w-2xl mx-auto mb-12 opacity-90">
              Check out more of my portfolio or send me a quick message. I'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/portfolio"
                className="px-8 py-3 bg-white text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-white/90 transition-colors duration-500 text-center"
              >
                SEE MORE WORK
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-3 bg-white text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-white/90 transition-colors duration-500 text-center"
              >
                CONTACT ME
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
