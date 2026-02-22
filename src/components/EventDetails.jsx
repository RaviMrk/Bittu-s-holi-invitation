import { motion } from "framer-motion";
import { GulalBowl, Pichkari } from "./HoliToys";

function CalendarIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="40" height="36" rx="5" fill="#fff5ee" stroke="#b8860b" strokeWidth="1.5" />
      <rect x="4" y="8" width="40" height="12" rx="5" fill="#ff1493" />
      <rect x="4" y="15" width="40" height="5" fill="#ff1493" />
      <text x="24" y="18" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="sans-serif">MAR</text>
      <rect x="14" y="6" width="3" height="8" rx="1.5" fill="#b8860b" />
      <rect x="31" y="6" width="3" height="8" rx="1.5" fill="#b8860b" />
      <text x="24" y="38" textAnchor="middle" fill="#1e1b5e" fontSize="18" fontWeight="800" fontFamily="sans-serif">3</text>
    </svg>
  );
}

const details = [
  {
    icon: <CalendarIcon />,
    label: "दिनांक",
    value: "3 मार्च 2026",
    sub: "मंगलवार",
    gradient: "from-holi-pink/20 to-holi-pink/5",
    border: "border-t-holi-pink",
    iconBg: "bg-holi-pink/10",
    iconRing: "ring-holi-pink/20",
    dot: "bg-holi-pink",
  },
  {
    icon: "🕐",
    label: "प्रतिभोज",
    value: "सुबह 11:00 बजे",
    sub: "से आपके आगमन तक",
    gradient: "from-holi-yellow/20 to-holi-yellow/5",
    border: "border-t-holi-yellow",
    iconBg: "bg-holi-yellow/10",
    iconRing: "ring-holi-yellow/20",
    dot: "bg-holi-yellow",
  },
  {
    icon: "📍",
    label: "स्थान",
    value: "जी विंग-304, शांतीनगर सोसायटी",
    sub: "कोंढवा बुद्रुक, पुणे, महाराष्ट्र 411048",
    gradient: "from-holi-green/20 to-holi-green/5",
    border: "border-t-holi-green",
    iconBg: "bg-holi-green/10",
    iconRing: "ring-holi-green/20",
    dot: "bg-holi-green",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function EventDetails() {
  return (
    <section id="details" className="relative py-8 px-4 overflow-hidden">
      <GulalBowl className="absolute top-10 right-8 w-20 md:w-24 opacity-25 animate-float" color="#8b5cf6" />
      <Pichkari className="absolute bottom-10 left-4 w-24 md:w-28 opacity-20 animate-float-slow rotate-10" color1="#3b82f6" color2="#10b981" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-gold-500 font-sans text-xs uppercase mb-3 font-bold"
          >
            तारीख याद रखें
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl text-royal-700 font-bold mb-4">
            कार्यक्रम विवरण
          </h2>
          <div className="divider-holi w-40 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {details.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              className={`group relative rounded-2xl border-t-4 ${item.border} overflow-hidden transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-1`}
            >
              {/* Card background with subtle gradient */}
              <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-60`} />
              <div className="absolute inset-0 card-cream" style={{ zIndex: -1 }} />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold-400/20 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gold-400/20 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gold-400/20 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold-400/20 rounded-br-2xl" />

              <div className="relative z-10 p-8 text-center">
                {/* Icon in a styled circle */}
                <div className="flex justify-center mb-5">
                  <div className={`w-20 h-20 rounded-full ${item.iconBg} ring-2 ${item.iconRing} flex items-center justify-center text-4xl shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                    {item.icon}
                  </div>
                </div>

                {/* Colored dot separator */}
                <div className="flex justify-center gap-1.5 mb-4">
                  <div className={`w-1.5 h-1.5 rounded-full ${item.dot} opacity-40`} />
                  <div className={`w-1.5 h-1.5 rounded-full ${item.dot} opacity-70`} />
                  <div className={`w-1.5 h-1.5 rounded-full ${item.dot} opacity-40`} />
                </div>

                <p className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </p>
                <p className="text-royal-700 text-xl md:text-2xl font-display font-bold mb-1.5">
                  {item.value}
                </p>
                <p className="text-royal-700/70 text-sm font-semibold leading-relaxed">
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decorative dots */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex justify-center gap-2"
        >
          {["bg-holi-pink", "bg-holi-orange", "bg-holi-yellow", "bg-holi-green", "bg-holi-blue", "bg-holi-purple"].map(
            (color, i) => (
              <div
                key={color}
                className={`w-2 h-2 rounded-full ${color} opacity-50`}
                style={{ animationDelay: `${i * 0.3}s`, animation: "sparkle 3s ease-in-out infinite" }}
              />
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
