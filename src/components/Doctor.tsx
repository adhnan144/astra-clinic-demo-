import { motion } from "motion/react";
import { Award, BookOpen, Heart } from "lucide-react";

export default function Doctor() {
  return (
    <section id="doctor" className="py-24 bg-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-gray-100 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-teal)]/5 rounded-l-full -mr-20 z-0 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Image */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
                  alt="Dr. Irfana"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-navy)]/80 via-transparent to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-1">
                      Dr. Irfana
                    </h3>
                    <p className="text-[var(--color-gold-light)] text-sm font-medium tracking-wide uppercase">
                      Lead Specialist
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:col-span-7 lg:pl-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
                <span className="text-[var(--color-gold)] font-semibold tracking-widest uppercase text-xs">
                  Meet The Expert
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)] leading-tight mb-8">
                A Passion for{" "}
                <span className="italic text-[var(--color-teal-dark)]">
                  Perfection
                </span>
              </h2>

              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                "My philosophy is simple: to provide world-class medical and
                aesthetic care in an environment that feels less like a clinic
                and more like a sanctuary. Every patient deserves to feel
                confident, comfortable, and truly cared for."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center text-[var(--color-teal-dark)] flex-shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-navy)] mb-1">
                      Expertise
                    </h4>
                    <p className="text-sm text-gray-500">
                      Over a decade of experience in advanced aesthetics.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center text-[var(--color-teal-dark)] flex-shrink-0">
                    <BookOpen size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-navy)] mb-1">
                      Education
                    </h4>
                    <p className="text-sm text-gray-500">
                      Internationally trained and certified specialist.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-teal)]/10 flex items-center justify-center text-[var(--color-teal-dark)] flex-shrink-0">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-navy)] mb-1">
                      Care
                    </h4>
                    <p className="text-sm text-gray-500">
                      Personalized approach to every patient's journey.
                    </p>
                  </div>
                </div>
              </div>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png"
                alt="Signature"
                className="h-12 opacity-40"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
