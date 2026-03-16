import { motion } from 'framer-motion';
import BahamasGlobe from './BahamasGlobe';

function Hero() {
  return (
    <section className="h-screen flex items-center bg-navy text-white relative overflow-hidden px-8">

      {/* Globe - hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute right-0 top-0 h-full w-1/2">
        <BahamasGlobe />
      </div>

      {/* Globe as background on mobile only */}
      <div className="md:hidden absolute inset-0 opacity-30">
        <BahamasGlobe />
      </div>

      
      <motion.img
       src="/post-logo.webp"
       alt="contact"
       className="absolute left-8 top-36 z-20 cursor-pointer h-16 w-auto opacity-70"
       animate={{ y: [-15, 15, -15] }}
       transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
       onClick={() => {
       document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
     }}
     title="Get in touch!"
/>
      {/* Left Side Content */}
      <div className="relative z-10 max-w-xl">
        <motion.h1
         className="text-4xl md:text-5xl font-bold"
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8 }}
>
  Delivering The Bahamas, One Package At a Time
</motion.h1>

        <motion.p
          className="mt-4 text-xl text-teal-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fast. Reliable. Trusted.
        </motion.p>

        <motion.div
          className="mt-8 flex items-center bg-white rounded-full px-4 py-3 w-full max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <input
            type="text"
            placeholder="Enter tracking number..."
            className="flex-1 outline-none text-navy px-2 transition-all duration-300"
            onFocus={(e) => {
              e.target.parentElement.style.boxShadow = '0 0 20px rgba(0, 191, 165, 0.8)';
              e.target.parentElement.style.transition = 'box-shadow 0.3s ease';
            }}
            onBlur={(e) => {
              e.target.parentElement.style.boxShadow = 'none';
            }}
          />
          <button className="bg-teal text-white px-6 py-2 rounded-full font-semibold">
            Track
          </button>
        </motion.div>
      </div>

    </section>
  );
}

export default Hero;