import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


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
  // Close mobile menu if open
  setIsMobileMenuOpen(false);
};

// Hero Component
const Hero = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-tide-blue via-deep-tide-blue to-data-flow-cyan">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 md:py-24 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black font-montserrat mb-6 leading-tight">
            AI-POWERED<br />
            <span className="text-quantum-gold">DIGITAL SOLUTIONS</span><br />
            For Modern Businesses
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            Transform your vision into digital reality with seamless design, development, and AI automation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center  relative z-20">
            <button onClick={() => scrollToSection('contact')} className="bg-quantum-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={20} className="pointer-events-none" />
            </button>
            <button onClick={() => scrollToSection('services')} className="bg-white text-deep-tide-blue px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition">
              View Our Services
            </button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-quantum-gold rounded-full opacity-20 blur-xl z-0"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-32 h-32 bg-data-flow-cyan rounded-full opacity-20 blur-xl z-0"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

export default Hero;