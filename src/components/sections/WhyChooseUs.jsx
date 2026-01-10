import React from 'react';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users, Headphones, DollarSign, Shield } from 'lucide-react';

// Why Choose Us Component
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Clock,
      title: 'Lightning Fast Delivery',
      description: 'Most projects delivered within 7-14 days without compromising quality'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Results',
      description: 'We ensure measurable growth and ROI with every project'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Specialists in design, development, AI, and digital marketing'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock assistance via WhatsApp, email, and phone'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden costs. Clear packages with defined deliverables'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'We refine until you\'re 100% satisfied with the results'
    }
  ];

  return (
    <section id="benefits" className="py-12 md:py-16 bg-gradient-to-br from-deep-tide-blue to-data-flow-cyan text-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-4">
            Why Choose Neuron Tide?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We don't just deliver projects—we deliver results that transform businesses
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-5 md:p-8 rounded-xl hover:bg-white/20 transition flex flex-col items-center text-center h-full"
            >
              <reason.icon className="text-quantum-gold mb-3 w-10 h-10 md:w-12 md:h-12" />
              <h3 className="text-base md:text-2xl font-bold font-montserrat mb-2">
                {reason.title}
              </h3>
              <p className="text-xs md:text-base text-white/80 line-clamp-4 md:line-clamp-none">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;