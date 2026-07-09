import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const features = [
    "State-of-the-art technology",
    "Personalized treatment plans",
    "Calming, spa-like environment",
    "Expert specialists",
  ];

  return (
    <section id="about" className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                alt="Clinic Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-2/3 aspect-square bg-[var(--color-teal)]/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-8 -left-8 w-1/2 aspect-square border border-[var(--color-gold)]/30 rounded-full z-0"></div>

            {/* Floating badge */}
            <div className="absolute bottom-10 -right-4 md:-right-10 bg-white p-6 rounded-xl shadow-xl z-20 max-w-[200px]">
              <div className="text-4xl font-serif text-[var(--color-gold)] mb-2">
                10+
              </div>
              <div className="text-sm font-medium text-[var(--color-navy)] leading-tight">
                Years of Excellence in Healthcare
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
              <span className="text-[var(--color-gold)] font-semibold tracking-widest uppercase text-xs">
                Welcome to Astra
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)] leading-tight mb-6">
              Redefining{" "}
              <span className="italic text-[var(--color-teal-dark)]">
                Medical Luxury
              </span>{" "}
              in Calicut.
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              At Astra Medicare, we believe that healthcare should be a refined
              experience. Our clinic merges advanced medical expertise with the
              tranquility of a luxury spa, ensuring every visit is comfortable,
              discreet, and exceptionally effective.
            </p>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Led by a team of dedicated specialists, we offer comprehensive
              dental and aesthetic treatments tailored to your unique needs,
              helping you achieve your best self with confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2
                    className="text-[var(--color-gold)]"
                    size={20}
                  />
                  <span className="text-sm font-medium text-[var(--color-navy)]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#doctor"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-white bg-[var(--color-navy)] rounded-full hover:bg-[var(--color-teal-dark)] transition-colors"
            >
              Meet Our Specialists
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
