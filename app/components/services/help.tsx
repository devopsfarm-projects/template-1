"use client";
import React, { useEffect, useState } from "react";

// Define TypeScript interfaces for help data
interface HelpSection {
  title: string;
  items: string[];
}

interface HelpData {
  title: string;
  sections: HelpSection[];
}

export default function HelpComponent() {
  const [helpData, setHelpData] = useState<HelpData | null>(null);

  useEffect(() => {
    fetch("/data/helpData.json")
      .then((res) => res.json())
      .then((data: HelpData) => setHelpData(data))
      .catch((error) => console.error("Error fetching Help data:", error));
  }, []);

  if (!helpData) {
    return <div className="text-center py-12">Loading...</div>;
  }

  return (
    <div className="w-full py-16 bg-white flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        {helpData.title}
      </h2>
      <div className="w-11/12 max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {helpData.sections.map((section, index) => (
          <div key={index} className="bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {section.title}
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
