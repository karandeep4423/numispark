import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-300 text-lg xl:text-xl rounded-t-3xl">
        <div className="-mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly">
          {/* Brand Section */}
          <div className="flex flex-col items-center space-y-4 pt-10 w-64">
            <Link
              className="font-bold text-gray-800 text-xl p-2.5 border-2 border-gray-800"
              href="/"
            >
              Digital Agence
            </Link>
            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/privatehonors/profilecard/?igsh=MTkyeDVlZ3lvMmlhNw=="
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 text-gray-800 hover:text-gray-400 transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/share/14GyLWh1t1/?mibextid=LQQJ4d"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 text-gray-800 hover:text-gray-400 transition-colors" />
              </Link>
              <Link href="/" target="_blank" aria-label="WhatsApp">
                <MessageCircle className="w-8 h-8 text-gray-800 hover:text-gray-400 transition-colors" />
              </Link>
              <a href="mailto:contact@privatehonors.com" aria-label="Email">
                <Mail className="w-8 h-8 text-gray-800 hover:text-gray-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col text-gray-800 font-medium  space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">Navigation</h2>
            <Link href="/">Home</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/contact-us">Contact us</Link>
          </div>

          {/* Services Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              Development Services
            </h2>
            <Link href="/website-development">Website Development</Link>
            <Link href="/mobile-app-development">Mobile App Development</Link>
            <Link href="/ecommerce-development">Ecommerce Development</Link>
            <Link href="/saas-development">SaaS Development</Link>
            <Link href="/ai-and-automation">AI and Automation</Link>
          </div>

          {/* Design Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">Design Services</h2>
            <Link href="/website-&-mobile-app-design">
              Website & Mobile App Design
            </Link>
            <Link href="/social-media-post-&-logo-design">
              Social Media Post & Logo Design
            </Link>
          </div>

          {/* Seo Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-bold text-gray-800">
              Digital Marketing
            </h2>
            <Link href="/seo">SEO</Link>
            <Link href="/social-media-marketing">Social Media Marketing</Link>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col text-gray-800 font-medium space-y-4 pt-10">
            <h2 className="text-xl text-gray-800 font-bold">Contact us</h2>
            <p>Paris, France</p>
            <a href="mailto:contact@privatehonors.com">
              contact@privatehonors.com
            </a>
            <a href="tel:+33624610775">+33624610775</a>
          </div>
        </div>
        <p className="text-center text-gray-800 py-6">
          Copyright ©2024 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
