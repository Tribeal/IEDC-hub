import React from "react";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCarousel from "./EventCarousel.tsx";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Startup Pitch Competition",
      date: "Dec 15, 2024",
      time: "10:00 AM",
      location: "Main Auditorium",
      participants: "50+ Teams",
      description:
        "Present your innovative ideas to industry experts and win exciting prizes.",
      type: "Competition",
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      date: "Dec 20, 2024",
      time: "2:00 PM",
      location: "Tech Lab",
      participants: "100+ Students",
      description:
        "Hands-on workshop covering latest AI trends and practical implementations.",
      type: "Workshop",
    },
    {
      id: 3,
      title: "Entrepreneur Networking Night",
      date: "Dec 25, 2024",
      time: "6:00 PM",
      location: "Innovation Hub",
      participants: "200+ Professionals",
      description:
        "Connect with successful entrepreneurs and expand your professional network.",
      type: "Networking",
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our exciting events designed to foster innovation, learning,
            and networking opportunities for aspiring entrepreneurs.
          </p>
        </div>

        {/* Event Image Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Past Events Gallery
          </h3>
          <EventCarousel />
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    event.type === "Competition"
                      ? "bg-red-100 text-red-700"
                      : event.type === "Workshop"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {event.type}
                </span>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {event.title}
              </h3>
              <p className="text-gray-600 mb-4">{event.description}</p>

              <div className="space-y-2 mb-6">
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <div className="flex items-center text-gray-500">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">{event.participants}</span>
                </div>
              </div>

              <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700">
                Register Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="text-red-600 border-red-600 hover:bg-red-50"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;
