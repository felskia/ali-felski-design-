/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutComponent from "./components/About";
import ContactComponent from "./components/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Strategy from "./pages/Strategy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MarianaTekCaseStudy from "./pages/MarianaTekCaseStudy";
import BrandMergeCaseStudy from "./pages/BrandMergeCaseStudy";
import ServiceYearCaseStudy from "./pages/ServiceYearCaseStudy";
import PresidentialCaseStudy from "./pages/PresidentialCaseStudy";
import MarianaTekAppCaseStudy from "./pages/MarianaTekAppCaseStudy";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <ContactComponent />
    </>
  );
}

export default function App() {
  return (
    <Router basename="/ali-felski-design-/">
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio/mariana-tek" element={<MarianaTekCaseStudy />} />
            <Route path="/portfolio/brand-merge" element={<BrandMergeCaseStudy />} />
            <Route path="/portfolio/service-year" element={<ServiceYearCaseStudy />} />
            <Route path="/portfolio/presidential-election" element={<PresidentialCaseStudy />} />
            <Route path="/portfolio/mariana-tek-app" element={<MarianaTekAppCaseStudy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


