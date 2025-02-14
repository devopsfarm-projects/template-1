"use client";
import React, { useEffect, useState } from "react";

// Define TypeScript interfaces for WhyUs data
interface Quality {
  title: string;
  description: string;
}

interface Prospectus {
  title: string;
  fileUrl: string;
}

interface WhyUsData {
  title: string;
  qualities: Quality[];
  prospectus: Prospectus;
}

export default function WhyUs() {
  const [whyUsData, setWhyUsData] = useState<WhyUsData | null>(null);

  useEffect(() => {
    fetch("/data/whyUsData.json")
      .then((res) => res.json())
      .then((data: WhyUsData) => setWhyUsData(data))
      .catch((error) => console.error("Error fetching WhyUs data:", error));
  }, []);

  if (!whyUsData) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col justify-center items-center py-12 px-6 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 bg-yellow-300 px-4 py-2 rounded-md inline-block">
        {whyUsData.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whyUsData.qualities.map((quality, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold">{quality.title}</h3>
            <p className="text-gray-600">{quality.description}</p>
          </div>
        ))}
      </div>

      {/* Our Prospectus Button */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">{whyUsData.prospectus.title}</h3>
        <a
          href={whyUsData.prospectus.fileUrl}
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-lg shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Click Here for Prospectus
        </a>
      </div>
    </section>
  );
}
