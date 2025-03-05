
import React from 'react';

const FooterSection = () => {
  return (
    <footer className="py-8 px-6 bg-enchanted-purple/5">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">© 2024 Potla Keerthana. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://github.com/Potlakeerthana/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-enchanted-purple transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-enchanted-purple transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
