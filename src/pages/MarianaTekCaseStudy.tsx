import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function MarianaTekCaseStudy() {
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
              className="col-span-12 lg:col-span-5 min-[736px]:col-span-6 pb-[65px] md:pb-[65px] z-10 mt-8 sm:mt-12 lg:mt-0"
            >
              <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[68px] font-bold text-white leading-[1.05] tracking-tight mb-2 font-serif">
                Mariana Tek Redesign
              </h1>
              <div className="border-b border-[#EAC96D] mb-6">
                <p className="text-[24px] text-white/90 font-serif mb-6">
                  Leadership, Design & UX
                </p>
              </div>
              
              <div className="space-y-[14px] text-white">
                <div className="flex flex-row items-baseline gap-2">
                  <h4 className="text-[18px] font-bold text-white font-serif mb-1">Role</h4>
                  <p className="text-[16px] font-medium opacity-90">Director of Design (Platform Team)</p>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[18px] font-bold text-white font-serif mb-1">Deliverables</h4>
                  <p className="text-[16px] leading-relaxed opacity-90">
                    In charge of design systems, cross-company collaboration, design vision, and communication strategies.
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
              <div className="shadow-lg md:shadow-2xl overflow-hidden min-[736px]:w-full lg:w-full">
                <img 
                  src="/portfolio-cards/Reserve_24.png" 
                  alt="Mariana Tek Interface" 
                  className="w-full h-full object-cover object-top shadow-lg md:shadow-2xl origin-top-left"
                  referrerPolicy="no-referrer"
                  style={{ scale: 1.2 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 lg:pt-[160px] bg-portfolio-gray border-t border-divider">
        <div className="layout-container">
          <div className="col-span-12 text-center md:text-left lg:text-center md:col-span-12 lg:col-start-3 lg:col-span-8">
            <h2 className="text-2xl md:text-[34px] leading-relaxed text-portfolio-dark font-serif font-normal italic">
              Build out the Mariana Tek brand (with the exception of the logo) and incorporate it through all marketing, promotional and product materials.
            </h2>
            <div className="mt-10 md:mt-16 flex justify-center">
              <div className="w-full max-w-[90%] h-px bg-divider"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="pt-0 pb-24 bg-portfolio-gray border-b border-divider">
        <div className="layout-container">
          <div className="col-span-12 text-center mb-6">
            <h3 className="text-[42px] md:text-[54px] font-bold text-portfolio-dark font-serif mb-6 leading-[1.1]">Results by Numbers</h3>
          </div>
          
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-[44px]">
            {/* Item 1 */}
            <div className="grid grid-cols-3 gap-x-6 items-start">
              <div className="col-span-1 text-center">
                <span className="text-[40px] md:text-[35px] lg:text-[48px] font-bold text-portfolio-dark leading-none font-serif block mb-[12px]">20X</span>
                <h4 className="text-[16px] font-normal text-portfolio-dark font-serif leading-tight mb-2">Gained & Retained Customers</h4>
              </div>
              <div className="col-span-2">
                <p className="text-lg text-portfolio-dark/70 leading-relaxed font-serif">Having a product that was more usable and visually appealing, drew in and retained many more customers.</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="grid grid-cols-3 gap-x-6 items-start">
              <div className="col-span-1 text-center">
                <span className="text-[40px] md:text-[35px] lg:text-[48px] font-bold text-portfolio-dark leading-none font-serif block mb-[12px]">2X</span>
                <h4 className="text-[16px] font-normal text-portfolio-dark font-serif leading-tight mb-2">Dev Speed</h4>
              </div>
              <div className="col-span-2">
                <p className="text-lg text-portfolio-dark/70 leading-relaxed font-serif">Implementing a full design system alongside rebuilding critical infrastructure pieces made developing new areas even easier.</p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="grid grid-cols-3 gap-x-6 items-start">
              <div className="col-span-1 text-center">
                <span className="text-[48px] md:text-[35px] lg:text-[48px] font-bold text-portfolio-dark leading-none font-serif block mb-[12px]">100%</span>
                <h4 className="text-[16px] font-normal text-portfolio-dark font-serif leading-tight mb-2">Consistent Branding</h4>
              </div>
              <div className="col-span-2">
                <p className="text-lg text-portfolio-dark/70 leading-relaxed font-serif">By managing and pushing my design team to a new vision, we created a focused and recognizable brand across many applications.</p>
              </div>
            </div>
            
            {/* Item 4 */}
            <div className="grid grid-cols-3 gap-x-6 items-start">
              <div className="col-span-1 text-center">
                <span className="text-[48px] md:text-[35px] lg:text-[48px] font-bold text-portfolio-dark leading-none font-serif block mb-[12px]">30%</span>
                <h4 className="text-[16px] font-normal text-portfolio-dark font-serif leading-tight mb-2">Customer Deduction Drop-offs</h4>
              </div>
              <div className="col-span-2">
                <p className="text-lg text-portfolio-dark/70 leading-relaxed font-serif">Customers stayed in the flow and completed their transactions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Challenges Section */}
       <section className="py-24 bg-white border-b border-divider">
        <div className="layout-container">
          <div className="col-span-12">
            <h3 className="text-[42px] md:text-[54px] font-bold text-portfolio-dark font-serif mb-6 leading-[1.1]">Business Goals / Where We Started</h3>
            <p className="text-lg md:text-xl text-portfolio-dark/70 font-serif mb-7 leading-relaxed max-w-3xl">
              Mariana Tek had been around for 5 years before I joined but in that time had retained only a handful of clients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
              <div className="flex items-start">
                 <span className="text-lg font-bold text-portfolio-dark font-serif tracking-wide">Rapidly Increase Customer Acquisition</span>
              </div>
              <div className="flex items-start">
                 <span className="text-lg font-bold text-portfolio-dark font-serif tracking-wide">Increase Revenue and Runway</span>
              </div>
              <div className="flex items-start">
                 <span className="text-lg font-bold text-portfolio-dark font-serif tracking-wide">Improve UX and Design: Fewer support tickets, customer questions and complaints.</span>
              </div>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12 items-start">
              <div className="md:col-span-5">
                <h4 className="text-[40px] font-bold text-portfolio-dark font-serif leading-tight mb-8">Challenges</h4>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Poor UX & Design</h4>
                    <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">On key pages, customers were taken out of their flow leading them away from fulfilling their main purpose. E.g., Customers were not able to see available classes until logging in and when purchasing a class package the customer was taken out of their booking flow and brought back to the beginning.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Lack of Staff</h4>
                    <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Because Mariana was a very young startup, many of us ended up wearing very different hats.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Lack of Brand</h4>
                    <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Design was a free-for-all when I joined. The only consistent branding aspect being the logo.</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-8 relative md:translate-x-[calc(8.333%+48px)] w-full md:w-[100%]">
                <div className="shadow-lg overflow-hidden border border-divider">
                  <img src="/portfolio-cards/WI-old1.png" alt="Mariana Tek Old UI 1" className="w-full h-auto block" referrerPolicy="no-referrer" />
                </div>
                <div className="shadow-lg overflow-hidden border border-divider">
                  <img src="/portfolio-cards/WI-old2.png" alt="Mariana Tek Old UI 2" className="w-full h-auto block" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach Section */}
      <section className="py-24 bg-portfolio-gray border-b border-divider overflow-hidden">
        <div className="layout-container">
          <div className="col-span-12 mb-12">
            <h3 className="text-[42px] md:text-[54px] font-bold text-portfolio-dark font-serif leading-[1.1]">My Design Approach</h3>
          </div>

          <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 mb-16">
            <div className="space-y-4">
              <h4 className="text-[24px] md:text-[28px] font-bold text-portfolio-dark font-serif tracking-tight">Using UX and Known Patterns</h4>
              <p className="text-[17px] md:text-lg text-portfolio-dark/70 font-serif leading-relaxed">I used known login, booking, and checkout patterns throughout to ensure our customers understood our system and were comfortable with it.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-[24px] md:text-[28px] font-bold text-portfolio-dark font-serif tracking-tight">Design Flexibility</h4>
              <p className="text-[17px] md:text-lg text-portfolio-dark/70 font-serif leading-relaxed">Because the design would need to work in our clients' webpage, I kept the design simplistic, allowing clients to style the system on their end. I also worked with my engineering team to build the new system into an iFrame, for easy integration.</p>
            </div>
          </div>

          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
              {[1, 2, 3, 4, 5].map((num) => (
                <motion.div 
                  key={num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: num * 0.1 }}
                  className="shadow-lg overflow-hidden border border-divider"
                >
                  <img 
                    src={`/portfolio-cards/WI-new${num}.png`} 
                    alt={`Approach ${num}`} 
                    className="w-full h-auto" 
                    referrerPolicy="no-referrer" 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="py-24 bg-white overflow-hidden border-b border-divider">
        <div className="layout-container items-center col-span-12">
          <div className="col-span-12 grid grid-cols-2 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 mb-16 lg:text-left">
            <h2 className="text-2xl md:text-[34px] leading-relaxed text-portfolio-dark font-serif italic font-normal">
              By bringing in process, collaboration methods and great UX, I built a system that not only worked for our customers but made them successful.
            </h2>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/portfolio-cards/MT-final.png" 
                alt="Final Mariana Tek Product" 
                className="w-full h-auto mx-auto"
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
