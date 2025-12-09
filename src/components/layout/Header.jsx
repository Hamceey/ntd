import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const headerHeight = 80; // Adjust based on your header height
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  // Close mobile menu AFTER a short delay to allow the scroll/transition to start
  // 150ms is usually a good buffer.
  setTimeout(() => {
    setIsMobileMenuOpen(false);
  }, 150);
};

  return (
  <>
    <motion.header
      className="fixed w-full  z-40 bg-white shadow-lg py-4"
      style={{ top: '0px' }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-black font-montserrat text-deep-tide-blue cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          NEURON<span className="text-data-flow-cyan">TIDE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('services')}
            className="text-accent-black hover:text-data-flow-cyan transition"
          >
            Services
          </button>

          <button
            onClick={() => scrollToSection('pricing')}
            className="text-accent-black hover:text-data-flow-cyan transition"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection('benefits')}
            className="text-accent-black hover:text-data-flow-cyan transition"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-quantum-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
        type="button"
          className="md:hidden text-deep-tide-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>
    </motion.header>

    {/* Mobile Menu must be outside the header */}
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t fixed w-full top-[80px] z-30"
        >
          <div className="flex flex-col gap-4 p-6">
            <button
            type="button"
              onClick={() => scrollToSection('services')}
              className="text-left"
            >
              Services
            </button>

            <button
            type="button"
              onClick={() => scrollToSection('pricing')}
              className="text-left"
            >
              Pricing
            </button>

            <button
            type="button"
              onClick={() => scrollToSection('benefits')}
              className="text-left"
            >
              Benefits
            </button>

            <button
            type="button"
              onClick={() => scrollToSection('contact')}
              className="bg-quantum-gold text-white px-6 py-3 rounded-lg text-left"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);
};


export default Header;