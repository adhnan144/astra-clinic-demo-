import { motion } from "motion/react";
import { Calendar, Clock, User, Phone, MessageSquare } from "lucide-react";

export default function Booking() {
  return (
    <section
      id="booking"
      className="py-24 bg-[var(--color-cream)] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[var(--color-navy)]/5 -skew-y-3 transform origin-bottom-right z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
              <span className="text-[var(--color-gold)] font-semibold tracking-widest uppercase text-xs">
                Reserve Your Time
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)] leading-tight mb-6">
              Begin Your{" "}
              <span className="italic text-[var(--color-teal-dark)]">
                Journey
              </span>
            </h2>

            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Schedule a private consultation with our specialists. We'll
              discuss your goals and create a bespoke treatment plan tailored
              just for you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-teal-dark)]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    Call Us Directly
                  </p>
                  <p className="text-xl font-serif text-[var(--color-navy)]">
                    +91 98765 43210
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[var(--color-teal-dark)]">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    WhatsApp Us
                  </p>
                  <p className="text-xl font-serif text-[var(--color-navy)]">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-serif text-[var(--color-navy)] mb-8">
              Request an Appointment
            </h3>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:bg-white transition-all text-sm"
                  />
                </div>
                <div className="relative">
                  <Phone
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <select
                  defaultValue=""
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:bg-white transition-all text-sm text-gray-600 appearance-none"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="dental">Dental Consultation</option>
                  <option value="aesthetic">Aesthetic Consultation</option>
                  <option value="both">Comprehensive (Both)</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="relative">
                  <Calendar
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:bg-white transition-all text-sm text-gray-600"
                  />
                </div>
                <div className="relative">
                  <Clock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <select
                    defaultValue=""
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50 focus:bg-white transition-all text-sm text-gray-600 appearance-none"
                  >
                    <option value="" disabled>
                      Preferred Time
                    </option>
                    <option value="morning">Morning (10 AM - 1 PM)</option>
                    <option value="afternoon">Afternoon (2 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[var(--color-navy)] text-white rounded-xl font-medium tracking-wide hover:bg-[var(--color-teal-dark)] transition-colors mt-4"
              >
                Confirm Request
              </button>
              <p className="text-xs text-center text-gray-400 mt-4">
                Our team will contact you to confirm your appointment time.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
