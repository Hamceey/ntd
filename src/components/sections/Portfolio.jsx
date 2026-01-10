import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// Portfolio Component
const Portfolio = () => {
  const projects = [
    {
      title: 'TechCorp Dashboard',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      description: 'Modern SaaS platform with real-time analytics'
    },
    {
      title: 'GreenLeaf Branding',
      category: 'Branding & Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Complete brand identity for organic products'
    },
    {
      title: 'MediCare AI Chatbot',
      category: 'AI Solutions',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
      description: '24/7 patient support automation system'
    },
    {
      title: 'FashionHub E-commerce',
      category: 'E-commerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      description: 'High-converting online fashion store'
    },
    {
      title: 'RestaurantPro App',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      description: 'Food ordering and table management app'
    },
    {
      title: 'Corporate Video Series',
      category: 'Videography',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop',
      description: 'Professional brand storytelling videos'
    }
  ];

  return (
    <section id="portfolio" className="py-12 md:py-16 bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-deep-tide-blue mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-accent-black/70 max-w-2xl mx-auto">
            Explore our recent projects and success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition cursor-pointer group"
            >
              <div className="relative h-64 bg-gradient-to-br from-deep-tide-blue to-data-flow-cyan overflow-hidden">
                <div className="absolute inset-0 bg-deep-tide-blue opacity-0 group-hover:opacity-90 transition flex items-center justify-center">
                  <ExternalLink size={48} className="text-white" />
                </div>
                <div className="absolute top-4 left-4 bg-quantum-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-montserrat text-deep-tide-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-accent-black/70">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;