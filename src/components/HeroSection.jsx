import { motion } from "framer-motion";
import bittuPhoto from "../assets/Bittu.png";
import { Pichkari, GulalBowl, ColorBalloon } from "./HoliToys";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20 overflow-hidden">
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
          className="mb-4"
        >
          <p className="font-cursive text-2xl md:text-3xl text-gold-500 font-bold">
            || श्री गणेशाय नमः ||
          </p>
        </motion.div>

        {/* Deity blessings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-4 space-y-1"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-royal-700 font-sans text-xs md:text-sm font-semibold">
            <span>|| श्री सुंधामाताजी नमः ||</span>
            <span>|| आबुगढ़ री अधर देवी नमः ||</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-royal-700 font-sans text-xs md:text-sm font-semibold">
            <span>|| श्री खेतलाजी नमः ||</span>
            <span>|| श्री महादेवजी नमः ||</span>
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
          className="font-cursive text-5xl md:text-7xl text-royal-700 font-bold mb-4"
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
          <div
            className="absolute -inset-4 rounded-full animate-rotate-slow opacity-50"
            style={{
              background: "conic-gradient(from 0deg, #ff1493, #ff6b35, #fbbf24, #10b981, #3b82f6, #8b5cf6, #ff1493)",
            }}
          />
          <div className="absolute -inset-1.5 rounded-full bg-white/80 backdrop-blur-sm" />
          <div className="relative w-full h-full rounded-full photo-frame animate-pulse-glow overflow-hidden">
            <img
              src={bittuPhoto}
              alt="चि. जियांश"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="absolute -top-3 -left-3 w-7 h-7 border-t-2 border-l-2 border-gold-400 rounded-tl-lg" />
          <div className="absolute -top-3 -right-3 w-7 h-7 border-t-2 border-r-2 border-gold-400 rounded-tr-lg" />
          <div className="absolute -bottom-3 -left-3 w-7 h-7 border-b-2 border-l-2 border-gold-400 rounded-bl-lg" />
          <div className="absolute -bottom-3 -right-3 w-7 h-7 border-b-2 border-r-2 border-gold-400 rounded-br-lg" />
        </motion.div>

        {/* Child's Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-cursive text-5xl md:text-7xl lg:text-8xl text-gold-500 mb-1 leading-tight font-bold drop-shadow-[0_2px_10px_rgba(212,160,23,0.3)]"
        >
          चि. जियांश
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="text-gold-500 font-display text-xl md:text-2xl font-bold mb-2"
        >
          (बिट्टू)
        </motion.p>

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
          className="holi-text font-display text-xl md:text-3xl font-bold mb-5"
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
            श्री सुंधामाता एवं सियाणा खेतलाजी की असीम कृपा से
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
