import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-100 px-6 py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* Column 1: Website name and paragraph */}
        <div>
          <h1 className="text-2xl font-bold text-green-900">Mediservices</h1>
          <p className="mt-2 text-green-700">
            We provide reliable healthcare solutions to ensure your well-being
            and peace of mind.
          </p>
        </div>

        {/* Column 2: Navigation links */}
        <div>
          <h2 className="mb-2 text-lg font-semibold text-green-900">
            Navigate
          </h2>
          <ul className="space-y-2 text-green-700">
            <li>
              <a href="#" className="transition hover:text-green-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-green-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-green-900">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Support links */}
        <div>
          <h2 className="mb-2 text-lg font-semibold text-green-900">Help</h2>
          <ul className="space-y-2 text-green-700">
            <li>
              <a href="#" className="transition hover:text-green-900">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-green-900">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="transition hover:text-green-900">
                Chat Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="bg-gray-400" />
      </div>
    </footer>
  );
};

export default Footer;
