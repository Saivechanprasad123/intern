import React from 'react';
import { GraduationCap, Lightbulb, Target, Trophy, Rocket, Users, Mail, Linkedin, Github } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      {/* <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <GraduationCap className="w-8 h-8 text-blue-400" />
              <span className="text-white font-bold text-xl">SmartEd</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">About</a>
              <a href="#features" className="text-gray-300 hover:text-white transition-colors duration-300">Features</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradient">
            Welcome to SmartED Innovations
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Transforming education through cutting-edge technology and innovative learning solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-blue-500 text-white rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
              Get Started
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg transform hover:scale-105 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section id="features" className="py-20 bg-slate-900/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Why Choose SmartEd?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: "Innovative Learning", color: "blue" },
              { icon: Target, title: "Personalized Path", color: "purple" },
              { icon: Trophy, title: "Industry Recognition", color: "pink" },
              { icon: Rocket, title: "Fast-Track Growth", color: "orange" }
            ].map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 transform hover:-translate-y-2 transition-all duration-300 border border-slate-700/50 hover:border-slate-600">
                <div className={`w-12 h-12 rounded-lg bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                  <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">Experience world-class education with our cutting-edge platform and expert instructors.</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      {/* <section id="about" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-slate-700/50">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About SmartEd Innovations</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  We're revolutionizing education by combining cutting-edge technology with proven learning methodologies. Our platform adapts to each student's unique learning style, ensuring optimal results.
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-4">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        src={`https://i.pravatar.cc/40?img=${i}`}
                        alt={`Team member ${i}`}
                        className="w-10 h-10 rounded-full border-2 border-slate-800"
                      />
                    ))}
                  </div>
                  <span className="text-gray-400">Join our growing community</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "15K+", label: "Students" },
                  { number: "95%", label: "Success Rate" },
                  { number: "200+", label: "Courses" },
                  { number: "50+", label: "Countries" }
                ].map((stat, index) => (
                  <div key={index} className="bg-slate-700/30 rounded-lg p-6 text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-lg border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold">SmartEd</span>
              </div>
              <p className="text-gray-400 text-sm">
                Transforming education through innovation and technology.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} SmartEd Innovations. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 4s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default Home;