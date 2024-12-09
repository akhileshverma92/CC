import React, { useState } from 'react';
import { 
  Globe, 
  Layers, 
  Monitor, 
  Filter, 
  ExternalLink 
} from 'lucide-react';

// Project Type Definition
interface ProjectProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
}

const PortfolioPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Portfolio Projects
  const projects: ProjectProps[] = [
    {
      title: "Enterprise Cloud Migration",
      category: "Cloud",
      description: "Comprehensive cloud transformation for a Fortune 500 financial institution, enabling scalable and secure infrastructure.",
      technologies: ["AWS", "Kubernetes", "Terraform"],
      image: "https://plus.unsplash.com/premium_vector-1683141305195-6cdfd5214b49?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nJTIwdGVhbUVudGVycHJpc2UlMjBDbG91ZCUyME1pZ3JhdGlvbiUyMENvbXByZWhlbnNpdmV8ZW58MHx8MHx8fDA%3D",
      link: "#"
    },
    {
      title: "AI-Powered Customer Insights Platform",
      category: "Analytics",
      description: "Machine learning solution providing real-time customer behavior analytics for e-commerce platform.",
      technologies: ["Python", "TensorFlow", "React"],
      image: "https://plus.unsplash.com/premium_vector-1682310717908-db9ed503a9c3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWklMjBwb3dlcmVkJTIwY3VzdG9tZXIlMjBpbnNpZ2h0cyUyMHBsYXRmb3JtfGVufDB8fDB8fHww",
      link: "#"
    },
    {
      title: "Mobile Banking Application",
      category: "Mobile",
      description: "Secure and intuitive mobile banking app with advanced encryption and seamless user experience.",
      technologies: ["React Native", "GraphQL", "Firebase"],
      image: "https://plus.unsplash.com/premium_vector-1732616666968-7d541d92cab5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fE1vYmlsZSUyMEJhbmtpbmclMjBBcHBsaWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      link: "#"
    },
    {
      title: "IoT Smart City Management",
      category: "IoT",
      description: "Connected infrastructure platform managing urban resources through intelligent sensor networks.",
      technologies: ["Node.js", "MQTT", "MongoDB"],
      image: "https://plus.unsplash.com/premium_vector-1724589410783-283b5618faba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SW9UJTIwU21hcnQlMjBDaXR5JTIwTWFuYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
      link: "#"
    }
  ];

  // Categories for filtering
  const categories = ['All', ...new Set(projects.map(project => project.category))];

  // Filtered projects
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 py-16 px-4">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto relative z-10">
        {/* Portfolio Header */}
        <section className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Transformative solutions that drive innovation and deliver exceptional results across diverse industries.
          </p>
        </section>

        {/* Project Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex space-x-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full p-1">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  selectedCategory === category 
                    ? 'bg-white text-indigo-700' 
                    : 'text-white/70 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-indigo-600/20 p-2 rounded-full">
                  {project.category === 'Cloud' && <Globe className="text-indigo-400" size={24} />}
                  {project.category === 'Analytics' && <Monitor className="text-indigo-400" size={24} />}
                  {project.category === 'Mobile' && <Layers className="text-indigo-400" size={24} />}
                  {project.category === 'IoT' && <Filter className="text-indigo-400" size={24} />}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-indigo-600/20 text-indigo-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link} 
                  className="flex items-center text-white/80 hover:text-white transition space-x-2"
                >
                  <span>View Project</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition transform hover:scale-105">
              Discuss Your Idea
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

export default PortfolioPage;   