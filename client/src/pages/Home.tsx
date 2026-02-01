import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { FaQuoteLeft } from "react-icons/fa";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Helmet>
        <title>{siteConfig.name} | {siteConfig.tagline}</title>
        <meta name="description" content={siteConfig.description} />
      </Helmet>

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/70 z-10" />
          {/* Gentle meadow sunrise */}
          <img 
            src={siteConfig.hero.image} 
            alt="Calming nature" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-foreground mb-6 leading-tight">
              {siteConfig.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              {siteConfig.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all shadow-lg shadow-primary/25"
              >
                {siteConfig.hero.cta}
              </a>
              <a 
                href="#about" 
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-foreground border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
                {/* Professional portrait */}
                <img 
                  src={siteConfig.about.image} 
                  alt={siteConfig.about.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-0" />
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-0" />
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">About Me</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">{siteConfig.about.title}</h2>
              <h3 className="text-xl font-semibold text-primary mb-4">{siteConfig.about.name}, {siteConfig.about.role}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {siteConfig.about.bio}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Licensed Psychologist', '15+ Years Experience', 'Trauma-Informed', 'Holistic Approach'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-foreground/80 font-medium">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">My Services</span>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">Therapeutic Approaches</h2>
            <p className="text-lg text-muted-foreground">
              Everyone's journey is unique. I offer a range of evidence-based therapies tailored to meet you where you are.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {siteConfig.services.map((service, idx) => (
              <motion.div 
                key={idx}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 lg:py-32 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">Your Path to Healing</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-primary/20 -z-10 mx-16" />
            
            {siteConfig.howItWorks.map((step) => (
              <div key={step.step} className="text-center relative">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-2xl font-bold text-primary shadow-md border-4 border-secondary/20 mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">Stories of Change</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Hearing from others who have walked this path can be inspiring. Here are a few words from my clients.
              </p>
              <div className="flex gap-2 text-yellow-400">
                {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
                <span className="text-muted-foreground ml-2 text-sm">(5.0/5 based on 48 reviews)</span>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {siteConfig.testimonials.map((t, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-muted/30 p-8 rounded-2xl relative"
                >
                  <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
                  <p className="text-foreground/80 italic mb-6 leading-relaxed">"{t.text}"</p>
                  <div className="font-bold text-primary">— {t.author}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES PREVIEW */}
      <section id="resources" className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Resources</span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Latest from the Blog</h2>
            </div>
            <a href="/blog" className="hidden md:flex items-center text-primary font-semibold hover:text-primary/80 transition-colors mt-4 md:mt-0">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <a href="/blog" key={post.id} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-accent font-medium mb-2">{post.date}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <a href="/blog" className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
              View all articles <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 lg:py-32 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-accent font-bold tracking-wider text-sm uppercase mb-2 block">Get in Touch</span>
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mb-6">Start Your Journey Today</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Taking the first step is often the hardest. I'm here to support you. 
                Whether you have questions or are ready to schedule your first session, 
                please reach out.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Visit Us</h4>
                    <p className="text-muted-foreground">{siteConfig.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Call Us</h4>
                    <p className="text-muted-foreground">{siteConfig.phone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-full shadow-sm text-primary">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">Email Us</h4>
                    <p className="text-muted-foreground">{siteConfig.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
