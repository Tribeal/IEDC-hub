import React from 'react';
import { Rocket, BookOpen, Handshake, Code } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Programs = () => {
  const programs = [
    {
      icon: Rocket,
      title: "Startup Incubation",
      duration: "6-12 months",
      description: "Comprehensive support for early-stage startups including mentorship, workspace, and funding opportunities.",
      features: ["Dedicated workspace", "1:1 mentorship", "Funding connections", "Legal support"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Entrepreneur Bootcamp",
      duration: "3 months",
      description: "Intensive program covering all aspects of entrepreneurship from ideation to business model validation.",
      features: ["Weekly workshops", "Industry experts", "Peer networking", "Demo day"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Handshake,
      title: "Mentorship Program",
      duration: "Ongoing",
      description: "Connect with successful entrepreneurs and industry leaders for personalized guidance and support.",
      features: ["Expert mentors", "Monthly sessions", "Industry insights", "Network access"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Code,
      title: "Tech Innovation Lab",
      duration: "4 months",
      description: "Focus on technology-driven solutions with access to cutting-edge tools and resources.",
      features: ["Latest tech stack", "Research support", "Patent guidance", "Tech partnerships"],
      color: "from-green-500 to-teal-500"
    }
  ];

  const benefits = [
    {
      title: "Expert Mentorship",
      description: "Learn from successful entrepreneurs and industry veterans",
      stat: "50+ Mentors"
    },
    {
      title: "Funding Support",
      description: "Access to investors and funding opportunities",
      stat: "₹10Cr+ Facilitated"
    },
    {
      title: "Industry Network",
      description: "Connect with leading companies and potential partners",
      stat: "100+ Partners"
    },
    {
      title: "Success Rate",
      description: "High success rate of startups from our programs",
      stat: "85% Success"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to support entrepreneurs at every stage of their journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow group">
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${program.color}`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${program.color} flex items-center justify-center`}>
                    <program.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                    <p className="text-sm text-gray-600">{program.duration}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{program.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Program Features:</h4>
                  <ul className="space-y-1">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose IEDC Programs?</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our programs are designed with proven methodologies and backed by years of experience 
              in nurturing successful entrepreneurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-3xl font-bold text-blue-600 mb-2">{benefit.stat}</h4>
                  <h5 className="font-semibold text-gray-900 mb-2">{benefit.title}</h5>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
              Apply to Our Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
