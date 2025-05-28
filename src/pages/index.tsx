
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Events from '@/components/Events';
import Programs from '@/components/Programs';
import SuccessStories from '@/components/SuccessStories';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Events />
      <Programs />
      <SuccessStories />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;