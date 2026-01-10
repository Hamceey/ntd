import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import BookConsultation from './BookConsultation';

const CTA = () => {
  const [openConsultation, setOpenConsultation] = useState(false);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80; // adjust if needed
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-quantum-gold to-vibrant-green">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Schedule a free 30-minute consultation and see how we can help you achieve your goals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setOpenConsultation(true)}
              className="bg-white text-deep-tide-blue px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition flex items-center justify-center gap-2"
            >
              <Calendar size={24} />
              Book Free Consultation
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="bg-deep-tide-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition"
            >
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {openConsultation && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setOpenConsultation(false)}
              className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-600 transition"
            >
              Close
            </button>
            <BookConsultation />
          </div>
        </div>
      )}
    </section>
  );
};

export default CTA;
