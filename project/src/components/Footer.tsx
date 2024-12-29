import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-semibold">Portfolio</p>
            <p className="text-gray-400 mt-2">© 2024 All rights reserved.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Coder-g4u?tab=repositories" className="hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/gautam-kumar-392830224/" className="hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:gautamkumarkiran@gmail.com" className="hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;