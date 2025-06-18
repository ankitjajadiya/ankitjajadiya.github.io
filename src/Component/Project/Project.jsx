import React, { useState, useEffect } from "react";
import {
  ExternalLink,
  Smartphone,
  Monitor,
  Code,
  Star,
  ArrowRight,
  Play,
  Image,
  Database,
  Plane,
  Globe,
  Users,
} from "lucide-react";

const Project = () => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: "Shots",
      subtitle: "Lyrical Video Status Maker",
      icon: <Play className="w-6 h-6" />,
      description:
        "Create stunning lyrical video status with music and effects",
      color: "from-purple-600 to-pink-600",
      tech: ["Android", "Video Editing", "Music"],
      features: [
        "Video Creation",
        "Lyrical Sync",
        "Music Integration",
        "Social Sharing",
      ],
    },
    {
      id: 2,
      name: "Gallery",
      subtitle: "Photo & Media Manager",
      icon: <Image className="w-6 h-6" />,
      description: "Advanced gallery app for organizing and managing photos",
      color: "from-blue-600 to-cyan-600",
      tech: ["Android", "Media", "Storage"],
      features: [
        "Photo Organization",
        "Cloud Sync",
        "Advanced Filters",
        "Secure Storage",
      ],
    },
    {
      id: 3,
      name: "Able QC",
      subtitle: "Quality Control System",
      link: "https://play.google.com/store/apps/details?id=com.qcable",
      icon: <Monitor className="w-6 h-6" />,
      description: "Professional quality control and inspection management",
      color: "from-green-600 to-emerald-600",
      tech: ["Android", "QC", "Management"],
      features: [
        "Quality Inspection",
        "Report Generation",
        "Team Management",
        "Analytics",
      ],
    },
    {
      id: 4,
      name: "DataHub",
      subtitle: "Data Management Platform",
      link: "https://play.google.com/store/apps/details?id=com.ablefreight.datahub",
      icon: <Database className="w-6 h-6" />,
      description: "Comprehensive data management and analytics solution",
      color: "from-orange-600 to-red-600",
      tech: ["Flutter", "Data Analytics", "Cloud"],
      features: [
        "Data Visualization",
        "Real-time Sync",
        "Advanced Analytics",
        "Export Tools",
      ],
    },
    {
      id: 5,
      name: "JayAir",
      subtitle: "Aviation Services",
      link: "https://play.google.com/store/apps/details?id=customer.jayair.com",
      icon: <Plane className="w-6 h-6" />,
      description: "Complete aviation services and booking platform",
      color: "from-sky-600 to-blue-600",
      tech: ["Flutter", "Aviation", "Booking"],
      features: [
        "Flight Booking",
        "Service Management",
        "Customer Portal",
        "Real-time Updates",
      ],
    },
    {
      id: 6,
      name: "Gofernets",
      subtitle: "Network Solutions",
      link: "https://play.google.com/store/apps/details?id=com.techwapltd.gofernets",
      icon: <Globe className="w-6 h-6" />,
      description: "Advanced network management and monitoring system",
      color: "from-indigo-600 to-purple-600",
      tech: ["Flutter", "Networking", "Monitoring"],
      features: [
        "Network Monitoring",
        "Performance Analytics",
        "Alert System",
        "Remote Management",
      ],
    },
    {
      id: 7,
      name: "MyFans",
      subtitle: "Fan Engagement Platform",
      link: "https://play.google.com/store/apps/details?id=net.mytagllc.myfans",
      icon: <Users className="w-6 h-6" />,
      description:
        "Connect creators with their fans through interactive features",
      color: "from-pink-600 to-rose-600",
      tech: ["Flutter", "Social", "Engagement"],
      features: [
        "Creator Tools",
        "Fan Interaction",
        "Content Sharing",
        "Community Building",
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleProjects((prev) => {
        if (prev.length < projects.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 200);

    return () => clearInterval(timer);
  });

  return (
    <div className="pt-40 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl font-bold  mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of mobile applications built with passion and
            cutting-edge technology
          </p>
          <div className="mt-6 flex justify-center items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-white">{projects.length} Projects</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Code className="w-5 h-5 text-blue-400" />
              <span className="text-white">2 Platforms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`transform transition-all duration-700 ${
                visibleProjects.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="group relative">
                {/* Project Card */}
                <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                  {/* Project Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                      project.color
                    } flex items-center justify-center mb-4 transform transition-transform duration-300 ${
                      hoveredProject === project.id ? "scale-110 rotate-3" : ""
                    }`}
                  >
                    <div className="text-white">{project.icon}</div>
                  </div>

                  {/* Project Info */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {project.name}
                    </h3>
                    <p className="text-purple-300 text-sm font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white/10 text-white px-2 py-1 rounded-lg text-xs font-medium border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features - Shown on Hover */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      hoveredProject === project.id
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2 text-sm">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <li
                            key={i}
                            className="text-gray-300 text-xs flex items-center"
                          >
                            <div className="w-1 h-1 bg-purple-400 rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Button */}
                  {/* Action Button */}
                  <div className="relative z-10 mt-2">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 bg-gradient-to-r ${project.color} text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 transform`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View on Play Store</span>
                      </a>
                    ) : (
                      <div className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg font-medium">
                        <Smartphone className="w-4 h-4" />
                        <span>Mobile App</span>
                      </div>
                    )}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      project.color
                    } rounded-2xl transition-opacity opacity-0 duration-300 ${
                      hoveredProject === project.id ? "opacity-10" : ""
                    }`}
                  ></div>
                </div>

                {/* Floating Elements */}
                <div
                  className={`absolute -z-10 inset-0 bg-gradient-to-r ${
                    project.color
                  } rounded-2xl blur-xl transition-opacity opacity-0 duration-300 ${
                    hoveredProject === project.id ? "opacity-20" : ""
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Project;
