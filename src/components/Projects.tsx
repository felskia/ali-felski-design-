import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Masonry from "react-masonry-css";

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
        // Ensure "otherWork" is in the desired order for masonry (L to R)
        // 1. Mariana Tek Marketing
        // 2. A Year of Service
        // 3. Election Results
        const sortedData = [...data].sort((a, b) => {
          const order = ["Mariana Tek Marketing", "A Year of Service", "Election Results"];
          const indexA = order.findIndex(t => a.title.includes(t));
          const indexB = order.findIndex(t => b.title.includes(t));
          if (indexA !== -1 && indexB !== -1) return indexA - indexB;
          return 0;
        });
        setProjects(sortedData);
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
    if (project.title.includes("Mariana Tek Redesign")) return "/portfolio/mariana-tek";
    if (project.title.includes("Brand Merge")) return "/portfolio/brand-merge";
    if (project.title.includes("Mariana Tek Marketing")) return "/portfolio/mariana-tek-app";
    if (project.title.includes("A Year of Service")) return "/portfolio/service-year";
    if (project.title.includes("Election Results")) return "/portfolio/presidential-election";
    return "/portfolio";
  };

  if (loading) return null;

  const masonryBreakpointColumns = {
    default: 3,
    1024: 3,
    900: 2,
    500: 1
  };

  return (
    <div id="portfolio">
      <section className="pt-20 md:pt-[100px] pb-24 md:pb-32 border-y border-divider bg-portfolio-gray">
        <div className="layout-container">
          <div className="col-span-12 space-y-[57px] md:space-y-[113px]">
            {/* Case Studies */}
            {caseStudies.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-12 lg:gap-x-20 items-center"
              >
                <div className="md:col-span-8 order-1 md:order-2">
                  <Link to={getProjectLink(project)} className="block group">
                    <div className="aspect-video overflow-hidden shadow-lg md:shadow-2xl">
                      <img
                        src={project.title.includes("Brand Merge") ? "/BILL-cropped.png" : project.image}
                        alt={project.title}
                        className={`w-full h-full transition-transform duration-700 ${
                          project.title.includes("Brand Merge")
                            ? 'object-cover scale-110 group-hover:scale-115' 
                            : project.title.includes("Mariana Tek")
                            ? 'object-cover object-left-top scale-[1.1] -translate-x-6 origin-top-left group-hover:scale-[1.15]'
                            : 'object-cover group-hover:scale-105'
                        }`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </Link>
                </div>
                <div className="md:col-span-4 order-2 md:order-1">
                  <Link to={getProjectLink(project)} className="block group">
                    <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-6 group-hover:text-portfolio-dark/70 transition-colors">
                      {project.title}
                    </h3>
                  </Link>
                  <p className="text-[18px] text-portfolio-dark/60 leading-relaxed mb-[28px]">
                    {project.description}
                  </p>
                  <Link 
                    to={getProjectLink(project)}
                    className="inline-block px-8 py-3 border border-[#644646]/20 text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-portfolio-gold hover:text-white hover:border-portfolio-gold transition-all duration-500"
                  >
                    VIEW CASE STUDY
                  </Link>
                </div>
              </motion.div>
            ))}

            {/* Secondary Projects Masonry */}
            <div className="pt-12">
              <Masonry
                breakpointCols={masonryBreakpointColumns}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {otherWork.map((project) => (
                  <Link 
                    key={project.id} 
                    to={getProjectLink(project)}
                    className="block group"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="overflow-hidden shadow-md md:shadow-lg bg-white rounded-[4px] border border-divider">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </motion.div>
                  </Link>
                ))}

                {isPortfolioPage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="overflow-hidden shadow-md md:shadow-lg bg-white rounded-[4px] border border-divider p-8 md:p-10 flex flex-col justify-center text-center"
                  >
                    <h3 className="text-[28px] md:text-[32px] font-bold font-serif mb-4 text-[#4A3232]">
                      Want more?
                    </h3>
                    <p className="text-[15px] md:text-[16px] leading-relaxed text-portfolio-dark font-serif mb-8 text-portfolio-dark/70">
                      When I find free time I&apos;m always adding more projects. Want to see more now? Here is a link to my portfolio deck. And please reach out for more information.
                    </p>
                    <div className="flex flex-col gap-3">
                      <a 
                        href="/portfolio-cards/AliFelski-DesignPortfolio.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2.5 border border-[#644646]/20 text-[#644646] text-[14px] font-orienta font-bold uppercase hover:bg-portfolio-gold hover:text-white hover:border-portfolio-gold transition-all duration-500"
                      >
                        VIEW PORTFOLIO DECK
                      </a>
                      <Link 
                        to="/contact"
                        className="inline-block px-4 py-2.5 border border-[#644646]/20 text-[#644646] text-[14px] font-orienta font-bold uppercase hover:bg-portfolio-gold hover:text-white hover:border-portfolio-gold transition-all duration-500"
                      >
                        CONTACT ME
                      </Link>
                    </div>
                  </motion.div>
                )}
              </Masonry>
            </div>

            {!isPortfolioPage && (
              <div className="mt-20">
                <Link 
                  to="/portfolio"
                  className="inline-block px-8 py-3 border border-[#644646]/20 text-[#644646] text-[16px] font-orienta font-bold uppercase hover:bg-portfolio-gold hover:text-white hover:border-portfolio-gold transition-all duration-500"
                >
                  View All Projects
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

