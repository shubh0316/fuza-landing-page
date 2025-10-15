export default function Home() {
  return (
    <a 
      href="https://res.cloudinary.com/dtef9iz1l/video/upload/v1760536607/WhatsApp_Video_2025-10-14_at_10.48.58_AM_bfhndz.mp4" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed inset-0 w-screen h-screen overflow-hidden cursor-pointer block"
    >
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
        src="https://res.cloudinary.com/dtef9iz1l/video/upload/v1760536739/WhatsApp_Video_2025-10-14_at_10.49.28_AM_pnnlej.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="block md:hidden w-full h-full object-cover pointer-events-none"
      />
    </a>
  );
}
