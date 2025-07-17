import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Linkedin,Github,Mail } from "lucide-react";
import rahulvk from '../assets/images/rahulvk.jpg'
import nivedhita from '../assets/images/nivedhita.jpg'
import irfana from '../assets/images/irfana.jpg'
import dhanush from '../assets/images/dhanush.jpg'
import rahul from '../assets/images/rahul.jpg'
import bunny from '../assets/images/bunny.png'
import rithika from '../assets/images/rithika.jpg'
import neha from '../assets/images/NEHA.jpg'
import aman from '../assets/images/AMAN.jpg'


const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: "L Irfana",
            position: "Student Lead",
            image: irfana,
            bio: "Leading IEDC team",
            Linkedin: "https://www.linkedin.com/in/abhishek-vijayan-baa449243/",
            github: "https://github.com/Tribeal",
            email: "chanduvk133@gmail.com"

        },

         {
            id: 2,
            name: "Rahul Krishnan KS",
            position: "Student Lead",
            image: rahul,
            bio: "Leading IEDC team",
            Linkedin: "https://www.linkedin.com/in/abhishek-vijayan-baa449243/",
            github: "https://github.com/Tribeal",
            email: "chanduvk133@gmail.com"

        },

         {
            id: 3,
            name: "Dhanush S",
            position: "Creative innovativion lead",
            image: dhanush,
            bio: "Developing Innovative Technical Solution",
            Linkedin: "https://www.linkedin.com/in/abhishek-vijayan-baa449243/",
            github: "https://github.com/Tribeal",
            email: "chanduvk133@gmail.com"

        },

         {
            id: 4,
            name: "Rahul V K",
            position: "Quality & Operation Lead",
            image: rahulvk,
            bio: "Maintaning quality of operations",
            Linkedin: "https://www.linkedin.com/in/abhishek-vijayan-baa449243/",
            github: "https://github.com/Tribeal",
            email: "chanduvk133@gmail.com"

        },

         {
            id: 5,
            name: "Niveditha A S",
            position: "Branding and Marketing Lead",
            image: nivedhita,
            bio: "Keeping up branding of IEDC",
            Linkedin: "https://www.linkedin.com/in/abhishek-vijayan-baa449243/",
            github: "https://github.com/Tribeal",
            email: "chanduvk133@gmail.com"

        },

         {
            id: 6,
            name: "Abhishek Vijayan",
            position: "Technical Lead",
            image: bunny,
            bio: "Developing Innovative Technical Solution",
            Linkedin: "https://www.linkedin.com/in/abhishek-vijayan-baa449243/",
            github: "https://github.com/Tribeal",
            email: "chanduvk133@gmail.com"

        },

         {
            id: 7,
            name: "Ritika S Anil",
            position: "Women Entrepreneurship Lead",
            image: rithika,
            bio: "Boosting Women Participation in operations",
            Linkedin: "https://www.linkedin.com/in/abhishek-vijayan-baa449243/",
            github: "https://github.com/Tribeal",
            email: "chanduvk133@gmail.com"

        },

         {
            id: 8,
            name: "Neha B",
            position: "Community Lead",
            image: neha,
            bio: "Upkeepment of Community",
            Linkedin: "https://www.linkedin.com/in/abhishek-vijayan-baa449243/",
            github: "https://github.com/Tribeal",
            email: "chanduvk133@gmail.com"

        },

         {
            id: 9,
            name: "Abhishek Vijayan",
            position: "Technical Lead",
            image: aman,
            bio: "Developing Innovative Technical Solution",
            Linkedin: "https://www.linkedin.com/in/abhishek-vijayan-baa449243/",
            github: "https://github.com/Tribeal",
            email: "chanduvk133@gmail.com"

        },
    ];

    return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {" "}Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our dedicated team of innovators, entrepreneurs, and leaders working together 
            to build a thriving startup ecosystem and foster the next generation of changemakers.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {teamMembers.map((member) => (
                <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="p-2">
                    <div className="relative group overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="aspect-[3/4] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Content overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                          {member.bio}
                        </p>
                        <div className="flex space-x-3">
                          <a
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Linkedin size={16} />
                          </a>
                          <a
                            href={member.github}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Github size={16} />
                          </a>
                          <a
                            href={`mailto:${member.email}`}
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                          >
                            <Mail size={16} />
                          </a>
                        </div>
                      </div>

                      {/* Static info */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/90 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                        <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                        <p className="text-red-300 text-sm font-medium">{member.position}</p>
                      </div>

                      {/* Top corner decoration */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-lg hover:bg-gray-50" />
            <CarouselNext className="hidden md:flex -right-12 bg-white shadow-lg hover:bg-gray-50" />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6">
              We're always looking for passionate individuals who want to make a difference 
              in the entrepreneurship ecosystem.
            </p>
            <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
