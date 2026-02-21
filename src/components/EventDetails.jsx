import { motion } from "framer-motion";

const details = [
  {
    icon: "📅",
    label: "Date",
    value: "Coming Soon",
    sub: "Save the Date!",
    hoverColor: "group-hover:border-holi-pink/40",
    glowColor: "from-holi-pink/10",
  },
  {
    icon: "🕐",
    label: "Time",
    value: "To Be Announced",
    sub: "Stay Tuned",
    hoverColor: "group-hover:border-holi-yellow/40",
    glowColor: "from-holi-yellow/10",
  },
  {
    icon: "📍",
    label: "Venue",
    value: "To Be Announced",
    sub: "Details Coming Soon",
    hoverColor: "group-hover:border-holi-green/40",
    glowColor: "from-holi-green/10",
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
    <section id="details" className="relative py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-400 font-sans text-xs tracking-[0.3em] uppercase mb-3">
            Mark Your Calendar
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-white font-bold mb-5">
            Event Details
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
              className={`group relative bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:bg-white/[0.08] transition-all duration-500 ${item.hoverColor}`}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${item.glowColor} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-400/20 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-400/20 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold-400/20 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-400/20 rounded-br-2xl" />

              <div className="relative z-10">
                <span className="text-5xl mb-5 block drop-shadow-lg">{item.icon}</span>
                <p className="text-gold-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                  {item.label}
                </p>
                <p className="text-white text-xl md:text-2xl font-display font-bold mb-1">
                  {item.value}
                </p>
                <p className="text-royal-300/60 text-sm">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
