import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  User, 
  MessageCircle 
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form submitted', formData);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 py-16 px-4">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto relative z-10">
        {/* Contact Header */}
        <section className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Have a project in mind? We're here to help you transform your digital vision into reality.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            
            <div className="flex items-center space-x-4 text-white/80">
              <MapPin className="text-indigo-400" size={24} />
              <div>
                <strong>Address</strong>
                <p>Vinayk Nagar, Kanpur ,U.P(208025)</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white/80">
              <Phone className="text-indigo-400" size={24} />
              <div>
                <strong>Phone</strong>
                <p>7348675182</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-white/80">
              <Mail className="text-indigo-400" size={24} />
              <div>
                <strong>Email</strong>
                <p>cawnpuriyacoders@gmail.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {['LinkedIn', 'Twitter', 'GitHub'].map((platform, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-white/70 hover:text-white transition"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={24} />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={24} />
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={24} />
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 pl-12 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <MessageCircle className="absolute left-4 top-4 transform text-white/50" size={24} />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
