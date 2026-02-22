import { motion } from "framer-motion";
import { Pichkari, GulalBowl, ColorBalloon } from "./HoliToys";
import ganeshjiSvg from "../assets/Ganeshji.svg";

// Photo from public folder - served at root when deployed
const bittuPhoto = "/Bittu.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-5 md:py-10 overflow-hidden">
      <Pichkari
        className="absolute top-16 left-4 md:left-16 w-20 md:w-28 opacity-40 animate-float rotate-[-30deg]"
        color1="#ff1493"
        color2="#fbbf24"
      />
      <ColorBalloon
        className="absolute top-24 right-8 md:right-20 w-10 md:w-14 opacity-35 animate-float-delayed"
        color="#8b5cf6"
      />
      <ColorBalloon
        className="absolute top-16 right-16 md:right-32 w-8 md:w-12 opacity-30 animate-float"
        color="#ff6b35"
      />
      <GulalBowl
        className="absolute bottom-16 right-6 md:right-20 w-20 md:w-28 opacity-30 animate-float-slow"
        color="#10b981"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* श्री गणेशाय नमः */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mb-4 flex justify-center"
        >
          <img
            src={ganeshjiSvg}
            alt="श्री गणेशाय नमः"
            className="h-16 md:h-20 w-auto"
          />
        </motion.div>

        {/* Deity blessings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-4 space-y-1"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-royal-700 font-sans text-xs md:text-sm font-semibold">
            <span>|| श्री गणेशाय नमः ||</span>
            <span>|| श्री वाँवेश्वर महादेव नमः ||</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-royal-700 font-sans text-xs md:text-sm font-semibold">
            <span>|| श्री सुंधामाता नमः ||</span>
            <span>|| श्री अर्बुदामाता नमः ||</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="divider-holi w-48 mx-auto mb-5 rounded-full"
        />

        {/* ढूंढोत्सव Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-cursive text-5xl md:text-7xl holi-text font-bold pt-2 pb-10 mb-4 leading-tight"
        >
          ढूंढोत्सव
        </motion.h2>

        {/* Photo with royal frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
          className="relative mx-auto mb-6 w-48 h-48 md:w-60 md:h-60 lg:w-64 lg:h-64"
        >
          {/* Outer breathing conic ring */}
          <div
            className="absolute -inset-5 rounded-full animate-breathe"
            style={{
              background: "conic-gradient(from 0deg, #ff1493, #ff6b35, #fbbf24, #10b981, #3b82f6, #8b5cf6, #ff1493)",
              filter: "blur(6px)",
            }}
          />
          {/* Inner spinning conic ring */}
          <div
            className="absolute -inset-3 rounded-full animate-rotate-slow opacity-60"
            style={{
              background: "conic-gradient(from 180deg, #8b5cf6, #3b82f6, #10b981, #fbbf24, #ff6b35, #ff1493, #8b5cf6)",
            }}
          />
          {/* Counter-rotating dashed ring */}
          <div
            className="absolute -inset-6 rounded-full animate-rotate-reverse opacity-25"
            style={{
              border: "2px dashed rgba(212, 160, 23, 0.6)",
            }}
          />

          {/* White buffer */}
          <div className="absolute -inset-1.5 rounded-full bg-white/85 backdrop-blur-sm" />

          {/* Photo */}
          <div className="relative w-full h-full rounded-full photo-frame animate-pulse-glow overflow-hidden">
            <img
              src={bittuPhoto}
              alt="चि. जियांश"
              className="w-full h-full object-cover object-top"
            />
            {/* Shimmer sweep */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)",
                animation: "photo-shimmer 4s ease-in-out 2s infinite",
              }}
            />
          </div>

          {/* Orbiting particles */}
          {[
            { color: "#ff1493", size: 8, duration: 8, delay: 0, radius: 145 },
            { color: "#fbbf24", size: 6, duration: 10, delay: 2, radius: 150 },
            { color: "#10b981", size: 7, duration: 9, delay: 4, radius: 155 },
            { color: "#8b5cf6", size: 5, duration: 11, delay: 1, radius: 160 },
            { color: "#3b82f6", size: 6, duration: 7, delay: 3, radius: 148 },
            { color: "#ff6b35", size: 5, duration: 12, delay: 5, radius: 158 },
          ].map((p, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: p.size,
                height: p.size,
                borderRadius: "50%",
                backgroundColor: p.color,
                opacity: 0.7,
                filter: `blur(${p.size > 6 ? 1 : 0}px)`,
                "--orbit-r": `${p.radius}px`,
                animation: `orbit ${p.duration}s linear ${p.delay}s infinite`,
                animationFillMode: "backwards",
              }}
            />
          ))}

          {/* Corner accents */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-gold-400 rounded-tl-lg" />
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400 rounded-tr-lg" />
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-gold-400 rounded-bl-lg" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-gold-400 rounded-br-lg" />
        </motion.div>

        {/* Child's Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-cursive text-4xl md:text-7xl lg:text-8xl text-gold-500 mb-2 py-5 leading-tight font-bold drop-shadow-[0_2px_10px_rgba(212,160,23,0.3)]"
        >
          चि. जियांश <span className="font-display text-xl md:text-2xl">(बिट्टू)</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="text-royal-700 font-sans text-sm md:text-base font-semibold mb-5"
        >
          (सुपुत्र: श्रीमती अंजू व श्री रवि परमार)
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="divider-holi w-64 mx-auto mb-6 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="holi-text font-display text-xl md:text-3xl font-bold mb-5 p-2"
        >
          एक शाही होली उत्सव
        </motion.p>

        {/* Main invitation text */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-royal-700 font-sans text-base md:text-lg max-w-2xl mx-auto leading-relaxed space-y-3 mb-4 font-medium"
        >
          <p className="text-gold-500 font-bold text-lg md:text-xl">मान्यवर,</p>
          <p>
            श्री सुंधामाता एवं सोनाणा खेतलाजी की असीम कृपा से
            सुंदर देवी व श्री जेपारामजी परमार के पड़पौत्र
            एवं श्रीमती रंजन देवी व श्री छगनलालजी के सुपौत्र
          </p>
          <p className="font-bold text-royal-700 text-lg md:text-xl">
            चि. जियांश (बिट्टू)
          </p>
          <p>
            के ढूंढ उत्सव एवं पूजनीय श्री सुंदर देवी व श्री जेपारामजी परमार के स्वर्ण सीढ़ी चढ़ने की असीम
            खुशी में{" "}
            <span className="text-gold-500 font-bold">
              आप सपरिवार सादर आमंत्रित हैं।
            </span>
          </p>
          <p className="text-royal-700/80 italic font-semibold">
            आपका आगमन हमारे उत्सव की शोभा बढ़ाएगा।
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#details"
            className="inline-block px-8 py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-white font-bold rounded-full hover:from-gold-300 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-400/30 hover:-translate-y-0.5"
          >
            कार्यक्रम विवरण
          </a>
          <a
            href="#family"
            className="inline-block px-8 py-3 border-2 border-gold-400/50 text-gold-500 font-bold rounded-full hover:bg-gold-400/10 transition-all duration-300"
          >
            परिवार जन
          </a>
        </motion.div>
      </div>
    </section>
  );
}
