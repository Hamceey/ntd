import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

// Video Showcase Component
const VideoShowcase = () => {
  const videos = [
    {
      title: 'E-commerce Transformation',
      problem: 'Low online sales & poor user experience',
      solution: 'AI-powered platform with 300% conversion boost',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop'
    },
    {
      title: 'Hospital Management System',
      problem: 'Manual appointment chaos & data overload',
      solution: 'Smart hospital system with 24/7 AI chatbot',
      thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop'
    },
    {
      title: 'Restaurant Digital Presence',
      problem: 'Invisible online presence & lost orders',
      solution: 'SEO-optimized website with WhatsApp ordering',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop'
    },
    {
      title: 'Complete Brand Overhaul',
      problem: 'Generic identity & inconsistent messaging',
      solution: 'Complete rebrand with viral social strategy',
      thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=500&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-deep-tide-blue mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-accent-black/70 max-w-2xl mx-auto">
            Watch how we transform business challenges into growth opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition group cursor-pointer"
            >
              <div className="relative h-64 bg-gradient-to-br from-deep-tide-blue to-data-flow-cyan overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play size={64} className="text-white opacity-80 group-hover:scale-125 transition" />
                </div>
                <div className="absolute top-4 right-4 bg-quantum-gold text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Case Study
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold font-montserrat text-deep-tide-blue mb-3">
                  {video.title}
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-red-600">
                    <span className="font-semibold">Problem:</span> {video.problem}
                  </p>
                  <p className="text-vibrant-green">
                    <span className="font-semibold">Solution:</span> {video.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;