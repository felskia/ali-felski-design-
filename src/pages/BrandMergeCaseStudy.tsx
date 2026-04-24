import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function BrandMergeCaseStudy() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
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
              className="col-span-12 lg:col-span-5 min-[736px]:col-span-10 pb-[65px] md:pb-[65px] z-10 mt-8 sm:mt-12 lg:mt-0"
            >
              <h1 className="text-[32px] sm:text-[42px] md:text-[54px] lg:text-[68px] font-bold text-white leading-[1.05] tracking-tight mb-2 font-serif">
                Brand Merge
              </h1>
              <div className="border-b border-[#EAC96D] mb-6">
                <p className="text-[24px] text-white/90 font-serif mb-6">
                  Leadership & Design
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
              className="col-span-12 lg:col-span-6 min-[736px]:col-span-10 relative mt-0"
            >
              <div className="shadow-lg md:shadow-2xl overflow-hidden min-[736px]:w-full lg:w-full" style={{ width: windowWidth >= 735 ? '115%' : '100%' }}>
                <img 
                  src="/BILL-cropped.png" 
                  alt="BILL Dashboard" 
                  className="w-full h-auto scale-115"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 lg:pt-[160px] bg-portfolio-gray border-t border-divider">
        <div className="layout-container">
          <div className="col-span-12 text-center md:col-start-2 md:col-span-10">
            <h2 className="text-2xl md:text-[34px] leading-relaxed text-portfolio-dark font-serif font-normal italic">
              Integration of two discrete products (Bill and Divvy), and pushing designers toward better usability through improved UX and visual design.
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
                <span className="text-[40px] md:text-[35px] lg:text-[48px] font-bold text-portfolio-dark leading-none font-serif block mb-[12px]">~70%</span>
                <h4 className="text-[16px] font-normal text-portfolio-dark font-serif leading-tight mb-2">Acceptance of Design System</h4>
              </div>
              <div className="col-span-2">
                <p className="text-lg text-portfolio-dark/70 leading-relaxed font-serif">Constant and consistent comms plus building partnerships paid off in our design system's adoption.</p>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="grid grid-cols-3 gap-x-6 items-start">
              <div className="col-span-1 text-center">
                <span className="text-[40px] md:text-[35px] lg:text-[48px] font-bold text-portfolio-dark leading-none font-serif block mb-[12px]">100%</span>
                <h4 className="text-[16px] font-normal text-portfolio-dark font-serif leading-tight mb-2">Unified Brand</h4>
              </div>
              <div className="col-span-2">
                <p className="text-lg text-portfolio-dark/70 leading-relaxed font-serif">Between consistent branding and a more modern harmonious system, this led to better brand recognition and happier customers.</p>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="grid grid-cols-3 gap-x-6 items-start">
              <div className="col-span-1 text-center">
                <h4 className="text-[16px] font-normal text-portfolio-dark font-serif leading-tight pt-2 mb-2">Upleveling Designers and Their Work</h4>
              </div>
              <div className="col-span-2">
                <p className="text-lg text-portfolio-dark/70 leading-relaxed font-serif">Although this piece is hard to measure, the work we did on the Platform team became the measuring stick for what others implemented.</p>
              </div>
            </div>
            
            {/* Item 4 */}
            <div className="grid grid-cols-3 gap-x-6 items-start">
              <div className="col-span-1 text-center">
                <span className="text-[40px] md:text-[35px] lg:text-[48px] font-bold text-portfolio-dark leading-none font-serif block mb-[12px]">28%</span>
                <h4 className="text-[16px] font-normal text-portfolio-dark font-serif leading-tight mb-2">Increase in Team Harmony</h4>
              </div>
              <div className="col-span-2">
                <p className="text-lg text-portfolio-dark/70 leading-relaxed font-serif">Giving my employees a reliable ear, expectations / processes and enabling them and their work, made my 360 review scores climb.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Challenges Section */}
       <section className="py-24 bg-white border-b border-divider">
        <div className="layout-container">
          <div className="col-span-12">
            <h3 className="text-[42px] md:text-[54px] font-bold text-portfolio-dark font-serif mb-6 leading-[1.1]">Goals / Where We Started</h3>
            <p className="text-lg md:text-xl text-portfolio-dark/70 font-serif mb-7 leading-relaxed max-w-3xl">
              In order for BILL to reach its company goals, the scalability, design and usability of our products hinged on the Platform team and their goals laid out below.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2">
              <div className="flex items-center">
                 <span className="text-lg font-bold text-portfolio-dark font-serif tracking-wide">Integrated Product Experience</span>
              </div>
              <div className="flex items-center">
                 <span className="text-lg font-bold text-portfolio-dark font-serif tracking-wide">A Scalable Foundation</span>
              </div>
              <div className="flex items-center">
                 <span className="text-lg font-bold text-portfolio-dark font-serif tracking-wide">Accelerate Build Time and Innovation</span>
              </div>
              <div className="flex items-center">
                 <span className="text-lg font-bold text-portfolio-dark font-serif tracking-wide">Our BHAG: To Improve Speed by 10x</span>
              </div>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12 items-start">
              <div className="md:col-span-5">
                <h4 className="text-[40px] font-bold text-portfolio-dark font-serif leading-tight mb-8">Challenges</h4>
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Lacking Design System</h4>
                    <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">BILL had an inadequate design system with a low adoption rate of 35-40%.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Lack of Processes / Expectations</h4>
                    <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Missing many design practices or set processes.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Dated Design (you can see below)</h4>
                    <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">The BILL system was old and hard to update from the lack of a design system.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Lack of Established Leadership</h4>
                    <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Many of the leaders for this new initiative were new to BILL employees, including myself.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">People Conflict</h4>
                    <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Siloed most teams and created disparate designs.</p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 space-y-8 relative md:translate-x-[calc(8.333%+48px)] w-full md:w-[100%]">
                <div className="shadow-lg overflow-hidden border border-divider">
                  <img src="/portfolio-cards/BILL-old2.png" alt="BILL Old UI 1" className="w-full h-auto block" referrerPolicy="no-referrer" />
                </div>
                <div className="shadow-lg overflow-hidden border border-divider">
                  <img src="/portfolio-cards/BILL-old-1.png" alt="BILL Old UI 2" className="w-full h-auto block" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Approach Section */}
      <section className="py-24 bg-portfolio-gray border-b border-divider overflow-hidden">
        <div className="layout-container">
          {/* Mobile-only Image on TOP */}
          <div className="col-span-12 lg:hidden w-full md:w-[75%] mx-auto mb-12">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="overflow-hidden"
            >
               <img src="/portfolio-cards/BILL-casestudy.png" alt="Approach 1" className="w-full h-auto" referrerPolicy="no-referrer" />
            </motion.div>
          </div>

          <div className="col-span-12 lg:grid lg:grid-cols-12 lg:gap-x-20">
            <div className="lg:col-span-4 lg:mt-[60px]">
              <h3 className="text-[42px] md:text-[54px] font-bold text-portfolio-dark font-serif mb-12 leading-[1.1]">My Design Approach</h3>
              
              <div className="space-y-12">
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Design Vision</h4>
                  <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Working from the brand guidelines, I led a team of senior designers to establish a vision for the integrated product.</p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Redesign Components</h4>
                  <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Working from our design vision and from our newly defined definition of quality, I led the Design Systems team, to improve the overall look and feel of our systems' components.</p>
                </div>
                <div className="lg:hidden space-y-3">
                  <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Communication and Collaboration Throughout</h4>
                  <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Getting a company to adopt a new look and feel was one of the biggest challenges. To do so it included deep relationship building, establishing great comms systems and making everyone feel heard and excited concerning the changes.</p>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:col-span-8 mt-16 lg:mt-0">
               <div className="mb-[40px]">
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden"
                  >
                    <img src="/portfolio-cards/BILL-casestudy.png" alt="Approach 1" className="w-full h-auto" referrerPolicy="no-referrer" />
                  </motion.div>
               </div>
            </div>
            
            {/* Desktop Side-by-Side aligned to left */}
            <div className="hidden lg:grid lg:col-span-12 lg:grid-cols-12 lg:gap-x-12 mt-0">
               <div className="lg:col-span-4 space-y-3 text-left">
                  <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">Communication and Collaboration Throughout</h4>
                  <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Getting a company to adopt a new look and feel was one of the biggest challenges. To do so it included deep relationship building, establishing great comms systems and making everyone feel heard and excited concerning the changes.</p>
               </div>
               <div className="lg:col-span-4 space-y-3 text-left">
                  <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">System for Contributions</h4>
                  <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Empowering designers outside of the Design Systems team, and speeding up our work, I again worked with the Design Systems team to create a system for contributions.</p>
               </div>
            </div>

            {/* Mobile/Tablet System for Contributions */}
            <div className="lg:hidden space-y-3 mt-12">
               <h4 className="text-lg font-bold text-portfolio-dark font-serif tracking-tight mb-2">System for Contributions</h4>
               <p className="text-[17px] text-portfolio-dark/70 font-serif leading-relaxed">Empowering designers outside of the Design Systems team, and speeding up our work, I again worked with the Design Systems team to create a system for contributions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="py-24 bg-white overflow-hidden border-b border-divider">
        <div className="layout-container items-center">
          <div className="col-span-12 lg:col-span-6 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/portfolio-cards/BILL-final.webp" 
                alt="Final Product" 
                className="w-full h-auto drop-shadow-2xl mx-auto"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 text-center lg:text-left">
            <h2 className="text-2xl md:text-[34px] leading-relaxed text-portfolio-dark font-serif italic font-normal">
              Through trust building, processes and good comms, I was able to lead product teams to a well designed, consistent and more usable product.
            </h2>
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

