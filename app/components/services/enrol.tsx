"use client"
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
  const [showForm, setShowForm] = useState(false);
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  // Static Course Data
  const courses: Course[] = [
    {
      id: 1,
      title: "Football Training",
      description: "Join our expert-led football training program to enhance your skills and fitness.",
      image: "/images/football-training.jpg",
    },
    {
      id: 2,
      title: "Basketball Camp",
      description: "A specialized training camp for aspiring basketball players of all levels.",
      image: "/images/basketball-camp.jpg",
    },
    {
      id: 3,
      title: "Cricket Academy",
      description: "Comprehensive cricket coaching program for all age groups.",
      image: "/images/cricket-academy.jpg",
    },
  ];

  // Handle form input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle payment screenshot upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPaymentScreenshot(e.target.files[0]);
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Enroll in a Program
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
              <p className="text-gray-700 mt-2">{course.description}</p>
              <button
                onClick={() => setSelectedCourse(course)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Payment QR Modal */}
      {selectedCourse && !showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={() => setSelectedCourse(null)}
              className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-gray-900">{selectedCourse.title}</h3>
            <p className="text-gray-700 mt-2">Scan the QR code below to make a payment:</p>
            <div className="flex justify-center my-4">
              <Image
                src="/images/payment-qr.png" // Replace with actual QR code image path
                alt="Payment QR Code"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
            <button
              onClick={() => setShowForm(true)}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-green-600 transition"
            >
              Successful Payment
            </button>
          </div>
        </div>
      )}

      {/* Payment Confirmation Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
            <button
              onClick={() => {
                setShowForm(false);
                setSelectedCourse(null);
              }}
              className="absolute top-2 right-2 text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-gray-900">Payment Confirmation</h3>
            <p className="text-gray-700 mt-2">Please upload your payment screenshot and enter your details.</p>

            <form className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                placeholder="Enter your name"
                required
              />

              <label className="block text-gray-700 text-sm font-bold mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                placeholder="Enter your phone number"
                required
              />

              <label className="block text-gray-700 text-sm font-bold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                placeholder="Enter your email"
                required
              />

              <label className="block text-gray-700 text-sm font-bold mb-1">Upload Payment Screenshot</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                required
              />

              {/* Preview Uploaded Image */}
              {paymentScreenshot && (
                <div className="mt-2 flex justify-center">
                  <Image
                    src={URL.createObjectURL(paymentScreenshot)}
                    alt="Uploaded Payment Screenshot"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
