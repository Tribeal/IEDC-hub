import React from 'react';
import { Target, Award, Globe, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Empowering students to transform innovative ideas into successful ventures through mentorship and resources."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Recognized nationally for our contribution to startup ecosystem and entrepreneurship education."
    },
    {
      icon: Globe,
      title: "Network",
      description: "Connect with industry experts, successful entrepreneurs, and like-minded innovators."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge programs, workshops, and events that spark creativity and entrepreneurial thinking."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">IEDC</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Innovation and Entrepreneurship Development Cell is a dynamic platform that nurtures 
            entrepreneurial talent and fosters innovation culture in academic institutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Transforming Ideas into Impact
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Since our inception, IEDC has been at the forefront of promoting entrepreneurship 
              and innovation among students. We provide a comprehensive ecosystem that includes 
              mentorship, funding opportunities, workspace, and industry connections.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our programs are designed to bridge the gap between academic learning and real-world 
              business challenges, ensuring that students are well-equipped to launch successful ventures.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div>
                <h4 className="text-2xl font-bold text-red-600">500+</h4>
                <p className="text-gray-600">Startups Incubated</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-orange-600">₹10Cr+</h4>
                <p className="text-gray-600">Funding Facilitated</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-yellow-600">95%</h4>
                <p className="text-gray-600">Success Rate</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-red-500">50+</h4>
                <p className="text-gray-600">Industry Partners</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Team collaboration" 
                className="rounded-xl shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80" 
                alt="Innovation workspace" 
                className="rounded-xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
