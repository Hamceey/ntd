import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Award, CheckCircle } from 'lucide-react';
import CustomQuote from './CustomQuote';



// Pricing Component (Part 1 of 2)
const Pricing = () => {
  const [openCustom, setOpenCustom] = useState(false);

  const packages = [
    {
      name: 'Launch',
      tagline: 'Launch Your Digital Presence',
      originalPrice: 'ksh 20,000',
      price: 'ksh 15,000',
      discount: '25%',
      icon: Zap,
      features: [
        'Professional Website (5 pages)',
        'Mobile Responsive Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        'Social Media Links',
        '1 Month Support',
        'Google Analytics Setup'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Scale',
      tagline: 'Scale Your Business',
      originalPrice: 'ksh 50,000',
      price: 'ksh 37,500',
      discount: '25%',
      icon: TrendingUp,
      features: [
        'Everything in Launch',
        'E-commerce Integration',
        'AI Chatbot (WhatsApp/Web)',
        'Advanced SEO (3 months)',
        'Content Management System',
        'Email Marketing Setup',
        '3 Months Priority Support',
        'Monthly Performance Reports'
      ],
      cta: 'Most Popular',
      popular: true
    },
    {
      name: 'Dominate',
      tagline: 'Complete Digital Dominance',
      originalPrice: 'ksh 100,000',
      price: 'ksh 75,000',
      discount: '25%',
      icon: Award,
      features: [
        'Everything in Scale',
        'Custom Software Development',
        'Advanced AI Automation',
        'Complete Brand Package',
        'Video Production (3 videos)',
        'Comprehensive Marketing',
        '6 Months Premium Support',
        'Dedicated Account Manager',
        'Unlimited Revisions'
      ],
      cta: 'Go Premium',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-deep-tide-blue mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-accent-black/70 max-w-2xl mx-auto">
            No hidden fees. Just results. Launch special offer ends soon!
          </p>
        </motion.div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible pb-8 pt-6 snap-x snap-mandatory scrollbar-hide px-4 -mx-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-neutral-gray rounded-xl p-8 pt-12 hover:shadow-2xl transition min-w-[300px] md:min-w-0 snap-center ${pkg.popular ? 'ring-4 ring-quantum-gold scale-100 md:scale-105' : ''
                }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-quantum-gold text-white px-6 py-2 rounded-full font-bold text-sm z-10 whitespace-nowrap">
                  MOST POPULAR
                </div>
              )}

              <pkg.icon size={48} className="text-data-flow-cyan mb-4" />

              <h3 className="text-3xl font-black font-montserrat text-deep-tide-blue mb-2">
                {pkg.name}
              </h3>
              <p className="text-accent-black/70 mb-6">{pkg.tagline}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-deep-tide-blue">{pkg.price}</span>
                  <span className="text-lg sm:text-xl text-accent-black/50 line-through">{pkg.originalPrice}</span>
                </div>
                <div className="bg-vibrant-green text-white inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2">
                  Save {pkg.discount}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-accent-black/80">
                    <CheckCircle size={20} className="text-vibrant-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => setOpenCustom(true)}
                className={`w-full py-4 rounded-lg font-bold text-lg transition ${pkg.popular
                  ? 'bg-quantum-gold text-white hover:bg-opacity-90'
                  : 'bg-deep-tide-blue text-white hover:bg-opacity-90'
                  }`}
              >
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mobile Scroll Hint */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {packages.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-deep-tide-blue/20" />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-accent-black/70 mb-4">Need a custom solution?</p>
          <button onClick={() => setOpenCustom(true)} className="border-2 border-deep-tide-blue text-deep-tide-blue px-8 py-3 rounded-lg font-semibold hover:bg-deep-tide-blue hover:text-white transition">
            Request Custom Quote
          </button>
          <CustomQuote isOpen={openCustom} onClose={() => setOpenCustom(false)} />


        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;