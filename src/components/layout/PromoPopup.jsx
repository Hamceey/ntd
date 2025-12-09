import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Gift, Sparkles, X } from 'lucide-react';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Show popup after 2 seconds (adjust as needed)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const launchDeadline = new Date('2025-12-21T23:59:59+03:00').getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = launchDeadline - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }) => (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] sm:min-w-[70px] border border-white/20">
      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-quantum-gold">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs font-semibold text-white/90 uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );

  const handleClaimDiscount = () => {
    setIsOpen(false);
    setTimeout(() => {
      const target = document.getElementById('pricing');
      if (target) {
        const headerHeight = 100;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[95%] max-w-2xl"
          >
            <div className="relative bg-gradient-to-br from-deep-tide-blue via-data-flow-cyan to-deep-tide-blue rounded-2xl shadow-2xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '10px 10px'
                  }}
                />
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 transition"
              >
                <X className="text-white" size={24} />
              </button>

              {/* Content */}
              <div className="relative p-6 sm:p-8 text-white">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Gift className="text-quantum-gold" size={40} />
                    <Sparkles className="text-quantum-gold" size={28} />
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2">
                    🎉 LAUNCH SALE 🎉
                  </h2>
                  <p className="text-lg sm:text-xl font-semibold">
                    Save up to <span className="text-quantum-gold font-black text-2xl sm:text-3xl">25%</span> on All Services!
                  </p>
                  <p className="text-sm sm:text-base text-white/80 mt-2">
                    Limited time offer - Don't miss out on this exclusive deal!
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="mb-6">
                  <p className="text-center text-sm font-semibold mb-3 text-white/90">
                    ⏰ Offer Ends In:
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <TimeUnit value={timeLeft.days} label="Days" />
                    <div className="text-2xl sm:text-3xl font-black text-quantum-gold">:</div>
                    <TimeUnit value={timeLeft.hours} label="Hours" />
                    <div className="text-2xl sm:text-3xl font-black text-quantum-gold">:</div>
                    <TimeUnit value={timeLeft.minutes} label="Mins" />
                    <div className="text-2xl sm:text-3xl font-black text-quantum-gold">:</div>
                    <TimeUnit value={timeLeft.seconds} label="Secs" />
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleClaimDiscount}
                    className="bg-quantum-gold text-deep-tide-blue px-8 py-4 rounded-lg font-black text-base sm:text-lg hover:scale-105 transition flex items-center justify-center gap-2"
                  >
                    <Zap size={20} />
                    <span>CLAIM DISCOUNT NOW</span>
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-base sm:text-lg transition border border-white/30"
                  >
                    Maybe Later
                  </button>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-quantum-gold via-white to-quantum-gold" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PromoPopup;