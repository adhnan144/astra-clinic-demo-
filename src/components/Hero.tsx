import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
          alt="Luxury Clinic Interior"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-navy)]/90 via-[var(--color-navy)]/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold-light)] text-xs font-semibold tracking-widest uppercase mb-6 border border-[var(--color-gold)]/30">
              Calicut's Premier Clinic
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-6">
              Elevating <br />
              <span className="text-[var(--color-gold-light)] italic">
                Dental & Aesthetic
              </span>{" "}
              <br />
              Care.
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-lg leading-relaxed">
              Experience world-class treatments in a calming, luxurious
              environment designed for your comfort and confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#booking"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-[var(--color-navy)] bg-[var(--color-gold-light)] rounded-full overflow-hidden transition-all hover:bg-white"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book Your Visit{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
