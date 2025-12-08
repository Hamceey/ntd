import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Instagram, Linkedin } from 'lucide-react';
import { SiTiktok } from 'react-icons/si'; // TikTok icon
import { submitNewsletterSignup } from '../../services/api';


// Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await submitNewsletterSignup(email, 'footer-signup');

      setStatus('success');
      setMessage("You're subscribed! Check your inbox.");
      setEmail('');
    } catch (err) {
      console.error('Newsletter signup error:', err);
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <footer className="bg-deep-tide-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-black font-montserrat mb-4">
              NEURON<span className="text-quantum-gold">TIDE</span>
            </h3>
            <p className="text-white/70">
              Transforming businesses through innovative digital solutions
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li><a href="#services" className="hover:text-quantum-gold transition">Web Development</a></li>
              <li><a href="#services" className="hover:text-quantum-gold transition">AI Chatbots</a></li>
              <li><a href="#services" className="hover:text-quantum-gold transition">Branding</a></li>
              <li><a href="#services" className="hover:text-quantum-gold transition">Softwares</a></li>
              <li><a href="#services" className="hover:text-quantum-gold transition">SEO</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <a href="javascript:void(0)" className="hover:text-quantum-gold transition">
                  About Us <span className="text-sm text-white/50 ml-1">(Coming Soon)</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="hover:text-quantum-gold transition">
                  Portfolio <span className="text-sm text-white/50 ml-1">(Coming Soon)</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" className="hover:text-quantum-gold transition">
                  Testimonials <span className="text-sm text-white/50 ml-1">(Coming Soon)</span>
                </a>
              </li>
              <li><a href="#contact" className="hover:text-quantum-gold transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">Get updates on latest trends</p>

            <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-quantum-gold"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== 'idle') {
                    setStatus('idle');
                    setMessage('');
                  }
                }}
                disabled={status === 'loading' || status === 'success'}
                required
              />

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`px-4 py-2 rounded-lg transition flex items-center justify-center ${
                  status === 'loading'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-quantum-gold hover:bg-opacity-90'
                }`}
              >
                {status === 'loading' ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowRight size={20} />
                )}
              </button>
            </form>

            {status !== 'idle' && (
              <p
                className={`mt-2 text-sm ${
                  status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-white/10 pt-8 text-center text-white/60 space-y-2">
          <div className="flex justify-center gap-4 mb-2">
            <a href="https://www.instagram.com/neuron_tide/" target="_blank" rel="noopener noreferrer" className="hover:text-quantum-gold transition">
              <Instagram size={24} />
            </a>
            <a href="https://www.tiktok.com/@neurontide" target="_blank" rel="noopener noreferrer" className="hover:text-quantum-gold transition">
              <SiTiktok size={24} />
            </a>
            <a href="javascript:void(0)"  rel="noopener noreferrer" className="hover:text-quantum-gold transition">
              <Linkedin size={24} />
            </a>
          </div>
          <p>&copy; 2025 Neuron Tide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
