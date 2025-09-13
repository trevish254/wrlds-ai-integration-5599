import PageLayout from '@/components/PageLayout';
import { ArrowLeft, Mail, Linkedin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import SEO from '@/components/SEO';

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PageLayout showContact={false}>
        <SEO 
          title="Careers - Join Aventis"
          description="Join Aventis, an African innovation hub. We're looking for passionate innovators to help build digital solutions, creative media, and ventures."
          keywords={['aventis careers', 'jobs', 'african innovation hub jobs', 'digital solutions careers', 'creative media jobs']}
        />
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div className="max-w-6xl mx-auto">
              <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <motion.h1 
                initial={{ opacity: 0, y: -10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl font-bold mb-6"
              >
                Join Our Team
              </motion.h1>
              
              <div className="prose prose-lg max-w-none">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  transition={{ duration: 0.5, delay: 0.2 }} 
                  className="text-xl text-gray-600 mb-4"
                >
                  We're looking for passionate innovators to help us build the future of African business innovation.
                </motion.p>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-12"
                >
                  Join Aventis and be part of a team that's transforming ideas into impactful solutions across Digital Solutions, Creative Media, and Ventures.
                </motion.p>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <h2 className="text-3xl font-bold mb-6">Why Join Aventis?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {[
                      {
                        title: "Innovation Impact",
                        description: "Work on groundbreaking projects that drive real change across African markets and communities."
                      },
                      {
                        title: "Multi-Division Growth",
                        description: "Develop skills across technology, creativity, and business development in our integrated approach."
                      },
                      {
                        title: "African Focus",
                        description: "Help build solutions specifically designed for African businesses and market conditions."
                      }
                    ].map((benefit, i) => (
                      <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-100 h-full">
                        <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Current Opportunities */}
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mb-12">
                    <h3 className="font-bold text-xl mb-6">Open Opportunities</h3>
                    <div className="space-y-4">
                      {[
                        {
                          role: "Digital Solutions Developer",
                          division: "Digital Solutions",
                          description: "Full-stack development, AI integration, and SaaS platform development for African businesses.",
                          type: "Full-time"
                        },
                        {
                          role: "Creative Media Specialist",
                          division: "Creative Media",
                          description: "Branding, content creation, photography, videography, and creative campaign development.",
                          type: "Full-time"
                        },
                        {
                          role: "Business Development Associate",
                          division: "Ventures",
                          description: "Market research, business model development, and venture creation across various industries.",
                          type: "Full-time"
                        },
                        {
                          role: "Innovation Intern",
                          division: "All Divisions",
                          description: "Cross-divisional experience in technology, creativity, and business development.",
                          type: "Internship"
                        }
                      ].map((job, i) => (
                        <div key={i} className="border border-gray-100 rounded-lg p-6 hover:bg-gray-50 transition-colors">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{job.role}</h4>
                              <p className="text-gray-600 text-sm">{job.division}</p>
                              <p className="text-gray-700 mt-2">{job.description}</p>
                            </div>
                            <div className="mt-3 md:mt-0 md:ml-4">
                              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm mt-12">
                    <h3 className="font-bold text-xl mb-6">Contact Our COO</h3>
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex flex-col items-center text-center">
                        <img 
                          src="/lovable-uploads/a9bb9110-964a-43b0-a5ab-7162140cd133.png"
                          alt="Love Anderberg"
                          className="w-32 h-32 rounded-full mb-4 object-cover filter grayscale"
                        />
                        <h3 className="text-xl font-bold text-gray-900">Love Anderberg</h3>
                        <p className="text-gray-600 mb-4">COO</p>
                        <div className="flex flex-col space-y-3">
                          <a href="mailto:love@aventis.com" className="flex items-center text-gray-700 hover:text-blue-600">
                            <Mail className="w-5 h-5 mr-2" />
                            love@aventis.com
                          </a>
                          <a 
                            href="https://www.linkedin.com/in/love-anderberg-67549a174/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-700 hover:text-blue-600"
                          >
                            <Linkedin className="w-5 h-5 mr-2" />
                            LinkedIn Profile
                          </a>
                          <a href="tel:+46760149508" className="flex items-center text-gray-700 hover:text-blue-600">
                            <Phone className="w-5 h-5 mr-2" />
                            076-014 95 08
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </div>
  );
};

export default Careers;