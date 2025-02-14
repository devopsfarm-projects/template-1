import ContactComponent from "../components/contact/contact";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100">
        <section className="relative h-screen w-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/image/contactimg.jpeg')] bg-fixed bg-cover bg-center"
        />

        {/* Overlay to Improve Text Visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* Welcome Text */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Contact          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Empowering athletes with top-tier training programs.
          </p>
        </div>
      </section>
      <ContactComponent />
    </div>
  );
};

export default ContactPage;
