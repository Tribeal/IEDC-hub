import React from "react";
import { Rocket, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ignite Your
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  {" "}
                  Entrepreneurial
                </span>
                <br />
                Journey
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Join IEDC - where innovative ideas transform into successful
                startups. We foster entrepreneurship through hackathons,
                ideathons, and comprehensive startup support.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-lg px-8 py-6"
                onClick={() => navigate("/register")}
              >
                Join Our Community
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Events
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-gray-900">500+</h3>
                <p className="text-gray-600 text-sm">Startups Launched</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900">50+</h3>
                <p className="text-gray-600 text-sm">Innovation Events</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-gray-900">10K+</h3>
                <p className="text-gray-600 text-sm">Community Members</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="bg-gradient-to-br from-red-500 to-orange-600 rounded-xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Next Hackathon</h3>
                <p className="text-red-100 mb-4">48-hour innovation marathon</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Prize Pool:</span>
                    <span className="font-bold">₹50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Registration:</span>
                    <span className="font-bold">Open Now</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Date:</span>
                    <span className="font-bold">Dec 15-17</span>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-white text-red-600 hover:bg-gray-100">
                  Register Now
                </Button>
              </div>
            </div>
            <div className="absolute top-4 left-4 w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
