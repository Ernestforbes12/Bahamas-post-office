import { useState } from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ icon, title, description }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-48 cursor-pointer"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-white text-navy rounded-2xl p-6 shadow-lg flex flex-col justify-center"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-navy text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="text-4xl mb-3">{icon}</div>
          <h3 className="text-xl font-bold mb-4">{title}</h3>
          <button className="bg-teal text-white px-6 py-2 rounded-full font-semibold text-sm">
            Learn More
          </button>
        </div>

      </motion.div>
    </div>
  );
}

export default ServiceCard;