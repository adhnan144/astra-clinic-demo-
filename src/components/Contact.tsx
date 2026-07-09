import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
            <span className="text-[var(--color-gold)] font-semibold tracking-widest uppercase text-xs">
              Get in Touch
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)] leading-tight mb-6">
            Visit{" "}
            <span className="italic text-[var(--color-teal-dark)]">Astra</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-gold)] flex-shrink-0 mt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-[var(--color-navy)] mb-2">
                  Location
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Astra Medicare, 123 Luxury Avenue,
                  <br />
                  Opposite Grand Mall, Calicut,
                  <br />
                  Kerala 673001
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-gold)] flex-shrink-0 mt-1">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-[var(--color-navy)] mb-2">
                  Clinic Hours
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Monday - Saturday: 10:00 AM - 8:00 PM
                  <br />
                  Sunday: By Appointment Only
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-gold)] flex-shrink-0 mt-1">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-[var(--color-navy)] mb-2">
                  Contact
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Phone: +91 1234567890
                  <br />
                  WhatsApp: +91 1234567890
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-[var(--color-cream)] flex items-center justify-center text-[var(--color-gold)] flex-shrink-0 mt-1">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-serif text-[var(--color-navy)] mb-2">
                  Email
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  hello@astramedicare.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-100 rounded-3xl overflow-hidden h-[400px] relative border border-gray-200"
          >
            {/* In a real app, replace this with a Google Maps iframe */}
            <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-400">
              <MapPin size={48} className="mb-4 text-[var(--color-gold)]/50" />
              <p className="font-medium tracking-wide">
                Interactive Map Placeholder
              </p>
              <p className="text-sm">Calicut, Kerala</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
