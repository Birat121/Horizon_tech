import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-2 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Section 1: About */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-2 hover:text-gray-300">About Us</h2>
            <p className="text-gray-400 text-sm">
              Horizon Pro provides software solutions for Inventory, Accounting, Finance/Co-operatives, Import/Export, Hotels, Automobile, Manufacturing, and more.
            </p>
          </div>

          {/* Section 2: Contact */}
          <div className="flex-1">
            <h2 className="text-lg font-bold mb-2 hover:text-gray-300">Contact Us</h2>
            <address className="not-italic text-gray-400 text-sm">
              <p>Email: <a href="mailto:horizonpro@gmail.com" className="hover:underline">horizonpro@gmail.com</a></p>
              <p>Phone: <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a></p>
              <p>Head Office: Jawalakhel-14, Lalitpur</p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-4 text-center border-t border-gray-700 pt-2">
          <p className="text-gray-100 text-sm">&copy; {new Date().getFullYear()} Horizon Pro. All Rights Reserved to Horizon Technology Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
