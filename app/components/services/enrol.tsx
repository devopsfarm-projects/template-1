// pages/enrol.js

"use client";
import { useState } from "react";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function Enrol() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const courses: Course[] = [
    { id: 1, title: "Football Training", description: "Enhance your football skills.", image: "/images/football-training.jpg" },
    { id: 2, title: "Basketball Camp", description: "Aspiring basketball training.", image: "/images/basketball-camp.jpg" },
    { id: 3, title: "Cricket Academy", description: "Comprehensive cricket coaching.", image: "/images/cricket-academy.jpg" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPaymentScreenshot(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('course', selectedCourse?.title || '');
    if (paymentScreenshot) {
      formDataToSend.append('paymentScreenshot', paymentScreenshot);
    }

    try {
      const response = await fetch('/api/enroll', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        alert('Enrollment successful!');
        setFormData({ name: '', phone: '', email: '' });
        setPaymentScreenshot(null);
        setSelectedCourse(null);
      } else {
        alert('Enrollment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Enroll in a Program</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image src={course.image} alt={course.title} width={300} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
              <p className="text-gray-700 mt-2">{course.description}</p>
              <button onClick={() => setSelectedCourse(course)} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Enroll in {selectedCourse.title}</h3>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" className="block w-full mb-4 p-2 border rounded" />
          <input type="text" name="phone no" value={formData.phone} onChange={handleInputChange} required placeholder="Your N" className="block w-full mb-4 p-2 border rounded" />
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder="Your Email" className="block w-full mb-4 p-2 border rounded" />
          <input type="file" onChange={handleFileChange} required className="block w-full mb-4" />
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
        </form>
      )}
    </section>
  );
}
