import AboutUs from "./components/Aboutus";
import WhyUs from "./components/Whyus";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen w-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/image/homeImg.jpg')] bg-fixed bg-cover bg-center"
        />

        {/* Overlay to Improve Text Visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Welcome Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Innovative Sports Academy
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
          Innovation | Excellence | Integrity | Passion
          </p>
        </div>
      </section>

      {/* Other Sections */}
      <AboutUs />
      <WhyUs />
    </main>
  );
}
