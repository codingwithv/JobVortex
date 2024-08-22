import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Company Name */}
        <div className="flex items-center justify-start md:w-1/3">
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Vortex</span>
          </h1>
        </div>

        {/* Copyright */}
        <div className="flex justify-center md:w-1/3">
          <p>
            &copy; {new Date().getFullYear()} JobVortex. All Rights Reserved.
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-end space-x-6 md:w-1/3">
          <Link to="https://www.facebook.com" target="_blank">
            <FaFacebookF className="hover:text-blue-600 transition-colors" />
          </Link>
          <Link to="https://www.twitter.com" target="_blank">
            <FaTwitter className="hover:text-blue-400 transition-colors" />
          </Link>
          <Link to="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn className="hover:text-blue-700 transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
