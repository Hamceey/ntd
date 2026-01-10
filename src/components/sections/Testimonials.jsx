import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

// Testimonials Component
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'CEO',
      company: 'TechVision Solutions',
      avatar: 'https://i.pravatar.cc/150?img=12',
      text: 'Neuron Tide transformed our digital presence completely. Their AI chatbot increased our lead conversion by 300%. Exceptional work!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      position: 'Marketing Director',
      company: 'GreenLeaf Organics',
      avatar: 'https://i.pravatar.cc/150?img=5',
      text: 'The website they built is not just beautiful, it\'s a revenue-generating machine. SEO results exceeded all expectations.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      position: 'Founder',
      company: 'UrbanStyle Fashion',
      avatar: 'https://i.pravatar.cc/150?img=33',
      text: 'From branding to e-commerce development, Neuron Tide delivered excellence at every step. Our sales doubled in 3 months!',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      position: 'Operations Head',
      company: 'MediCare Plus',
      avatar: 'https://i.pravatar.cc/150?img=9',
      text: 'Their custom hospital management system streamlined our entire workflow. The team is professional, responsive, and innovative.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-deep-tide-blue mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-accent-black/70 max-w-2xl mx-auto">
            Real results from real businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-gray p-8 rounded-xl hover:shadow-xl transition"
            >
              <Quote size={40} className="text-data-flow-cyan mb-4" />
              <p className="text-accent-black/80 text-lg mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h4 className="font-bold text-deep-tide-blue">{testimonial.name}</h4>
                  <p className="text-sm text-accent-black/60">{testimonial.position}</p>
                  <p className="text-sm text-accent-black/60">{testimonial.company}</p>
                </div>
              </div>
              <div className="flex gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-quantum-gold fill-quantum-gold" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;