import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import { Button } from '../ui/Button';
import { Stat } from '../ui/Stat';

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 to-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Coding the
              <span className="text-indigo-600"> Kanpur Way!</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We blend traditional values with modern technology to create innovative solutions. 
              Your trusted partner in digital transformation, right here in Kanpur.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" icon={ArrowRight}>
                Get Started
              </Button>
              <Button variant="outline">
                View Portfolio
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-full animate-pulse"></div>
              <Code className="relative h-64 w-64 mx-auto text-indigo-600" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat number="100+" label="Happy Clients" />
          <Stat number="50+" label="Projects Completed" />
          <Stat number="5+" label="Years Experience" />
          <Stat number="24/7" label="Support" />
        </div>
      </div>
    </div>
  );
}