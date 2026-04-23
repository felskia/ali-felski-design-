import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "ABOUT", href: "/about" },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 overflow-hidden">
      <div className="layout-container">
        <div className="col-span-1 md:col-span-12 flex items-start justify-between pt-0 pb-4 md:pb-0">
          <div className="flex items-start gap-4 sm:gap-6 lg:gap-10">
            <Link to="/" className="pt-0 pb-4 md:pb-8 relative min-w-[120px] sm:min-w-[144px] md:min-w-[165px]">
              <img 
                src="/logo.png" 
                alt="Ali Felski Design" 
                className="w-[120px] sm:w-[144px] md:w-[165px] h-auto relative z-10 block"
                referrerPolicy="no-referrer"
              />
              {/* Fake extension line going off the left side of the page */}
              <div className="absolute bottom-[16px] sm:bottom-[16px] md:bottom-[32px] right-[95%] w-[100vw] h-[1.5px] bg-white pointer-events-none" />
            </Link>
            
            <div className="hidden lg:flex items-center space-x-10 pt-4 md:pt-5">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white/90 hover:text-white text-[16px] font-orienta font-bold transition-colors duration-500 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-nav-underline group-hover:bg-white transition-colors duration-500"></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 pt-4 md:pt-5">
            <div className="hidden lg:block">
              <Link 
                to="/contact" 
                className="text-white/90 hover:text-white text-[16px] font-orienta font-bold transition-colors duration-500 relative group"
              >
                CONTACT ME
                <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-nav-underline group-hover:bg-white transition-colors duration-500"></span>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white p-1 z-50 relative"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-portfolio-gold z-40 lg:hidden flex flex-col items-center justify-start pt-28"
          >
            <div className="flex flex-col items-center space-y-8">
              <Link
                to="/"
                className="text-white text-3xl font-serif font-bold"
                onClick={() => setIsOpen(false)}
              >
                HOME
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-white text-3xl font-serif font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-white text-3xl font-serif font-bold"
                onClick={() => setIsOpen(false)}
              >
                CONTACT ME
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

