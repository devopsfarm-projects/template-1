"use client";
import React, { useEffect, useState } from "react";

// Define TypeScript interface for aboutData
interface AboutData {
  title: string;
  image: string;
  description: string[];
  coreValues: {
    title: string;
    values: string[];
  };
  mission: {
    title: string;
    description: string;
  };
}

export default function AboutComponent() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    fetch("/data/aboutData.json")
      .then((res) => res.json())
      .then((data: AboutData) => setAboutData(data))
      .catch((error) => console.error("Error fetching About data:", error));
  }, []);

  if (!aboutData) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-10 px-6 md:px-20">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">{aboutData.title}</h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-10">
        
        {/* Academy Logo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={aboutData.image} alt="Innovative Sports Academy Logo" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>

        {/* About Content */}
        <div className="w-full md:w-1/2">
          {aboutData.description.map((desc: string, index: number) => (
            <p key={index} className="text-lg text-gray-700 mb-6">{desc}</p>
          ))}

          {/* Core Values */}
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">{aboutData.coreValues.title}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {aboutData.coreValues.values.map((value: string, index: number) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* Mission Section */}
      <div className="w-full max-w-6xl mt-16">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">{aboutData.mission.title}</h2>
        <p className="text-lg text-gray-700">{aboutData.mission.description}</p>
      </div>

    </div>
  );
}
