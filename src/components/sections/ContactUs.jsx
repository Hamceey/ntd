import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import BookConsultation from './BookConsultation';
import { submitContactForm } from '../../services/api'; // adjust path if needed


const ContactUs = () => {
    const [openConsultation, setOpenConsultation] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const services = [
    'Web Development',
    'AI Chatbots',
    'Branding & Design',
    'Videography',
    'SEO Optimization',
    'Social Media Marketing',
    'Custom Software',
    'Business Intelligence',
    'Other'
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
  if (!formData.name || !formData.email || !formData.message) {
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
    await submitContactForm(formData); // send to Google Apps Script

    setStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    setTimeout(() => setStatus('idle'), 5000);
  } catch (err) {
    console.error('Contact form error:', err);
    setStatus('error');
    setErrorMessage('Something went wrong. Please try again or contact us directly.');
    setTimeout(() => setStatus('idle'), 5000);
  }
};

  return (
    <section id="contact" className="py-20 bg-neutral-gray">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-montserrat text-deep-tide-blue mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-accent-black/70 max-w-2xl mx-auto">
            Ready to transform your digital presence? Get in touch and let's discuss your project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold font-montserrat text-deep-tide-blue mb-6">
                Get In Touch
              </h3>
              <p className="text-accent-black/70 text-lg mb-8">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-data-flow-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-data-flow-cyan" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-tide-blue mb-1">Email Us</h4>
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

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-quantum-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-quantum-gold" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-tide-blue mb-1">Call Us</h4>
                  <a href="tel:+254792899725" className="text-accent-black/70 hover:text-quantum-gold transition">
                    +254 792 899 725
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-white rounded-lg hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-vibrant-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-vibrant-green" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-deep-tide-blue mb-1">Visit Us</h4>
                  <p className="text-accent-black/70">
                    Nairobi, Kenya<br />
                    Available for remote projects worldwide
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-lg">
              <h4 className="font-bold text-deep-tide-blue mb-4">Business Hours</h4>
              <div className="space-y-2 text-accent-black/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-deep-tide-blue mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                  placeholder="John Doe"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-deep-tide-blue mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                  placeholder="john@example.com"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-deep-tide-blue mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                  placeholder="+254 712 345 678"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-deep-tide-blue mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                  placeholder="Your Company"
                  disabled={status === 'loading'}
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-deep-tide-blue mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition"
                  disabled={status === 'loading'}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-deep-tide-blue mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-data-flow-cyan focus:border-transparent transition resize-none"
                  placeholder="Tell us about your project..."
                  disabled={status === 'loading'}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'loading' ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition ${
                  status === 'loading' || status === 'success'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-quantum-gold hover:bg-opacity-90'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-vibrant-green bg-vibrant-green/10 p-4 rounded-lg"
                >
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">
                    Thank you! We'll get back to you within 24 hours.
                  </span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg"
                >
                  <AlertCircle size={20} />
                  <span className="text-sm font-medium">{errorMessage}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-deep-tide-blue to-data-flow-cyan text-white p-12 rounded-xl"
        >
          <h3 className="text-3xl font-bold font-montserrat mb-4">
            Prefer a Direct Conversation?
          </h3>
          <p className="text-xl mb-6 text-white/90">
            Schedule a free 30-minute consultation with our team
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
              onClick={() => setOpenConsultation(true)}

            className="bg-quantum-gold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition"
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>
      </div>


      {openConsultation && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">

    {/* Modal Container */}
    <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-y-auto max-h-[90vh]">

      {/* Close Button */}
      <button
        onClick={() => setOpenConsultation(false)}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-600 transition"
      >
        Close
      </button>

      {/* Consultation Form */}
      <BookConsultation />

    </div>
  </div>
)}

    </section>
  );
};

export default ContactUs;