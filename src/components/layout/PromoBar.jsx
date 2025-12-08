import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Gift, Sparkles } from 'lucide-react';

const PromoBar = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[70px] border border-white/20">
      <div className="text-3xl md:text-4xl font-black font-montserrat text-quantum-gold">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs font-semibold text-white/90 uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-deep-tide-blue via-data-flow-cyan to-deep-tide-blue text-white shadow-lg"
        style={{
          backgroundSize: '200% 100%',
          animation: 'gradient 3s ease infinite'
        }}
      >
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

        <div className="relative max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* Left Side */}
            <div className="flex items-center gap-3">
              <Gift className="text-quantum-gold" size={32} />
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="text-quantum-gold" size={20} />
                  <span className="text-lg md:text-xl font-black font-montserrat">
                    🎉 LAUNCH SALE
                  </span>
                  <Sparkles className="text-quantum-gold" size={20} />
                </div>
                <p className="text-sm md:text-base font-medium">
                  Save up to <span className="text-quantum-gold font-black text-lg">25%</span> - Limited Time Offer!
                </p>
              </div>
            </div>

            {/* Countdown */}
            <div className="flex items-center gap-2">
              <TimeUnit value={timeLeft.days} label="Days" />
              <div className="text-3xl font-black text-quantum-gold">:</div>
              <TimeUnit value={timeLeft.hours} label="Hours" />
              <div className="text-3xl font-black text-quantum-gold">:</div>
              <TimeUnit value={timeLeft.minutes} label="Mins" />
              <div className="text-3xl font-black text-quantum-gold">:</div>
              <TimeUnit value={timeLeft.seconds} label="Secs" />
            </div>

            {/* Right Side CTA */}
            <div className="flex items-center gap-3">
             <a
  href="#pricing"
  onClick={(e) => {
    e.preventDefault(); // prevent default jump
    const target = document.getElementById('pricing');
    if (target) {
      const promoBarHeight = 1; // approximate height of PromoBar
      const headerHeight = 1;   // height of your header
      const offset = promoBarHeight + headerHeight;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }}
  className="relative bg-quantum-gold text-deep-tide-blue px-6 py-3 rounded-lg font-black text-sm md:text-base hover:bg-opacity-90 transition flex items-center gap-2 overflow-hidden"
>
  <Zap size={20} />
  <span>CLAIM DISCOUNT</span>
</a>

            </div>

          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-quantum-gold" />
        <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default PromoBar;
