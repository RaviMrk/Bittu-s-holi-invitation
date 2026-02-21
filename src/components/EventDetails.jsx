import { motion } from "framer-motion";
import { GulalBowl, Pichkari } from "./HoliToys";

const details = [
  {
    icon: "📅",
    label: "दिनांक",
    value: "3 मार्च 2026",
    sub: "मंगलवार",
    accent: "border-holi-pink/30 hover:border-holi-pink/50",
    glow: "group-hover:shadow-holi-pink/10",
  },
  {
    icon: "🕐",
    label: "प्रतिभोज",
    value: "सुबह 11:00 बजे",
    sub: "से आपके आगमन तक",
    accent: "border-holi-yellow/30 hover:border-holi-yellow/50",
    glow: "group-hover:shadow-holi-yellow/10",
  },
  {
    icon: "📍",
    label: "स्थान",
    value: "निवास स्थान",
    sub: "शांती नगर सोसायटी Pune",
    accent: "border-holi-green/30 hover:border-holi-green/50",
    glow: "group-hover:shadow-holi-green/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function EventDetails() {
  return (
    <section id="details" className="relative py-10 px-4 overflow-hidden">
      <GulalBowl className="absolute top-10 right-8 w-20 md:w-24 opacity-25 animate-float" color="#8b5cf6" />
      <Pichkari className="absolute bottom-10 left-4 w-24 md:w-28 opacity-20 animate-float-slow rotate-[10deg]" color1="#3b82f6" color2="#10b981" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 font-sans text-sm tracking-[0.2em] mb-3 font-bold">
            तारीख याद रखें
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-royal-700 font-bold mb-5">
            कार्यक्रम विवरण
          </h2>
          <div className="divider-holi w-32 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {details.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              className={`group relative card-cream rounded-2xl p-8 text-center transition-all duration-500 shadow-sm hover:shadow-xl ${item.accent} ${item.glow}`}
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-400/25 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-400/25 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold-400/25 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-400/25 rounded-br-2xl" />

              <div className="relative z-10">
                <span className="text-5xl mb-5 block drop-shadow-sm">{item.icon}</span>
                <p className="text-gold-500 text-sm font-bold tracking-[0.15em] mb-3">
                  {item.label}
                </p>
                <p className="text-royal-700 text-xl md:text-2xl font-display font-bold mb-1">
                  {item.value}
                </p>
                <p className="text-royal-700/80 text-sm font-semibold leading-relaxed">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
