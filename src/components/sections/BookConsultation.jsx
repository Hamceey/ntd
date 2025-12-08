import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, CheckCircle, AlertCircle, Phone, Mail, User, Building2, MessageSquare, Sparkles } from 'lucide-react';
import { submitConsultationForm }  from '../../services/api';



const BookConsultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    preferredDate: '',
    preferredTime: '',
    topic: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const topics = [
    'Web Development',
    'AI Chatbots & Automation',
    'Branding & Design',
    'Digital Marketing & SEO',
    'Custom Software Development',
    'Business Intelligence',
    'E-commerce Solutions',
    'Mobile App Development',
    'General Consultation',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM'
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

    if (!formData.name || !formData.email || !formData.phone) {
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
      await submitConsultationForm(formData);// <-- call the imported API function
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        preferredDate: '',
        preferredTime: '',
        topic: '',
        message: ''
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or call us directly.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const today = new Date().toISOString().split('T')[0];
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split('T')[0];


  return (
    <div id="consultation" className="py-16">

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">

        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
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
            className="inline-flex items-center gap-2 bg-quantum-gold/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6"
          >
            <Sparkles className="text-quantum-gold" size={20} />
            <span className="text-quantum-gold font-bold text-sm uppercase tracking-wider">
              Free 30-Minute Consultation
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-deep-tide-blue mb-4">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Schedule a free consultation with our team. No commitments, just valuable insights for your digital transformation.
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
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-6">
                What You'll Get:
              </h3>

              <div className="space-y-4">
                {[
                  { icon: CheckCircle, text: 'Expert analysis of your needs' },
                  { icon: CheckCircle, text: 'Tailored solution recommendations' },
                  { icon: CheckCircle, text: 'Technology stack suggestions' },
                  { icon: CheckCircle, text: 'Rough timeline & budget estimate' },
                  { icon: CheckCircle, text: 'Clear next steps & roadmap' },
                  { icon: CheckCircle, text: 'No obligation - zero pressure' }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <benefit.icon className="text-vibrant-green flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{benefit.text}</span>

                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-quantum-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-quantum-gold" size={24} />
                </div>
                <div>
                  <div className="text-gray-700 text-sm">Quick Call?</div>
                  <a href="tel:+254792899725" className="text-grey/700 font-semibold hover:text-quantum-gold transition">
                    +254 792 899 725
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-data-flow-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-data-flow-cyan" size={24} />
                </div>
                <div>
                  <div className="text-gray-700 text-sm">Prefer Email?</div>
                  <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=neurontide@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-accent-black/70 hover:text-data-flow-cyan transition"
>
  hello@neurontide.com
</a>

                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                    placeholder="John Doe"
                    disabled={status === 'loading' || status === 'success'}
                  />
                </div>

                {/* Email & Phone Row */}
                <div className="grid md:grid-cols-2 gap-4">
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
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                      placeholder="john@example.com"
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                      <Phone size={16} />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                      placeholder="+254 712 345 678"
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>
                </div>

                {/* Company */}
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                    placeholder="Your Company (Optional)"
                    disabled={status === 'loading' || status === 'success'}
                  />
                </div>

                {/* Date & Time Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                      <Calendar size={16} />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={today}
                      max={maxDateStr}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                      disabled={status === 'loading' || status === 'success'}
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                      <Clock size={16} />
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                      disabled={status === 'loading' || status === 'success'}
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Topic */}
                <div>
                  <label htmlFor="topic" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                    <MessageSquare size={16} />
                    What would you like to discuss?
                  </label>
                  <select
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                    disabled={status === 'loading' || status === 'success'}
                  >
                    <option value="">Select a topic</option>
                    {topics.map((topic, index) => (
                      <option key={index} value={topic}>{topic}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-deep-tide-blue mb-2">
                    <MessageSquare size={16} />
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition resize-none"
                    placeholder="Tell us more about your project, goals, or any specific questions you have..."
                    disabled={status === 'loading' || status === 'success'}
                  />
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
                      : 'bg-gradient-to-r from-quantum-gold to-vibrant-green hover:shadow-xl'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Booking Your Slot...</span>
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle size={24} />
                      <span>Consultation Requested!</span>
                    </>
                  ) : (
                    <>
                      <Calendar size={24} />
                      <span>Request Free Consultation</span>
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
                      <div className="font-bold mb-1">Consultation Request Received!</div>
                      <div className="text-sm text-accent-black/70">
                        We'll confirm your booking within 2 hours and send you a calendar invite. Check your email!
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
                      <div className="font-bold mb-1">Oops! Something went wrong</div>
                      <div className="text-sm">{errorMessage}</div>
                    </div>
                  </motion.div>
                )}

                {/* Privacy Note */}
                <p className="text-xs text-center text-gray-500">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy" className="text-data-flow-cyan hover:underline">Privacy Policy</a>.
                  We respect your privacy and will never share your information.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-700 text-lg">
            🔒 This consultation is completely <span className="text-quantum-gold font-bold">FREE</span> with{' '}
            <span className="text-vibrant-green font-bold">ZERO commitment</span>.
            We're here to help, not sell.
          </p>
        </motion.div>
      </div>
    </div>

  );
};

export default BookConsultation;