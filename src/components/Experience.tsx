import { motion } from "motion/react";

export default function Experience() {
  const images = [
    "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section
      id="experience"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
            <span className="text-[var(--color-gold)] font-semibold tracking-widest uppercase text-xs">
              The Clinic
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)] leading-tight mb-6">
            A Calming{" "}
            <span className="italic text-[var(--color-teal-dark)]">
              Sanctuary
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            From the moment you step through our doors, experience a tranquil
            environment designed to soothe the senses and elevate your care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="aspect-[4/5] rounded-2xl overflow-hidden group relative"
            >
              <img
                src={img}
                alt={`Clinic Experience ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
