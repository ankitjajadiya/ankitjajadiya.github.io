import React from "react";
import { Smartphone, Code, Zap, User, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="pt-40  py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center animate-pulse">
              <User className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-5xl font-bold text-white mb-4 animate-slide-up">
            Mobile App Developer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-slide-up-delay">
            Crafting beautiful, high-performance mobile applications for iOS,
            Android, and Flutter platforms
          </p>
        </div>

        {/* Skills Grid */}

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div className="space-y-6 animate-slide-left">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Smartphone className="w-8 h-8 mr-3 text-blue-400" />
                About Me
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm a passionate mobile app developer with expertise in
                  creating stunning, user-friendly applications across multiple
                  platforms. With a strong foundation in iOS, Flutter, and
                  Android development, I bring ideas to life through clean code
                  and innovative design.
                </p>
                <p>
                  My journey in mobile development has equipped me with the
                  skills to build high-performance, scalable applications that
                  deliver exceptional user experiences. I specialize in
                  cross-platform solutions using Flutter while maintaining
                  native expertise for platform-specific optimizations.
                </p>
                <p>
                  I'm committed to staying updated with the latest technologies
                  and best practices, ensuring that every project I work on
                  meets modern standards and exceeds client expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Experience & Services */}
          <div className="space-y-6 animate-slide-right">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                What I Offer
              </h3>
              <div className="space-y-4">
                {[
                  "Native iOS App Development (Swift, SwiftUI)",
                  "Cross-Platform Development (Flutter, Dart)",
                  "Android Development (Kotlin, Java)",
                  "UI/UX Design Implementation",
                  "App Store & Play Store Deployment",
                  "Performance Optimization",
                  "Third-party API Integration",
                  "Maintenance & Support",
                ].map((service, index) => (
                  <div
                    key={service}
                    className="flex items-center text-gray-300 transform hover:translate-x-2 transition-transform duration-200"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mr-3"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up {
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
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.2s both;
        }
        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.4s both;
        }
        .animate-slide-left {
          animation: slide-left 1s ease-out 0.6s both;
        }
        .animate-slide-right {
          animation: slide-right 1s ease-out 0.8s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
};

export default About;
