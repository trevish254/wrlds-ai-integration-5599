import { ArrowLeft, CheckCircle, Clock, FileSearch, Settings, Cpu, Code, Truck, BarChart, Check, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const DevelopmentProcess = () => {
  const [activeProcess, setActiveProcess] = useState(1);
  const processRef = useRef<HTMLDivElement>(null);
  const processSectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Process component logic
  const processes = [{
    id: 1,
    title: "Discovery & Strategy",
    description: "We begin by understanding your business goals, target market, and growth opportunities to develop a comprehensive strategy for success.",
    steps: ["Business goals assessment", "Market research and analysis", "Competitive landscape evaluation", "Strategic roadmap development"]
  }, {
    id: 2,
    title: "Creative Development",
    description: "Our creative team develops compelling brand identities, visual designs, and content strategies that resonate with your target audience.",
    steps: ["Brand identity design", "Visual concept development", "Content strategy creation", "Creative asset production"]
  }, {
    id: 3,
    title: "Technical Implementation",
    description: "We build robust digital solutions using cutting-edge technology, ensuring scalability, security, and optimal performance.",
    steps: ["Technical architecture design", "Development and programming", "Quality assurance testing", "Performance optimization"]
  }, {
    id: 4,
    title: "Launch & Deployment",
    description: "We handle the complete launch process, from final testing to deployment, ensuring smooth market entry and user adoption.",
    steps: ["Pre-launch testing and validation", "Deployment and go-live support", "User training and onboarding", "Launch marketing coordination"]
  }, {
    id: 5,
    title: "Growth & Optimization",
    description: "We provide ongoing support, analytics, and optimization to ensure continued growth and maximum return on investment.",
    steps: ["Performance monitoring and analytics", "User feedback collection", "Continuous improvement implementation", "Growth strategy refinement"]
  }];

  useEffect(() => {
    processSectionsRef.current = processes.map((_, i) => processSectionsRef.current[i] || null);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        entries[0].target.classList.add('animate-fade-in');
        (entries[0].target as HTMLElement).style.opacity = '1';
        observer.unobserve(entries[0].target);
      }
    }, {
      threshold: 0.1
    });
    if (processRef.current) {
      observer.observe(processRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestSection = null;
      let closestDistance = Infinity;
      processSectionsRef.current.forEach((section, index) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(sectionCenter - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestSection = index;
        }
      });
      if (closestSection !== null) {
        setActiveProcess(closestSection + 1);
      }
    };
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <PageLayout>
      <SEO 
        title="Innovation Process - Aventis"
        description="Discover Aventis' structured innovation process that transforms ideas into successful ventures through strategic planning, creative development, and technical excellence."
        keywords={['aventis process', 'innovation methodology', 'business development', 'digital transformation process', 'creative development']}
      />
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="flex items-center text-gray-500 hover:text-gray-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">Our Innovation Process</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-12">
                Aventis has developed a comprehensive methodology that transforms ideas into successful ventures, 
                minimizing risk while maximizing innovation and impact across African markets.
              </p>
              
              {/* Innovation Process Section */}
              <div className="relative mt-12" ref={processRef} style={{
              opacity: 0
            }}>
                <div className="hidden md:block absolute top-0 left-1/2 w-0.5 h-full bg-gray-200 -translate-x-1/2"></div>
                
                <div className="space-y-10 relative">
                  {processes.map((process, index) => <div key={process.id} ref={el => processSectionsRef.current[index] = el} className={cn("relative flex flex-col md:flex-row md:items-center gap-6", index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right")}>
                      <div className="md:w-1/2">
                        <div className={cn("md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all duration-300", activeProcess === process.id ? "bg-gray-700 text-white scale-110" : "bg-white text-gray-700 border border-gray-300")} onClick={() => setActiveProcess(process.id)}>
                          <span className="font-bold">{process.id}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-2 mt-3 md:mt-0">{process.title}</h3>
                        <p className="text-gray-600 mb-3 text-sm">{process.description}</p>
                        
                        <button onClick={() => setActiveProcess(process.id)} className={cn("text-sm font-medium transition-colors", activeProcess === process.id ? "text-gray-700" : "text-gray-500 hover:text-gray-700")}>
                          {activeProcess === process.id ? "Currently Viewing" : "View Details"}
                        </button>
                      </div>
                      
                      <div className={cn("md:w-1/2 bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-all duration-300", activeProcess === process.id ? "opacity-100 translate-y-0 shadow-md border-gray-200" : "opacity-50 md:opacity-30 hover:opacity-70 cursor-pointer")} onClick={() => setActiveProcess(process.id)}>
                        <h4 className="font-semibold mb-3 text-gray-700">Key Activities:</h4>
                        <ul className="space-y-2">
                          {process.steps.map((step, stepIndex) => <li key={stepIndex} className="flex items-start">
                              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-2">
                                <Check className="w-3 h-3 text-gray-700" />
                              </span>
                              <span className="text-gray-700 text-sm text-left">{step}</span>
                            </li>)}
                        </ul>
                      </div>
                    </div>)}
                </div>
              </div>
              
              {/* Three Divisions Integration */}
              <div className="bg-gray-50 p-8 rounded-lg my-12 border border-gray-100">
                <h3 className="text-xl font-semibold mb-6">Integrated Division Approach</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <Code className="w-6 h-6 text-blue-600" />,
                      title: "Digital Solutions",
                      description: "Technology infrastructure and digital platforms that power your business growth."
                    },
                    {
                      icon: <Palette className="w-6 h-6 text-purple-600" />,
                      title: "Creative Media",
                      description: "Brand storytelling and visual experiences that connect with your audience."
                    },
                    {
                      icon: <Truck className="w-6 h-6 text-green-600" />,
                      title: "Ventures",
                      description: "Business development and product innovation that creates sustainable value."
                    }
                  ].map((division, i) => (
                    <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex items-center gap-2 mb-2">
                        {division.icon}
                        <h4 className="font-semibold">{division.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{division.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg my-12 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Our Innovation Principles</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Rapid iteration cycles with continuous feedback integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Transparent communication and collaborative partnerships</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Scalable architecture designed for African market conditions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Risk mitigation strategies built into every development phase</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2" />
                    <span>Focus on sustainable impact and community value creation</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link to="/tech-details" className="inline-flex items-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Explore Our Technology
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};

export default DevelopmentProcess;

// Helper icon component for later
const ArrowRight = ({
  className = "w-4 h-4"
}: {
  className?: string;
}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>;