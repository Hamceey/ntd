import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp, Users } from 'lucide-react';

// Stats Component
const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { value: 15, label: 'Projects Completed', suffix: '+', icon: CheckCircle },
    { value: 98, label: 'Client Satisfaction', suffix: '%', icon: Star },
    { value: 200, label: 'Growth Average', suffix: '%', icon: TrendingUp },
    { value: 10, label: 'Team Members', suffix: '+', icon: Users }
  ];

  return (
    <section className="py-20 bg-deep-tide-blue text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onViewportEnter={() => setIsVisible(true)}
              className="text-center"
            >
              <stat.icon size={48} className="text-quantum-gold mx-auto mb-4" />
              <motion.div
                className="text-5xl font-black font-montserrat mb-2"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
              >
                {stat.value}{stat.suffix}
              </motion.div>
              <p className="text-white/80 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;