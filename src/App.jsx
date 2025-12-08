import React from 'react';
import PromoBar from './components/layout/PromoBar';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import VideoShowcase from './components/sections/VideoShowcase';
import Pricing from './components/sections/Pricing';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Portfolio from './components/sections/Portfolio';
// import Testimonials from './components/sections/Testimonials';
import Stats from './components/sections/Stats';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/ui/FloatingButtons';
import ContactUs from './components/sections/ContactUs';
import BookConsultation from './components/sections/BookConsultation';
import useAnchorOffsetScroll from './hooks/useAnchorOffsetScroll';



export default function App() {
      useAnchorOffsetScroll(100, 150);

  return (
    <div className="min-h-screen bg-white">
      <PromoBar />
      <Header />
      <Hero />
      <Services />
{/*       <VideoShowcase /> */}
      <Pricing />
      <WhyChooseUs />
{/*       <Portfolio /> */}
{/*       <Testimonials /> */}
      <ContactUs />
      <Stats />
      <CTA />
      <Footer />
      <FloatingButtons />
    </div>
  );
}