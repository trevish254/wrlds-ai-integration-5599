import { motion } from "framer-motion";
import { Palette, Gauge, Cpu, Smartphone, Code, Server, ArrowRight, Database, Wifi, Cloud, MonitorSmartphone, FileText, Truck, Users, Building2 } from 'lucide-react';

const ProductPlatform = () => {
  return (
    <div className="w-full relative">
      {/* Innovation Hub Title Section */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Innovation Hub</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-4xl">
          Aventis operates as an integrated ecosystem where Digital Solutions, Creative Media, and Ventures work together to transform ideas into impactful solutions that drive growth and innovation.
        </p>
      </motion.div>

      {/* Three Divisions Architecture - Three Column Layout for desktop, Vertical for mobile */}
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Digital Solutions Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <div className="bg-blue-100 border border-blue-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1 text-blue-800">Digital Solutions</h3>
            <p className="text-xs sm:text-sm text-center mb-4 text-blue-700">Technology & Innovation</p>
            
            <div className="space-y-3">
              {[
                { icon: <Code className="text-blue-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "Web Development" },
                { icon: <Smartphone className="text-blue-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "Mobile Apps" },
                { icon: <Cpu className="text-blue-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "AI Integration" },
                { icon: <Cloud className="text-blue-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "SaaS Platforms" },
                { icon: <Database className="text-blue-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "Digital Marketing" },
                { icon: <Server className="text-blue-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "Cloud Infrastructure" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 sm:p-4 flex items-center border border-blue-100">
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-blue-800 font-medium text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6 text-blue-700">
              Modernizing businesses through<br />technology and automation
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Mobile and Desktop have different appearance */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-gray-600 w-8 h-8" />
        </motion.div>
        
        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-gray-600 w-6 h-6 rotate-90" />
        </div>

        {/* Creative Media Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex-[1.5]"
        >
          <div className="bg-purple-100 border border-purple-200 rounded-xl p-4 sm:p-6">
            <div className="flex flex-col items-center mb-3 sm:mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-0 text-purple-800">Creative Media</h3>
              <p className="text-lg sm:text-xl font-medium text-center text-purple-700">Storytelling & Design</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                { icon: <Palette className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Branding" },
                { icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Advertising" },
                { icon: <MonitorSmartphone className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Photography" },
                { icon: <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Videography" },
                { icon: <Code className="w-4 h-4 sm:w-5 sm:h-5" />, name: "CGI & VFX" },
                { icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Events" },
                { icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Interior Design" },
                { icon: <Gauge className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Content Strategy" },
                { icon: <Wifi className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Social Media" },
                { icon: <Database className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Digital Assets" },
                { icon: <Cloud className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Creative Cloud" },
                { icon: <Server className="w-4 h-4 sm:w-5 sm:h-5" />, name: "Production" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center border border-purple-100">
                  <div className="mb-1 sm:mb-2 text-purple-700">{item.icon}</div>
                  <div className="text-[10px] sm:text-xs text-purple-800">{item.name}</div>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6 text-purple-700">
              Creating memorable experiences<br />and compelling brand stories
            </p>
          </div>
        </motion.div>

        {/* Flow Arrows - Desktop Only */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="text-gray-600 w-8 h-8" />
        </motion.div>
        
        {/* Mobile Flow Indicator - Only visible on mobile/tablet */}
        <div className="flex lg:hidden items-center justify-center my-2">
          <ArrowRight className="text-gray-600 w-6 h-6 rotate-90" />
        </div>

        {/* Ventures Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex-1"
        >
          <div className="bg-green-100 border border-green-200 rounded-xl p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-center mb-1 text-green-800">Ventures</h3>
            <p className="text-xs sm:text-sm text-center mb-4 text-green-700">Business Innovation</p>
            
            <div className="space-y-3">
              {[
                { icon: <Building2 className="text-green-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "Furniture & Carpentry" },
                { icon: <Palette className="text-green-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "Decor & Design" },
                { icon: <Truck className="text-green-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "Lifestyle Products" },
                { icon: <MonitorSmartphone className="text-green-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "Cyber Kiosks" },
                { icon: <Gauge className="text-green-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "AgriTech Platforms" },
                { icon: <Users className="text-green-700 w-4 h-4 sm:w-5 sm:h-5" />, text: "Business Development" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-3 sm:p-4 flex items-center border border-green-100">
                  <div className="mr-3 sm:mr-4 flex-shrink-0">{item.icon}</div>
                  <span className="text-green-800 font-medium text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xs sm:text-sm text-center mt-4 sm:mt-6 text-green-700">
              Solving everyday challenges<br />with scalable business solutions
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductPlatform;