import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  description?: string;
  type: "case-study" | "other";
  image: string;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isPortfolioPage = location.pathname === "/portfolio";

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch projects:", err);
        setLoading(false);
      });
  }, []);

  const caseStudies = projects.filter(p => p.type === "case-study");
  const otherWork = projects.filter(p => p.type === "other");

  const getProjectLink = (project: Project) => {
    if (project.title.includes("Mariana Tek")) return "/portfolio/mariana-tek";
    if (project.title.includes("Brand Merge")) return "/portfolio/brand-merge";
    return "/portfolio";
  };

  if (loading) return null;

  return (
    <div id="portfolio">
      {/* Case Studies Section */}
      <section className="pt-24 pb-24 border-t border-portfolio-dark/5">
        <div className="layout-container">
          <h2 className="col-span-12 text-5xl font-bold mb-8 text-portfolio-dark">Case Studies</h2>
          
          <div className="col-span-12 space-y-16">
            {caseStudies.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-12 gap-x-20 items-center"
              >
                <div className="col-span-12 lg:col-span-4 lg:col-start-2 lg:order-1">
                  <Link to={getProjectLink(project)} className="block group">
                    <h3 className="text-5xl font-bold leading-tight mb-3 group-hover:text-portfolio-dark/70 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-lg text-portfolio-dark/60 leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <Link 
                    to={getProjectLink(project)}
                    className="inline-block px-8 py-3 border border-[#644646]/20 text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-portfolio-gold hover:text-white hover:border-portfolio-gold transition-all duration-500"
                  >
                    VIEW CASE STUDY
                  </Link>
                </div>
                <div className="col-span-12 lg:col-span-7 lg:col-start-6 lg:order-2">
                  <Link to={getProjectLink(project)} className="block group">
                    <div className="h-[425px] overflow-hidden shadow-2xl">
                      <div className={`w-full h-full overflow-hidden ${project.title.includes("Brand Merge") ? 'bg-[#FDF5F2]' : ''}`}>
                        <img
                          src={(!isPortfolioPage && project.title.includes("Brand Merge")) ? "/BILL-cropped.png" : project.image}
                          alt={project.title}
                          className={`w-full h-full transition-transform duration-700 ${
                            (project.title.includes("Brand Merge") && isPortfolioPage)
                              ? 'object-cover object-[center_top] scale-[2.2] origin-[center_15%] group-hover:scale-[2.3]' 
                              : 'object-cover group-hover:scale-105'
                          }`}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Work Section */}
      <section className="py-[68px] border-t border-portfolio-dark/5">
        <div className="layout-container">
          <h2 className="col-span-12 text-5xl font-bold mb-16 text-portfolio-dark">Other Work</h2>
          
          <div className="col-span-12 lg:col-start-3 lg:col-span-10 flex flex-col md:flex-row gap-[28px] items-start">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-[28px] w-full">
              {otherWork.filter((_, i) => i % 2 === 0).map((project) => (
                <div
                  key={project.id}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="overflow-hidden shadow-sm mb-4 bg-white rounded-[4px] border border-portfolio-dark/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-[22px] font-serif font-bold text-portfolio-dark leading-tight">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </div>
            
            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-[28px] w-full">
              {otherWork.filter((_, i) => i % 2 !== 0).map((project) => (
                <div
                  key={project.id}
                  className="block"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="overflow-hidden shadow-sm mb-4 bg-white rounded-[4px] border border-portfolio-dark/10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-[22px] font-serif font-bold text-portfolio-dark leading-tight">
                      {project.title}
                    </h3>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {!isPortfolioPage && (
            <div className="col-span-12 lg:col-start-3 lg:col-span-10 mt-20">
              <Link 
                to="/portfolio"
                className="inline-block px-8 py-3 border border-[#644646]/20 text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-portfolio-gold hover:text-white hover:border-portfolio-gold transition-all duration-500"
              >
                View All Projects
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

