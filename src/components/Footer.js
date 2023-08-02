import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
    <div className="container mx-auto text-center flex justify-center items-center">
      <span className="text-sm">© {currentYear} all rights reserved</span>
      <a href="/terms" className="px-4 text-sm hover:underline">T&C</a>
      <a href="/privacy" className="px-4 text-sm hover:underline">Privacy Policy</a>
      <a href="/contact" className="px-4 text-sm hover:underline">Contact Us</a>
    </div>
  </footer>
  );
};

export default Footer;
