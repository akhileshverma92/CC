import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

interface HeroProps {
  headline?: string;
  subheadline?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
}

const HomePage: React.FC<HeroProps> = ({
  headline = "Transform Your Ideas into Digital Reality",
  subheadline = "We build innovative digital solutions that drive your business forward",
  ctaPrimary = "Get Started",
  ctaSecondary = "Watch Demo"
}) => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-600 to-purple-700 overflow-hidden">
      {/* Gradient Overlay and Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-75"></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative container mx-auto px-4 z-10 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {headline}
            </h1>
            
            <p className="text-xl text-white/90 max-w-xl">
              {subheadline}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex space-x-4">
              <button className="flex items-center bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition transform hover:scale-105">
                {ctaPrimary}
                <ArrowRight className="ml-2" size={20} />
              </button>
              
{/*               <button className="flex items-center border-2 border-white/50 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105">
                <Play className="mr-2 fill-white" size={20} />
                {ctaSecondary}
              </button> */}
            </div>
            
            {/* Social Proof */}
            <div className="pt-6 flex items-center space-x-4">
              <div className="flex -space-x-3 ">
                <img 
                  src="https://plus.unsplash.com/premium_vector-1727956885330-0b80b9df0fc7?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Team Member" 
                  className="w-10 h-10 rounded-full border-2 z-20 border-white"
                />
                <img 
                  src="https://plus.unsplash.com/premium_vector-1731922571949-94123fce778f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8fDA%3D" 
                  alt="Team Member" 
                  className="w-10 h-10 rounded-full z-40 border-2 border-white"
                />
                <img 
                  src="https://plus.unsplash.com/premium_vector-1731922571914-9d0161b5e7b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" 
                  alt="Team Member" 
                  className="w-10 h-10 rounded-full border-2 z-40 border-white"
                />
              </div>
              <div>
                <p className="text-sm flex items-center">
                  <CheckCircle className="text-green-400 mr-2" size={16} />
                  Trusted by 100+ Startups
                </p>
              </div>
            </div>
          </div>
          
          {/* Illustration/Animation Section */}
          <div className="hidden md:flex justify-center">
           <img src="https://plus.unsplash.com/premium_vector-1726145383540-641c52023c89?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNvZGluZyUyMHRlYW18ZW58MHx8MHx8fDA%3D" className='rounded-full  shadow-2xl' alt="" />
           {/* <div className="relative w-full max-w-md">
              <div className="bg-white/10 absolute inset-0 rounded-xl -rotate-6 shadow-2xl"></div>
              <div className="relative bg-white/20 p-6 rounded-xl backdrop-blur-lg shadow-2xl transform rotate-6">
                <div className="space-y-4">
                  <div className="h-4 bg-white/30 rounded w-3/4"></div>
                  <div className="h-4 bg-white/30 rounded w-1/2"></div>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="h-16 bg-white/20 rounded"></div>
                    <div className="h-16 bg-white/20 rounded"></div>
                    <div className="h-16 bg-white/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
