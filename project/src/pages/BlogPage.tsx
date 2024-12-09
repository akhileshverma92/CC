import React, { useState } from 'react';
import { 
  Clock, 
  User, 
  Tag, 
  Search 
} from 'lucide-react';

// Blog Post Type Definition
interface BlogPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  tags: string[];
  image: string;
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Sample Blog Posts
  const blogPosts: BlogPostProps[] = [
    {
      title: "The Future of Digital Transformation",
      excerpt: "Exploring emerging technologies and their impact on business strategy in 2024.",
      author: "Emily Rodriguez",
      date: "January 15, 2024",
      tags: ["Digital Strategy", "Technology"],
      image: "https://plus.unsplash.com/premium_vector-1732430119974-94608f45ea32?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGhlJTIwRnV0dXJlJTIwb2YlMjBEaWdpdGFsJTIwVHJhbnNmb3JtYXRpb258ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Sustainable Cloud Computing Practices",
      excerpt: "How businesses can reduce their carbon footprint through intelligent cloud solutions.",
      author: "Michael Chang",
      date: "February 3, 2024",
      tags: ["Cloud", "Sustainability"],
      image: "https://plus.unsplash.com/premium_vector-1720891749159-82b9b2a383cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fFN1c3RhaW5hYmxlJTIwQ2xvdWQlMjBDb21wdXRpbmclMjBQcmFjdGljZXN8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "AI and Machine Learning in Enterprise Solutions",
      excerpt: "Leveraging artificial intelligence to drive innovation and efficiency.",
      author: "Sarah Thompson",
      date: "March 22, 2024",
      tags: ["AI", "Machine Learning"],
      image: "https://plus.unsplash.com/premium_vector-1725420017615-cc4d9e25e378?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QUklMjBhbmQlMjBNYWNoaW5lJTIwTGVhcm5pbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
      title: "Cybersecurity Trends for Modern Businesses",
      excerpt: "Critical strategies to protect your digital assets in an evolving threat landscape.",
      author: "David Kim",
      date: "April 10, 2024",
      tags: ["Security", "Cybersecurity"],
      image: "https://plus.unsplash.com/premium_vector-1726616396026-569847fe9dcc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEN5YmVyc2VjdXJpdHl8ZW58MHx8MHx8fDA%3D"
    }
  ];

  // Filtered blog posts based on search
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 py-16 px-4">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="container mx-auto relative z-10">
        {/* Blog Header */}
        <section className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & Perspectives
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Dive into our latest thoughts on technology, innovation, and digital strategy.
          </p>
        </section>

        {/* Search and Filter */}
        <div className="mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50" size={24} />
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-xl font-bold">{post.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-white/80 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-white/70 text-sm">
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="mt-4 flex space-x-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-indigo-600/20 text-indigo-300 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Stay Informed, Stay Ahead
          </h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold hover:bg-indigo-100 transition transform hover:scale-105">
              Subscribe to Blog
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition transform hover:scale-105">
              View All Posts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;