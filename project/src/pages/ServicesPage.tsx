import React from 'react';
import { 
  Code, 
  Laptop, 
  Database, 
  Layers, 
  CloudLightning, 
  PieChart, 
  CheckCircle2 
} from 'lucide-react';

// Service Card Type Definition
interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
}

// Service Card Component
const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features 
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 space-y-4 transform transition hover:scale-105 hover:shadow-2xl">
      <div className="bg-indigo-600/20 p-4 rounded-full inline-block">
        <Icon className="text-indigo-400" size={32} />
      </div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
      <div className="pt-4">
        <h4 className="text-lg font-semibold text-white mb-2">Key Features:</h4>
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center text-white/90 space-x-2 mb-2"
          >
            <CheckCircle2 size={16} className="text-green-400" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Services Page Component
const ServicesPage: React.FC = () => {
  // Services Data
  const services: ServiceCardProps[] = [
    {
      icon: Code,
      title: "Web Development",
      description: "Crafting responsive and scalable web applications that drive business growth.",
      features: [
        "Custom Frontend Development",
        "Backend Infrastructure",
        "API Integration",
        "Performance Optimization"
      ]
    },
    {
      icon: Laptop,
      title: "Mobile App Solutions",
      description: "Innovative mobile applications that provide seamless user experiences.",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Store Deployment"
      ]
    },
    {
      icon: Database,
      title: "Cloud Services",
      description: "Robust cloud infrastructure and migration strategies.",
      features: [
        "Cloud Architecture Design",
        "Serverless Computing",
        "Security Implementation",
        "Scalable Solutions"
      ]
    },
    {
      icon: Layers,
      title: "Enterprise Software",
      description: "Comprehensive software solutions tailored for enterprise needs.",
      features: [
        "Custom ERP Systems",
        "CRM Development",
        "Process Automation",
        "Integration Consulting"
      ]
    },
    {
      icon: CloudLightning,
      title: "Digital Transformation",
      description: "Strategic digital solutions to revolutionize your business model.",
      features: [
        "Technology Consulting",
        "Digital Strategy",
        "Process Reengineering",
        "Innovation Workshops"
      ]
    },
    {
      icon: PieChart,
      title: "Data Analytics",
      description: "Transforming raw data into actionable business insights.",
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Machine Learning Models",
        "Business Intelligence"
      ]
    }
  ];

  return (
    <div className="relative min-h-screen mt-6 bg-gradient-to-br from-indigo-600 to-purple-700 py-16 px-4">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Comprehensive Services
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Innovative solutions designed to transform your digital landscape and 
            drive business growth through cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition transform hover:scale-105">
              Get Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;