import React from "react";

const Hero = () => {
  return (
    <div className=" flex items-center justify-center px-4 pt-40">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text Content */}
        <div className="text-white space-y-6 order-2 lg:order-1">
          <div className="space-y-2">
            <h2 className="text-lg font-medium text-blue-300 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Ankit{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Jajadiya
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-200">
              Mobile App Developer
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Passionate about creating innovative mobile applications that
              solve real-world problems. Specializing in modern app development
              with cutting-edge technologies.
            </p>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-3 pt-6">
            <span className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/30">
              Android
            </span>
            <span className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-500/30">
              Flutter
            </span>
            <span className="bg-indigo-500/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium border border-indigo-500/30">
              Mobile UI/UX
            </span>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="flex justify-center order-1 lg:order-2">
          <div className="relative">
            {/* Decorative background elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-blue-600 rounded-2xl blur-lg opacity-40"></div>

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
              <div className="w-100 h-100   rounded-full overflow-hidden shadow-inner border-4 border-gray-700">
                <img
                  src="https://raw.githubusercontent.com/ankitjajadiya/ankitjajadiya.github.io/refs/heads/main/src/assets/ankit_jajadiya.jpg"
                  alt="Ankit"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Hero;
