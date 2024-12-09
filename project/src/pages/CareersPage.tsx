import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Filter, 
  Search 
} from 'lucide-react';

// Job Listing Type Definition
interface JobListingProps {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const CareersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  // Job Listings
  const jobListings: JobListingProps[] = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Create intuitive and innovative user experiences for our digital products."
    },
    {
      title: "Data Scientist",
      department: "Analytics",
      location: "New York, NY",
      type: "Full-time",
      description: "Develop advanced machine learning models and drive data-driven insights."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Austin, TX",
      type: "Full-time",
      description: "Lead product strategy and drive innovation across our digital solutions."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Optimize and manage cloud infrastructure and deployment pipelines."
    }
  ];

  // Departments for filtering
  const departments = ['All', ...new Set(jobListings.map(job => job.department))];

  // Filtered job listings
  const filteredJobs = jobListings.filter(job => 
    (selectedDepartment === 'All' || job.department === selectedDepartment) &&
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 py-16 px-4">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto relative z-10">
        {/* Careers Header */}
        <section className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join Our Innovative Team
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Be part of a dynamic team that's shaping the future of technology and driving digital transformation.
          </p>
        </section>

        {/* Job Search and Filters */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="flex space-x-4">
            <div className="relative flex-grow">
              <input 
                type="text" 
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={24} />
            </div>
            <div className="relative">
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white appearance-none"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept} className="bg-indigo-800">
                    {dept}
                  </option>
                ))}
              </select>
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={24} />
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredJobs.map((job, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 space-y-4 transform transition hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                <div className="bg-indigo-600/20 p-2 rounded-full inline-block">
                  <Briefcase className="text-indigo-400" size={24} />
                </div>
              </div>
              <p className="text-white/80">{job.description}</p>
              <div className="flex space-x-4 text-white/70 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase size={16} />
                  <span>{job.department}</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition transform hover:scale-105">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {filteredJobs.length === 0 && (
          <div className="text-center text-white mt-16">
            <h3 className="text-3xl font-bold mb-4">No Jobs Found</h3>
            <p className="text-white/80 mb-6">We couldn't find any jobs matching your search. Check back soon!</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            More Than Just a Job
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition transform hover:scale-105">
              Company Culture
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105">
              Employee Benefits
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;