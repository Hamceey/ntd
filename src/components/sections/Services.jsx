import React from 'react';
import { motion } from 'framer-motion';
import { Code, Bot, Palette, Video, Search, Share2, Zap, TrendingUp } from 'lucide-react';

// Services Component
const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Fast, modern, mobile-friendly platforms tailored for growth. SEO-ready, secure, and fully customizable.',
      color: 'data-flow-cyan'
    },
    {
      icon: Bot,
      title: 'AI Chatbots',
      description: '24/7 sales and customer interaction with intelligent automation. WhatsApp and website chatbots.',
      color: 'quantum-gold'
    },
    {
      icon: Palette,
      title: 'Branding & Design',
      description: 'Build a distinctive market presence with visuals that communicate power and clarity.',
      color: 'vibrant-green'
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'Premium media that strengthens credibility and engages your audience.',
      color: 'data-flow-cyan'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Increase discoverability and attract organic traffic that converts.',
      color: 'quantum-gold'
    },
    {
      icon: Share2,
      title: 'Social Media',
      description: 'Scroll-stopping branded content that builds community and drives engagement.',
      color: 'vibrant-green'
    },
    {
      icon: Zap,
      title: 'Conversion Optimization',
      description: 'Transform platforms into lead engines with data-driven strategies.',
      color: 'data-flow-cyan'
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Custom solutions that optimize operations and scale with your business.',
      color: 'quantum-gold'
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Unlock insights from data to make informed strategic decisions.',
      color: 'vibrant-green'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-deep-tide-blue mb-4">
            Explore Our Services
          </h2>
          <p className="text-xl text-accent-black/70 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-neutral-gray p-8 rounded-xl hover:shadow-xl transition cursor-pointer group"
            >
              <service.icon
                size={48}
                className={`text-${service.color} mb-4 group-hover:scale-110 transition`}
              />
              <h3 className="text-2xl font-bold font-montserrat text-deep-tide-blue mb-3">
                {service.title}
              </h3>
              <p className="text-accent-black/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;