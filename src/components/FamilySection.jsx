import { motion } from "framer-motion";
import { Dhol, Thandai } from "./HoliToys";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const familyGroups = [
  {
    title: "दर्शनाभिलाषी एवं विनीत",
    icon: "🙏",
    members: "गरिमा – अमृत",
    color: "border-holi-pink/30",
  },
  {
    title: "स्वागत कर्ता",
    icon: "🤝",
    members:
      "कुन्दनमल, विनोद, भंवरलाल, जयन्तीलाल, राजेश, महेन्द्र, जितेन्द्र, ओमप्रकाश, त्रिभुवन, प्रविण, कमलेश, हिमांशु एवं समस्त परहाडिया परिवार, आहोर।",
    color: "border-holi-orange/30",
  },
  {
    title: "ननिहाल पक्ष",
    icon: "👨‍👩‍👦",
    members:
      "कैलाश जी, घनश्याम जी, अशोक जी, कान्तीलाल जी, रमेश जी, कपिल जी, निलेश जी, हार्दिक (परमार परिवार, सुमेरपुर)",
    color: "border-holi-blue/30",
  },
  {
    title: "भुआ",
    icon: "💐",
    members: "कविता, प्रियंका, पूजा, मुस्कान।",
    color: "border-holi-purple/30",
  },
];

export default function FamilySection() {
  return (
    <section id="family" className="relative py-24 px-4 overflow-hidden">
      <Dhol className="absolute top-10 left-4 w-20 md:w-24 opacity-20 animate-wiggle" />
      <Thandai className="absolute bottom-12 right-6 w-14 md:w-18 opacity-20 animate-float-reverse" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold-500 font-sans text-xs tracking-[0.2em] mb-3 font-medium">
            सादर निमंत्रण
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-royal-700 font-bold mb-5">
            परिवार जन
          </h2>
          <div className="divider-holi w-32 mx-auto rounded-full" />
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
              className={`card-cream rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 border ${group.color}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{group.icon}</span>
                <h3 className="font-display text-lg md:text-xl text-royal-700 font-bold">
                  {group.title}
                </h3>
              </div>
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold-400/50 to-transparent mb-4 rounded-full" />
              <p className="text-royal-700/60 font-sans text-sm md:text-base leading-relaxed">
                {group.members}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
