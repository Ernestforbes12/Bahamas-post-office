import { motion } from 'framer-motion';
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="bg-white py-16 px-6">
      <motion.h1
        className="text-4xl font-bold text-navy text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { icon: "📬", title: "General Delivery", description: "Mail services for those without a P.O. Box" },
          { icon: "📦", title: "Post Office Box Rental", description: "Annual rentals available across New Providence" },
          { icon: "✈️", title: "International Air Parcel", description: "Send parcels internationally via air" },
          { icon: "📝", title: "Registered Mail", description: "Secure, tracked mail delivery" },
          { icon: "🚀", title: "Express Mail Service", description: "Fast delivery with international tracking" },
          { icon: "💵", title: "Domestic Money Order", description: "Send money across the Family Islands" },
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;