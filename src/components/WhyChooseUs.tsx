import { motion } from "motion/react";
import { ShieldCheck, Clock, Sparkles, Users } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck size={32} />,
      title: "Uncompromising Safety",
      description:
        "We adhere to the highest international standards of sterilization and clinical hygiene.",
    },
    {
      icon: <Sparkles size={32} />,
      title: "Luxury Environment",
      description:
        "A calming, spa-like atmosphere designed to alleviate anxiety and promote relaxation.",
    },
    {
      icon: <Users size={32} />,
      title: "Personalized Care",
      description:
        "Bespoke treatment plans tailored specifically to your unique goals and anatomy.",
    },
    {
      icon: <Clock size={32} />,
      title: "Advanced Technology",
      description:
        "Equipped with cutting-edge medical and aesthetic devices for optimal results.",
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-navy)] text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, var(--color-gold) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
            <span className="text-[var(--color-gold)] font-semibold tracking-widest uppercase text-xs">
              The Astra Standard
            </span>
            <div className="h-[1px] w-12 bg-[var(--color-gold)]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
            Why Choose{" "}
            <span className="italic text-[var(--color-gold-light)]">
              Astra Medicare
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold-light)] mb-6 group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-xl font-serif text-white mb-4">
                {reason.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
