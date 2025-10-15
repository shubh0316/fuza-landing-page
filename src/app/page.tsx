import Image from "next/image";
import logo from "@/assets/logo.png";
import emailIcon from "@/assets/email.png";
import xIcon from "@/assets/x.png";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Desktop video */}
      <video 
        src="https://res.cloudinary.com/dtef9iz1l/video/upload/v1760547939/202510051033_2_-2_srnn8r.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block w-full h-full object-cover pointer-events-none"
      />
      
      {/* Mobile video */}
      <video 
        src="https://res.cloudinary.com/dtef9iz1l/video/upload/v1760547939/202510051033_2_-2_srnn8r.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden w-full h-full object-cover pointer-events-none"
      />

      {/* Overlay to reduce brightness */}
      <div className="absolute inset-0 bg-gray-900/30 pointer-events-none" />

      {/* Desktop: centered logo */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
        <Image 
          src={logo} 
          alt="Logo" 
          className="w-72 h-auto md:w-[36rem]"
          priority
        />
      </div>

      {/* Desktop: icons bottom-right */}
      <div className="hidden md:flex absolute bottom-0 right-0 z-10 pointer-events-auto p-6">
        <div className="flex gap-4">
          <a
            href="mailto:hello@fuza.ai"
            aria-label="Email Fuza"
            className="transition-opacity hover:opacity-80"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image src={emailIcon} alt="Email Fuza" className="w-16 h-16" />
          </a>
          <a
            href="https://x.com/fuzabets"
            aria-label="Fuza on X"
            className="transition-opacity hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={xIcon} alt="Fuza on X" className="w-16 h-16" />
          </a>
        </div>
      </div>

      {/* Mobile: stack logo with icons below */}
      <div className="flex md:hidden absolute inset-0 flex-col items-center justify-center gap-6 z-10 pointer-events-auto px-6">
        <Image 
          src={logo} 
          alt="Logo" 
          className="w-80 h-auto"
          priority
        />
        <div className="flex items-center justify-center gap-3">
          <a
            href="mailto:hello@fuza.ai"
            aria-label="Email Fuza"
            className="transition-opacity hover:opacity-80"
            target="_self"
            rel="noopener noreferrer"
          >
            <Image src={emailIcon} alt="Email Fuza" className="w-14 h-14" />
          </a>
          <a
            href="https://x.com/fuzabets"
            aria-label="Fuza on X"
            className="transition-opacity hover:opacity-80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={xIcon} alt="Fuza on X" className="w-14 h-14" />
          </a>
        </div>
      </div>
    </div>
  );
}
