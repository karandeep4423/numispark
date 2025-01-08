import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail,MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-800 text-lg xl:text-xl rounded-t-3xl">
        <div className="-mt-4 max-w-screen-xl m-auto flex flex-wrap space-x-5 px-5 justify-evenly">
          {/* Brand Section */}
          <div className="flex flex-col items-center space-y-4 pt-10 w-64">
            <Link className="font-bold text-white text-xl p-2.5 border-2 " href="/">
              Digital Agence
            </Link>
            {/* Social Icons */}
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/privatehonors/profilecard/?igsh=MTkyeDVlZ3lvMmlhNw=="
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
              </Link>
              <Link
                href="https://www.facebook.com/share/14GyLWh1t1/?mibextid=LQQJ4d"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
              </Link>
              <Link
                href="/"
                target="_blank"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
              </Link>
              <a
                href="mailto:contact@privatehonors.com"
                aria-label="Email"
              >
                <Mail className="w-8 h-8 text-white hover:text-gray-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-medium text-white">Navigation</h2>
            <Link href="/">Home</Link>
            <Link href="/about-us">About us</Link>
            <Link href="/contact-us">Contact us</Link>
          </div>

          {/* Services Section */}
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-medium text-white">Services</h2>
            <Link target="_blank" href="https://www.expediataap.fr/taap/signin">
              Vols
            </Link>
            <Link target="_blank" href="https://www.expediataap.fr/taap/signin">
              Attraction
            </Link>
            <Link target="_blank" href="https://www.expediataap.fr/taap/signin">
              Location de voiture
            </Link>
            <Link target="_blank" href="https://www.expediataap.fr/taap/signin">
              Hotels
            </Link>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h2 className="text-xl font-medium text-white">Legal</h2>
            <Link href="/terms-&-conditions">Terms & Conditions</Link>
            <Link href="/faq">FAQs</Link>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col text-gray-300 font-medium space-y-4 pt-10">
            <h2 className="text-xl text-white font-medium">Contact us</h2>
            <p>Paris, France</p>
            <a href="mailto:contact@privatehonors.com">
              contact@privatehonors.com
            </a>
            <a href="tel:+33624610775">+33624610775</a>
          </div>
        </div>
        <p className="text-center text-gray-300 py-6">
          Copyright ©2024 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
