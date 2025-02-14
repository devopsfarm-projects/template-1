"use client";
import React, { JSX, useEffect, useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// Define TypeScript interface for contact info
interface ContactInfo {
  icon: string;
  text: string;
}

interface ContactData {
  title: string;
  contactInfo: ContactInfo[];
}

// Map of icon names to JSX elements
const iconMap: Record<string, JSX.Element> = {
  FaMapMarkerAlt: <FaMapMarkerAlt className="text-blue-600 text-2xl" />,
  FaPhoneAlt: <FaPhoneAlt className="text-blue-600 text-2xl" />,
};

export default function ContactComponent() {
  const [contactData, setContactData] = useState<ContactData | null>(null);

  useEffect(() => {
    fetch("/data/contactData.json")
      .then((res) => res.json())
      .then((data: ContactData) => setContactData(data))
      .catch((error) => console.error("Error fetching Contact data:", error));
  }, []);

  if (!contactData) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-10 px-6 md:px-20">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        {contactData.title}
      </h1>

      {/* Contact Info Section */}
      <div className="p-8 rounded-lg">
        <div className="space-y-4 text-gray-800 text-lg">
          {contactData.contactInfo.map((info, index) => (
            <div key={index} className="flex items-center gap-4">
              {iconMap[info.icon] || <span className="text-red-600">⚠️ Unknown Icon</span>}
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
