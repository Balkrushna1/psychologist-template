import { Helmet } from "react-helmet";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Calendar, User } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Mental Health Blog | {siteConfig.name}</title>
      </Helmet>
      
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">Resources & Insights</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Articles, tips, and reflections to support your mental wellness journey between sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors" />
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                    Wellness
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      Dr. Rivers
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-foreground mb-4 hover:text-primary cursor-pointer transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {post.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  
                  <button className="text-primary font-semibold hover:text-accent transition-colors self-start">
                    Read Full Article →
                  </button>
                </div>
              </article>
            ))}
            
            {/* Placeholder posts to fill grid */}
            {[4, 5, 6].map((i) => (
              <article key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full opacity-70">
                <div className="h-56 bg-gray-200 animate-pulse" />
                <div className="p-8 flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-4" />
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4" />
                  <div className="h-4 bg-gray-200 rounded w-full mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
