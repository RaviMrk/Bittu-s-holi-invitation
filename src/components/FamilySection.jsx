import { motion } from "framer-motion";
import { Dhol, Thandai } from "./HoliToys";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const familyGroups = [
  {
    title: "दर्शनाभिलाषी एवं विनीत",
    icon: "🙏",
    members: "श्रीमती रंजन देवी व श्री छगनलालजी, दिलीप, दर्शन व समस्त परमार परिवार",
    border: "border-t-holi-pink",
    gradient: "from-holi-pink/15 to-transparent",
    iconBg: "bg-holi-pink/10",
    iconRing: "ring-holi-pink/20",
    dot: "bg-holi-pink",
  },
  // {
  //   title: "स्वागत कर्ता",
  //   icon: "🤝",
  //   members: "मदनलालजी, छगनलालजी, दिनेशजी, नरेशजी, दिलीप, दर्शन एवं समस्त परमार परिवार",
  //   border: "border-t-holi-orange",
  //   gradient: "from-holi-orange/15 to-transparent",
  //   iconBg: "bg-holi-orange/10",
  //   iconRing: "ring-holi-orange/20",
  //   dot: "bg-holi-orange",
  // },
  // {
  //   title: "ननिहाल पक्ष",
  //   icon: "👨‍👩‍👦",
  //   members: "अमरुतलाजी, महेंद्रजी, मनोजजी व समस्त परिहार परिवार",
  //   border: "border-t-holi-blue",
  //   gradient: "from-holi-blue/15 to-transparent",
  //   iconBg: "bg-holi-blue/10",
  //   iconRing: "ring-holi-blue/20",
  //   dot: "bg-holi-blue",
  // },
  // {
  //   title: "भुआ",
  //   icon: "💐",
  //   members: "खुशबू, नेहा, मुस्कान, भाविका, दिशा, कोमल, रिया व समस्त परमार परिवार",
  //   border: "border-t-holi-purple",
  //   gradient: "from-holi-purple/15 to-transparent",
  //   iconBg: "bg-holi-purple/10",
  //   iconRing: "ring-holi-purple/20",
  //   dot: "bg-holi-purple",
  // },
];

export default function FamilySection() {
  return (
    <section id="family" className="relative py-8 px-4 overflow-hidden">
      <Dhol className="absolute top-10 left-4 w-20 md:w-24 opacity-20 animate-wiggle" />
      <Thandai className="absolute bottom-12 right-6 w-14 md:w-18 opacity-20 animate-float-reverse" />

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
            सादर निमंत्रण
          </motion.p>
          <h2 className="font-display text-4xl md:text-5xl text-royal-700 font-bold mb-4">
            परिवार जन
          </h2>
          <div className="divider-holi w-40 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {familyGroups.map((group) => (
            <motion.div
              key={group.title}
              variants={cardVariants}
              className={`group relative rounded-2xl border-t-4 ${group.border} overflow-hidden transition-all duration-500 shadow-md hover:shadow-2xl hover:-translate-y-1`}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${group.gradient} opacity-60`} />
              <div className="absolute inset-0 card-cream" style={{ zIndex: -1 }} />

              <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-gold-400/20 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-gold-400/20 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-gold-400/20 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-gold-400/20 rounded-br-2xl" />

              <div className="relative z-10 p-7 md:p-8">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-14 h-14 rounded-full ${group.iconBg} ring-2 ${group.iconRing} flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                    {group.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg md:text-xl text-royal-700 font-bold">
                      {group.title}
                    </h3>
                    <div className="flex gap-1.5 mt-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${group.dot} opacity-40`} />
                      <div className={`w-1.5 h-1.5 rounded-full ${group.dot} opacity-70`} />
                      <div className={`w-1.5 h-1.5 rounded-full ${group.dot} opacity-40`} />
                    </div>
                  </div>
                </div>

                <div className="w-full h-[2px] bg-gradient-to-r from-gold-400/40 via-gold-400/15 to-transparent mb-5 rounded-full" />

                <p className="text-royal-700/85 font-sans text-sm md:text-base leading-relaxed font-semibold">
                  {group.members}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
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
