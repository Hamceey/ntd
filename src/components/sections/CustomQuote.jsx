import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User, Mail, Phone, Building2, Briefcase, DollarSign,
  FileText, Calendar, CheckCircle, AlertCircle, Send, Rocket
} from 'lucide-react';
import { X } from 'lucide-react';
import { submitGetStartedForm }  from '../../services/api';



const CustomQuote = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    projectDetails: '',
    timeline: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Web Development',
    'AI Chatbots & Automation',
    'Branding & Design',
    'Videography & Media Production',
    'SEO & Digital Marketing',
    'Social Media Management',
    'E-commerce Solutions',
    'Custom Software Development',
    'Business Intelligence & Analytics',
    'Mobile App Development',
    'Multiple Services',
    'Not Sure Yet'
  ];

  const budgetRanges = [
    'Under ksh 20,000',
    'ksh 20,000 - 50,000',
    'ksh 50,000 - 100,000',
    'ksh 100,000 - 250,000',
    'ksh 250,000 - 500,000',
    'Over ksh 500,000',
    'Need Help Determining Budget'
  ];

  const timelines = [
    'ASAP (1-2 weeks)',
    'Soon (3-4 weeks)',
    '1-2 months',
    '3-6 months',
    '6+ months',
    'Flexible / Not Sure'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.service) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setStatus('loading');

    try {
      await submitGetStartedForm({ ...formData, timestamp: new Date().toISOString() });

      setStatus('success');
      setFormData({
        name: '', email: '', phone: '', company: '',
        service: '', budget: '', projectDetails: '', timeline: ''
      });
      setTimeout(() => setStatus('idle'), 5000);

    } catch (error) {
      console.error('Get Started form error:', error);
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  if (!isOpen) return null;



  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  className="fixed inset-0 z-50 bg-black/60 flex justify-center overflow-y-auto py-10 px-4"

>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-data-flow-cyan/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-quantum-gold/5 to-transparent" />

      <div className="bg-white rounded-2xl shadow-2xl relative max-w-6xl w-full mx-auto p-6 md:p-10 max-h-[90vh] overflow-y-auto">

        <button
  onClick={onClose}
  className="absolute top-4 right-4 z-[999] w-10 h-10 flex items-center justify-center rounded-full
             bg-red-500 hover:bg-red-600 text-white shadow-lg transition"
  aria-label="Close"
>
  <X size={20} strokeWidth={2.5} />
</button>


        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-quantum-gold/20 to-vibrant-green/20 px-6 py-3 rounded-full mb-6 border border-quantum-gold/30"
          >
            <Rocket className="text-quantum-gold" size={20} />
            <span className="text-deep-tide-blue font-bold text-sm uppercase tracking-wider">
              Start Your Project Today
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-deep-tide-blue mb-4">
            Get a Free Project Quote
          </h2>
          <p className="text-xl text-accent-black/70 max-w-2xl mx-auto">
            Tell us about your project and receive a detailed quote within 24 hours. No commitments, just clear pricing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Benefits Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-neutral-gray rounded-xl p-8">
              <h3 className="text-2xl font-bold font-montserrat text-deep-tide-blue mb-6">
                What Happens Next:
              </h3>

              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Submit Your Request',
                    desc: 'Fill out the form with your project details',
                    color: 'quantum-gold'
                  },
                  {
                    step: '2',
                    title: 'We Review & Analyze',
                    desc: 'Our team evaluates your requirements (1-2 hours)',
                    color: 'data-flow-cyan'
                  },
                  {
                    step: '3',
                    title: 'Receive Detailed Quote',
                    desc: 'Get pricing, timeline, and approach (Within 24hrs)',
                    color: 'vibrant-green'
                  },
                  {
                    step: '4',
                    title: 'Discuss & Refine',
                    desc: 'Schedule a call to finalize details',
                    color: 'deep-tide-blue'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className={`w-12 h-12 rounded-full bg-${item.color}/20 flex items-center justify-center flex-shrink-0`}>
                      <span className={`text-${item.color} font-black text-xl`}>{item.step}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-deep-tide-blue mb-1">{item.title}</h4>
                      <p className="text-sm text-accent-black/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-deep-tide-blue to-data-flow-cyan text-white rounded-xl p-6">
              <h4 className="font-bold mb-4 text-lg">Why Choose Neuron Tide?</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>7-14 Day Average Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>150+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>98% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} />
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quote Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white border-2 border-gray-100 rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                      <User size={16} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-quantum-gold focus:border-transparent transition"
                      placeholder="John Doe"
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                      <Mail size={16} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-quantum-gold focus:border-transparent transition"
                      placeholder="john@example.com"
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>
                </div>

                {/* Phone & Company Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                      <Phone size={16} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-quantum-gold focus:border-transparent transition"
                      placeholder="+254 712 345 678"
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                      <Building2 size={16} />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-quantum-gold focus:border-transparent transition"
                      placeholder="Your Company"
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                    <Briefcase size={16} />
                    What Service Do You Need? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-quantum-gold focus:border-transparent transition"
                    disabled={status === 'loading' || status === 'success'}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Budget & Timeline Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="budget" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                      <DollarSign size={16} />
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-quantum-gold focus:border-transparent transition"
                      disabled={status === 'loading' || status === 'success'}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                      <Calendar size={16} />
                      Desired Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-quantum-gold focus:border-transparent transition"
                      disabled={status === 'loading' || status === 'success'}
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label htmlFor="projectDetails" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                    <FileText size={16} />
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-quantum-gold focus:border-transparent transition resize-none"
                    placeholder="Describe your project goals, target audience, key features, or any specific requirements..."
                    disabled={status === 'loading' || status === 'success'}
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    The more details you provide, the more accurate your quote will be.
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                  whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-lg font-bold text-white text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
                    status === 'loading' || status === 'success'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-quantum-gold via-vibrant-green to-data-flow-cyan hover:shadow-xl'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending Your Request...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={24} />
                      <span>Quote Request Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send size={24} />
                      <span>Get My Free Quote</span>
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 text-vibrant-green bg-vibrant-green/10 p-4 rounded-lg border-2 border-vibrant-green/30"
                  >
                    <CheckCircle size={24} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold mb-1">Thank You! We'll Send Your Quote Within 24 Hours</div>
                      <div className="text-sm text-accent-black/70">
                        Check your email for confirmation. We'll review your project and send you a detailed quote with pricing, timeline, and approach.
                      </div>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 text-red-600 bg-red-50 p-4 rounded-lg border-2 border-red-200"
                  >
                    <AlertCircle size={24} className="flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold mb-1">Error Submitting Request</div>
                      <div className="text-sm">{errorMessage}</div>
                    </div>
                  </motion.div>
                )}

                {/* Privacy Note */}
                <p className="text-xs text-center text-gray-500">
                  🔒 Your information is secure. We respect your privacy and will only use your details to provide your quote.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>

  );
};

export default CustomQuote;