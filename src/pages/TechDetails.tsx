import { ArrowLeft, ArrowRight, FileText, Code, Cpu, Palette, Truck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import ProductPlatform from '@/components/ProductPlatform';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const TechDetails = () => {
  const isMobile = useIsMobile();
  const [progressValue, setProgressValue] = useState(0);

  // Animate progress bar on component mount
  useEffect(() => {
    const timer = setTimeout(() => setProgressValue(100), 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <PageLayout>
      <SEO 
        title="Technology & Innovation - Aventis"
        description="Discover Aventis' innovative approach to digital solutions, creative media, and ventures that drive growth across African businesses."
        keywords={['aventis technology', 'digital solutions', 'creative media technology', 'innovation process', 'african tech']}
      />
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <motion.h1 initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-3xl sm:text-4xl font-bold mb-6">
              Technology & Innovation
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} className="text-base sm:text-lg text-gray-600 mb-12">
                Explore how Aventis combines cutting-edge technology with creative innovation to deliver comprehensive solutions across our three core divisions.
              </motion.p>
              
              {/* Innovation Hub Architecture Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <FileText className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Innovation Hub Architecture</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  Aventis operates as an integrated ecosystem where Digital Solutions, Creative Media, and Ventures 
                  work in harmony. Our multi-division approach ensures comprehensive support from concept to market success.
                </p>

                {/* Three Divisions Showcase */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[
                    {
                      icon: <Code className="w-8 h-8 text-white" />,
                      title: "Digital Solutions",
                      description: "Web & app development, AI integration, SaaS platforms, and digital marketing that modernize businesses.",
                      color: "bg-blue-600"
                    },
                    {
                      icon: <Palette className="w-8 h-8 text-white" />,
                      title: "Creative Media",
                      description: "Branding, photography, videography, CGI & VFX, events, and interior design that tell compelling stories.",
                      color: "bg-purple-600"
                    },
                    {
                      icon: <Truck className="w-8 h-8 text-white" />,
                      title: "Ventures",
                      description: "Furniture, decor, lifestyle products, cyber kiosks, and AgriTech platforms solving real challenges.",
                      color: "bg-green-600"
                    }
                  ].map((division, i) => (
                    <Card key={i} className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all">
                      <CardContent className="p-6">
                        <div className={`w-16 h-16 ${division.color} rounded-full flex items-center justify-center mb-4`}>
                          {division.icon}
                        </div>
                        <h3 className="font-bold text-lg mb-2">{division.title}</h3>
                        <p className="text-gray-600 text-sm">{division.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
              
              {/* Our Innovation Approach Section */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }}>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-gray-700" />
                  <h2 className="text-2xl font-bold">Our Innovation Approach</h2>
                </div>
                
                <p className="text-gray-600 mb-8 text-base max-w-3xl">
                  At Aventis, we've developed a systematic approach to innovation that combines strategic thinking, 
                  creative execution, and sustainable business development to ensure every project delivers maximum impact.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                  {[{
                  title: "Discovery & Strategy",
                  icon: <Cpu className="w-5 h-5 text-gray-700" />,
                  description: "We begin with comprehensive market research and strategic planning to identify the best opportunities for growth and innovation."
                }, {
                  title: "Creative Development",
                  icon: <Palette className="w-5 h-5 text-gray-700" />,
                  description: "Our creative teams develop compelling brand stories and visual identities that resonate with target audiences."
                }, {
                  title: "Technical Implementation",
                  icon: <Code className="w-5 h-5 text-gray-700" />,
                  description: "We build robust, scalable solutions using cutting-edge technology and best practices for long-term success."
                }].map((phase, i) => <motion.div key={phase.title} initial={{
                  opacity: 0,
                  y: 10
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  duration: 0.4,
                  delay: 0.3 + i * 0.1
                }} className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        {phase.icon}
                        <h3 className="font-semibold text-lg">{phase.title}</h3>
                      </div>
                      <p className="text-gray-600 text-base">{phase.description}</p>
                    </motion.div>)}
                </div>

                {/* Innovation Principles */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-gray-700" />
                    Innovation Principles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Africa-first approach with global standards",
                      "Sustainable and scalable solution design",
                      "User-centered experience development",
                      "Continuous iteration and improvement",
                      "Cross-division collaboration and synergy",
                      "Impact measurement and optimization"
                    ].map((principle, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                        <span className="text-gray-700">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/development-process" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explore Our Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default TechDetails;