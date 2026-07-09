import { motion } from "motion/react";
import { Sparkles, Smile, Droplet, Sun, Wind, Activity } from "lucide-react";

export default function Services() {
  const dentalServices = [
    {
      title: "Cosmetic Dentistry",
      description:
        "Veneers, teeth whitening, and smile makeovers for a radiant appearance.",
      icon: <Smile size={24} />,
    },
    {
      title: "Dental Implants",
      description: "Permanent, natural-looking solutions for missing teeth.",
      icon: <Activity size={24} />,
    },
    {
      title: "Orthodontics",
      description: "Clear aligners and modern braces for perfect alignment.",
      icon: <Sparkles size={24} />,
    },
  ];

  const aestheticServices = [
    {
      title: "Laser Treatments",
      description: "Advanced laser hair removal and skin resurfacing.",
      icon: <Sun size={24} />,
    },
    {
      title: "Anti-Aging",
      description:
        "Botox, fillers, and thread lifts for youthful rejuvenation.",
      icon: <Droplet size={24} />,
    },
    {
      title: "Skin Rejuvenation",
      description: "Chemical peels, microneedling, and bespoke facials.",
      icon: <Wind size={24} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-navy)]/5 -skew-y-3 transform origin-top-left z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
            <span className="text-[var(--color-gold)] font-semibold tracking-widest uppercase text-xs">
              Our Expertise
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)] leading-tight mb-6">
            Comprehensive{" "}
            <span className="italic text-[var(--color-teal-dark)]">Care</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We offer a curated selection of premium dental and aesthetic
            treatments, utilizing the latest technology to deliver exceptional
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Dental Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-[var(--color-cream)] p-8 md:p-12 rounded-3xl border border-[var(--color-gold)]/10"
          >
            <h3 className="text-3xl font-serif text-[var(--color-navy)] mb-8 flex items-center gap-4">
              <span className="w-12 h-12 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)]">
                <Smile size={24} />
              </span>
              Dental Excellence
            </h3>
            <div className="space-y-8">
              {dentalServices.map((service, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="text-[var(--color-teal)] mt-1 group-hover:text-[var(--color-gold)] transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-[var(--color-navy)] mb-2">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#booking"
              className="mt-10 inline-flex items-center text-sm font-semibold text-[var(--color-teal-dark)] hover:text-[var(--color-gold)] transition-colors uppercase tracking-widest"
            >
              Book Dental Consult <span className="ml-2">→</span>
            </a>
          </motion.div>

          {/* Aesthetic Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--color-navy)] p-8 md:p-12 rounded-3xl text-white relative overflow-hidden"
          >
            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "24px 24px",
              }}
            ></div>

            <h3 className="text-3xl font-serif text-white mb-8 flex items-center gap-4 relative z-10">
              <span className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[var(--color-gold-light)]">
                <Sparkles size={24} />
              </span>
              Aesthetic Mastery
            </h3>
            <div className="space-y-8 relative z-10">
              {aestheticServices.map((service, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="text-[var(--color-gold-light)] mt-1 group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-white mb-2">
                      {service.title}
                    </h4>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#booking"
              className="mt-10 inline-flex items-center text-sm font-semibold text-[var(--color-gold-light)] hover:text-white transition-colors uppercase tracking-widest relative z-10"
            >
              Book Skin Consult <span className="ml-2">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
