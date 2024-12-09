import React from 'react';
import { 
  Target, 
  Users, 
  Award, 
  Globe, 
  Rocket, 
  Heart 
} from 'lucide-react';

// Team Member Type Definition
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

// About Page Component
const AboutPage: React.FC = () => {
  // Company Values
  const companyValues = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Committed to delivering innovative solutions that create meaningful impact for our clients."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We believe in strong partnerships and work closely with clients to achieve their goals."
    },
    {
      icon: Award,
      title: "Excellence in Execution",
      description: "Consistently pushing boundaries and setting new standards in technology and service."
    }
  ];

  // Team Members
  const teamMembers: TeamMemberProps[] = [
    {
      name: "Akhilesh Verma",
      role: "Founder & CEO",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHod11zzPxSfA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1710606992810?e=1739404800&v=beta&t=RwzgrMVcEeT5S0Og4V-_1UV1qJkumt9zxQWTIytsyJ8"
    },
    {
      name: "Raunak Singh",
      role: "CTO",
      image: "https://media.licdn.com/dms/image/v2/D5635AQEkPJ3kK_P0Ng/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1713083154740?e=1734372000&v=beta&t=o49wzigmW5sHGKXRkhAjpF66mu1U0XK71wTu1sPyNDE"
    },
    {
      name: "Hari Om",
      role: "COO",
      image: "https://avatars.githubusercontent.com/u/153184642?v=4"
    },
    {
      name: "Vikas Rathore ",
      role: "CMO",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGsXnyj8TcPqg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718216167550?e=1739404800&v=beta&t=Kt89tQ2T2dx800Vica4RFgF5kq6IVxXirHvLJlp7JJY"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 py-16 px-4">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto relative z-10">
        {/* Company Overview */}
        <section className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About Our Company
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            We are a forward-thinking technology partner dedicated to transforming businesses 
            through innovative digital solutions. Our passion lies in bridging technological 
            potential with strategic business objectives.
          </p>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <div className="text-center mb-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Our Core Values</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              We are guided by principles that drive innovation, foster collaboration, 
              and deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {companyValues.map((value, index) => {
              const { icon: Icon } = value;
              return (
                <div 
                  key={index} 
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 space-y-4 transform transition hover:scale-105 hover:shadow-2xl"
                >
                  <div className="bg-indigo-600/20 p-4 rounded-full inline-block">
                    <Icon className="text-indigo-400" size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">{value.title}</h4>
                  <p className="text-white/80">{value.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Our Leadership Team</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Meet the visionaries driving our company's innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center transform transition hover:scale-105"
              >
                <div className="mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-indigo-400"
                  />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                <p className="text-white/80">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Let's Build Something Great Together
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition transform hover:scale-105">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105">
              Our Approach
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;