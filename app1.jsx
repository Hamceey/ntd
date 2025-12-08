import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code, Bot, Palette, Video, Search, Share2,
  ChevronUp, MessageCircle, X, Menu,
  CheckCircle, Clock, TrendingUp, Users,
  Zap, Shield, Award, Headphones, DollarSign, Star,
  ArrowRight, Play, Quote, Calendar, ExternalLink
} from 'lucide-react';

// Promo Bar Component
const PromoBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-deep-tide-blue to-data-flow-cyan text-white py-3 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
        <span className="font-semibold">🎄 Christmas Special: Save up to 30%!</span>
        <div className="flex gap-3">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>
    </div>
  );
};

// Header Component
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

  return (
    <motion.header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <nav className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-black font-montserrat text-deep-tide-blue">
          NEURON<span className="text-data-flow-cyan">TIDE</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-accent-black hover:text-data-flow-cyan transition">Services</a>
          <a href="#portfolio" className="text-accent-black hover:text-data-flow-cyan transition">Portfolio</a>
          <a href="#pricing" className="text-accent-black hover:text-data-flow-cyan transition">Pricing</a>
          <a href="#testimonials" className="text-accent-black hover:text-data-flow-cyan transition">Testimonials</a>
          <button className="bg-quantum-gold text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-deep-tide-blue"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col gap-4 p-6">
              <a href="#services" className="text-accent-black hover:text-data-flow-cyan transition">Services</a>
              <a href="#portfolio" className="text-accent-black hover:text-data-flow-cyan transition">Portfolio</a>
              <a href="#pricing" className="text-accent-black hover:text-data-flow-cyan transition">Pricing</a>
              <a href="#testimonials" className="text-accent-black hover:text-data-flow-cyan transition">Testimonials</a>
              <button className="bg-quantum-gold text-white px-6 py-3 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

// Hero Component
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-deep-tide-blue via-deep-tide-blue to-data-flow-cyan">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 text-center text-white">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-quantum-gold text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition flex items-center justify-center gap-2">
              Start Your Project <ArrowRight size={20} />
            </button>
            <button className="bg-white text-deep-tide-blue px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition">
              View Our Work
            </button>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-quantum-gold rounded-full opacity-20 blur-xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-32 h-32 bg-data-flow-cyan rounded-full opacity-20 blur-xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </section>
  );
};

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

// Pricing Component (Part 1 of 2)
const Pricing = () => {
  const packages = [
    {
      name: 'Launch',
      tagline: 'Launch Your Digital Presence',
      originalPrice: '$2,999',
      price: '$2,099',
      discount: '30%',
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
      originalPrice: '$5,999',
      price: '$4,499',
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
      originalPrice: '$12,999',
      price: '$9,999',
      discount: '23%',
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
    <section id="pricing" className="py-20 bg-white">
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
            No hidden fees. Just results. Christmas special pricing ends soon!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-neutral-gray rounded-xl p-8 hover:shadow-2xl transition ${
                pkg.popular ? 'ring-4 ring-quantum-gold scale-105' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-quantum-gold text-white px-6 py-2 rounded-full font-bold text-sm">
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
                  <span className="text-5xl font-black text-deep-tide-blue">{pkg.price}</span>
                  <span className="text-xl text-accent-black/50 line-through">{pkg.originalPrice}</span>
                </div>
                <div className="bg-vibrant-green text-white inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2">
                  Save {pkg.discount}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-accent-black/80">
                    <CheckCircle size={20} className="text-vibrant-green flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-lg font-bold text-lg transition ${
                pkg.popular
                  ? 'bg-quantum-gold text-white hover:bg-opacity-90'
                  : 'bg-deep-tide-blue text-white hover:bg-opacity-90'
              }`}>
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-accent-black/70 mb-4">Need a custom solution?</p>
          <button className="border-2 border-deep-tide-blue text-deep-tide-blue px-8 py-3 rounded-lg font-semibold hover:bg-deep-tide-blue hover:text-white transition">
            Request Custom Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
};

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
    <section className="py-20 bg-gradient-to-br from-deep-tide-blue to-data-flow-cyan text-white">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl hover:bg-white/20 transition"
            >
              <reason.icon size={48} className="text-quantum-gold mb-4" />
              <h3 className="text-2xl font-bold font-montserrat mb-3">
                {reason.title}
              </h3>
              <p className="text-white/80">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
    <section id="portfolio" className="py-20 bg-neutral-gray">
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
    <section id="testimonials" className="py-20 bg-white">
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

// Stats Component
const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const stats = [
    { value: 150, label: 'Projects Completed', suffix: '+', icon: CheckCircle },
    { value: 98, label: 'Client Satisfaction', suffix: '%', icon: Star },
    { value: 200, label: 'Growth Average', suffix: '%', icon: TrendingUp },
    { value: 50, label: 'Team Members', suffix: '+', icon: Users }
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

// CTA Component
const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-quantum-gold to-vibrant-green">
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
            <button className="bg-white text-deep-tide-blue px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition flex items-center justify-center gap-2">
              <Calendar size={24} />
              Book Free Consultation
            </button>
            <button className="bg-deep-tide-blue text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition">
              View Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-deep-tide-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-black font-montserrat mb-4">
              NEURON<span className="text-quantum-gold">TIDE</span>
            </h3>
            <p className="text-white/70">
              Transforming businesses through innovative digital solutions
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-quantum-gold transition">Web Development</a></li>
              <li><a href="#" className="hover:text-quantum-gold transition">AI Chatbots</a></li>
              <li><a href="#" className="hover:text-quantum-gold transition">Branding</a></li>
              <li><a href="#" className="hover:text-quantum-gold transition">SEO</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-quantum-gold transition">About Us</a></li>
              <li><a href="#" className="hover:text-quantum-gold transition">Portfolio</a></li>
              <li><a href="#" className="hover:text-quantum-gold transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-quantum-gold transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">Get updates on latest trends</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50"
              />
              <button className="bg-quantum-gold px-4 py-2 rounded-lg hover:bg-opacity-90 transition">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2024 Neuron Tide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Floating Buttons Component
const FloatingButtons = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-vibrant-green text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 bg-deep-tide-blue text-white p-4 rounded-full shadow-2xl hover:scale-110 transition z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <PromoBar />
      <Header />
      <Hero />
      <Services />
      <VideoShowcase />
      <Pricing />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <Stats />
      <CTA />
      <Footer />
      <FloatingButtons />
    </div>
  );
}