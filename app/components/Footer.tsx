"use client";
import React, { useEffect, useState } from "react";

// Define TypeScript interfaces for footer data
interface FooterData {
  contact: {
    title: string;
    phoneNumbers: string[];
    email: string;
  };
  logo: {
    src: string;
    alt: string;
  };
  address: {
    title: string;
    lines: string[];
  };
  bottomText: string;
}

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    fetch("/data/footerData.json")
      .then((res) => res.json())
      .then((data: FooterData) => setFooterData(data))
      .catch((error) => console.error("Error fetching Footer data:", error));
  }, []);

  if (!footerData) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <footer className="bg-[#14213D] text-white py-10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        
        {/* Contact Section */}
        <div className="md:w-1/3 text-center md:text-left">
          <h3 className="text-lg font-bold text-yellow-400">{footerData.contact.title}</h3>
          {footerData.contact.phoneNumbers.map((number, index) => (
            <p key={index} className="mt-2">{`Mobile - ${number}`}</p>
          ))}
          <p>
            Email -{" "}
            <a href={`mailto:${footerData.contact.email}`} className="underline text-yellow-300">
              {footerData.contact.email}
            </a>
          </p>
        </div>

        {/* Logo Section */}
        <div className="md:w-1/3 flex justify-center my-6 md:my-0">
          <img
            src={footerData.logo.src}
            alt={footerData.logo.alt}
            className="w-48"
          />
        </div>

        {/* Address Section */}
        <div className="md:w-1/3 text-center md:text-right">
          <h3 className="text-lg font-bold text-yellow-400">{footerData.address.title}</h3>
          {footerData.address.lines.map((line, index) => (
            <p key={index} className="mt-2">{line}</p>
          ))}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-400 mt-6 border-t border-gray-600 pt-4">
        {footerData.bottomText}
      </div>
    </footer>
  );
}
