import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "PORTFOLIO", href: "/portfolio" },
    // { name: "SERVICES", href: "/services" },
    // { name: "MANAGEMENT STRATEGY", href: "/strategy" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="layout-container">
        <div className="col-span-12 flex items-start justify-between">
          <div className="flex items-start gap-10">
            <Link to="/" className="pb-8 relative min-w-[165px]">
              <img 
                src="/logo.png" 
                alt="Ali Felski Design" 
                className="w-[165px] h-auto relative z-10"
                referrerPolicy="no-referrer"
              />
              {/* Fake extension line going off the left side of the page */}
              <div className="absolute bottom-[32px] right-[95%] w-[100vw] h-[1.5px] bg-white pointer-events-none" />
            </Link>
            
            <div className="hidden lg:flex items-center space-x-10 pt-5">
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

          <div className="pt-5">
            <Link 
              to="/contact" 
              className="text-white/90 hover:text-white text-[16px] font-orienta font-bold transition-colors duration-500 relative group"
            >
              CONTACT ME
              <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-nav-underline group-hover:bg-white transition-colors duration-500"></span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

