import React, { useState } from "react";
import {
  Smartphone,
  Code,
  Database,
  Braces,
  Cpu,
  Network,
  Video,
  Eye,
  Star,
} from "lucide-react";

const Skill = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      id: 1,
      name: "Android Designing",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-lime-500 to-green-600",
      bgColor: "bg-lime-100",
      description: "UI/UX, Material Design",
    },
    {
      id: 2,
      name: "Android Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-100",
      description: "Kotlin, Java, Android Studio",
    },
    {
      id: 3,
      name: "Flutter",
      icon: <Code className="w-8 h-8" />,
      color: "from-cyan-500 to-sky-600",
      bgColor: "bg-cyan-100",
      description: "Cross-platform apps, Dart",
    },
    {
      id: 4,
      name: "Dart",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-100",
      description: "Flutter app development",
    },
    {
      id: 5,
      name: "State Management",
      icon: <Braces className="w-8 h-8" />,
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-100",
      description: "GetX, Provider",
    },
    {
      id: 6,
      name: "Databases",
      icon: <Database className="w-8 h-8" />,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-100",
      description: "MySQL, SQLite, Firebase, PHP",
    },
    {
      id: 7,
      name: "Programming",
      icon: <Cpu className="w-8 h-8" />,
      color: "from-rose-500 to-red-600",
      bgColor: "bg-rose-100",
      description: "C, C++, VB.Net, Java, Kotlin",
    },
    {
      id: 8,
      name: "REST API",
      icon: <Network className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-100",
      description: "API integration",
    },
    {
      id: 9,
      name: "Retrofit",
      icon: <Network className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-100",
      description: "HTTP client for Android",
    },
    {
      id: 10,
      name: "Volley",
      icon: <Network className="w-8 h-8" />,
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-100",
      description: "Networking for Android",
    },
    {
      id: 11,
      name: "FFmpeg",
      icon: <Video className="w-8 h-8" />,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-100",
      description: "Multimedia processing",
    },
    {
      id: 12,
      name: "OpenCV",
      icon: <Eye className="w-8 h-8" />,
      color: "from-gray-500 to-neutral-700",
      bgColor: "bg-gray-100",
      description: "Computer vision",
    },
  ];

  return (
    <div className="  p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#fff] mb-4 animate-pulse">
            My Skills
          </h1>
          <p className="text-xl text-[#fff] animate-fade-in">
            Mobile App Development Expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`${skill.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 cursor-pointer border border-white/50 animate-slide-up`}
              style={{ animationDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Icon */}
              <div
                className={`bg-gradient-to-r ${
                  skill.color
                } text-white w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 ${
                  hoveredSkill === skill.id ? "rotate-12 scale-110" : ""
                }`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {skill.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-white rounded-3xl p-12 shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Cross-Platform Excellence
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Specialized in creating beautiful, performant mobile applications
              across iOS, Android, and Flutter platforms. With expertise in
              native development and cross-platform solutions, I deliver
              seamless user experiences.
            </p>

            {/* Floating Cards */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-gray-700">Apps Developed</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-orange-600 mb-2">
                  5+
                </div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl hover:scale-105 transition-transform duration-300">
                <div className="text-2xl font-bold text-teal-600 mb-2">
                  100%
                </div>
                <div className="text-gray-700">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Skill;
