import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      service: "Aesthetic Treatment",
      text: "The most luxurious clinic experience I've ever had. Dr. Irfana is incredibly skilled and made me feel completely at ease. The results are phenomenal.",
      rating: 5,
    },
    {
      name: "Rahul K.",
      service: "Dental Implants",
      text: "I was always anxious about dental work, but Astra changed that. The environment is so calming, and the staff is exceptionally professional.",
      rating: 5,
    },
    {
      name: "Aisha F.",
      service: "Skin Rejuvenation",
      text: "A true sanctuary in Calicut. My skin has never looked better. The personalized care and attention to detail are unmatched.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-cream)] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
            <span className="text-[var(--color-gold)] font-semibold tracking-widest uppercase text-xs">
              Patient Stories
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-navy)] leading-tight mb-6">
            Words of{" "}
            <span className="italic text-[var(--color-teal-dark)]">Trust</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative"
            >
              <Quote
                className="absolute top-8 right-8 text-[var(--color-teal)]/10"
                size={48}
              />

              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[var(--color-gold)] text-[var(--color-gold)]"
                  />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>

              <div className="mt-auto">
                <h4 className="font-semibold text-[var(--color-navy)]">
                  {review.name}
                </h4>
                <p className="text-xs text-[var(--color-teal-dark)] font-medium uppercase tracking-wider mt-1">
                  {review.service}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
