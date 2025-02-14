// components/Header.tsx
"use client"
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-gray-800 text-white shadow-md">
      <div className="relative px-6 inset-0">
        <Image 
          src="/image/INBIT-removebg-preview.png" 
          alt="Header Background"
          height={75}
          width={75} 
          objectFit="cover"
          priority
        />
      </div>

      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link href="/">
           Innovative Sports Academy
          </Link>
        </div>
        <nav className="flex space-x-6 text-gray-800 text-lg">
      <Link href="/" className="text-white hover:text-yellow-400 transition duration-300">
        Home
      </Link>
      <Link href="/services" className="text-white hover:text-yellow-400 transition duration-300">
        Services
      </Link>
      <Link href="/about" className="text-white hover:text-yellow-400 transition duration-300">
        About
      </Link>
      <Link href="/contact" className="text-white hover:text-yellow-400 transition duration-300">
        Contact
      </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
