import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-portfolio-gold min-h-[60vh] md:min-h-[70vh] pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16 md:pb-20 relative border-b-[10px] border-white">
        <div className="layout-container">
          <div className="col-span-12 grid grid-cols-1 md:grid-cols-12 md:gap-x-8 lg:gap-x-12 xl:gap-x-20 gap-y-12 items-start">
            {/* Image Column - Cols 2-6 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="col-span-12 md:col-start-2 md:col-span-5 relative z-10 mt-8 sm:mt-12 md:mt-[36px]"
            >
              <div className="aspect-[3/4] md:aspect-[4/5] bg-[#D9D9D9] shadow-2xl overflow-hidden">
                <img 
                  src="/ali-photo.jpg" 
                  alt="Ali Felski" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Text Column - Cols 7-11 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-12 md:col-start-7 md:col-span-5 mt-8 sm:mt-12 md:mt-[36px]"
            >
            <h1 className="text-[28px] xs:text-[36px] sm:text-[42px] md:text-[54px] lg:text-[68px] font-bold text-white mb-4 leading-[1.1] md:leading-[1.05] tracking-tight break-words">
                I'm Ali. Nice to meet you!
              </h1>
              <p className="text-[18px] text-[#644646] mb-12 leading-relaxed font-serif font-medium lg:max-w-[95%]">
                I've been building products for the last 20 years – designing, researching, and/or managing. I love the intersection between mentorship and solving big technical problems. Have one you want to collaborate on?
              </p>
              
              <Link 
                to="/contact"
                className="inline-block px-10 py-4 bg-white text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-white/90 transition-colors duration-500"
              >
                CONTACT ME
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-[100px] pb-24 md:pb-32 bg-white border-y border-divider">
        <div className="layout-container">
          <div className="col-span-12 md:col-start-3 md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-12 font-serif">
                How I think about work
              </h2>
              <div className="prose text-[18px] max-w-none text-portfolio-dark/70 font-serif space-y-8">
                <p>
                  I prioritize creating psychological safety and building strong relationships in every team I join. I’ve found this to be foundational to high-performing organizations—when people feel trust and clarity, they collaborate more openly, challenge ideas constructively, and produce better outcomes for both the product and the business.
                </p>
                <p>
                  I also believe deeply in the role of thoughtful process. While process for its own sake can slow teams down, clear systems are essential for maintaining alignment at scale. Whether through design critiques, team rituals, or defined expectations, strong processes create shared understanding and give teams the structure they need to move quickly and confidently.
                </p>
                <p>
                  I’m particularly drawn to complex, ambiguous problem spaces. I enjoy digging into data to understand the broader context, shaping early ideas, aligning stakeholders, and building a clear vision forward. These are the moments where design can have the greatest impact—bringing clarity to complexity and helping teams move with purpose.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
