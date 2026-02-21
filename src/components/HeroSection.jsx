import { motion } from "framer-motion";
import bittuPhoto from "../assets/Bittu.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 md:py-20">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Top ornament */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <p className="text-gold-400 font-sans text-xs md:text-sm tracking-[0.4em] uppercase">
            Shubh Nimantran
          </p>
          <p className="text-gold-300/60 font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase mt-1">
            You are cordially invited
          </p>
        </motion.div>

        {/* Photo with royal frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative mx-auto mb-8 w-52 h-52 md:w-64 md:h-64"
        >
          {/* Rotating color ring behind photo */}
          <div className="absolute -inset-3 rounded-full animate-rotate-slow opacity-40"
            style={{
              background: "conic-gradient(from 0deg, #ff1493, #ff6b35, #ffd700, #00e676, #2979ff, #aa00ff, #ff1493)",
            }}
          />
          <div className="absolute -inset-1 rounded-full bg-royal-900" />

          {/* Gold frame */}
          <div className="relative w-full h-full rounded-full photo-frame animate-pulse-glow overflow-hidden">
            <img
              src={bittuPhoto}
              alt="Bittu"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Corner decorations */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-gold-400 rounded-tl-lg" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-gold-400 rounded-tr-lg" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-gold-400 rounded-bl-lg" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-gold-400 rounded-br-lg" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-cursive text-6xl md:text-8xl lg:text-9xl text-gold-300 mb-2 leading-tight drop-shadow-[0_0_30px_rgba(212,160,23,0.3)]"
        >
          Bittu
        </motion.h1>

        {/* Holi-colored divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="divider-holi w-64 mx-auto mb-6 rounded-full"
        />

        {/* Program Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-display text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-3"
        >
          Special Program
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="holi-text font-display text-lg md:text-2xl font-semibold mb-6"
        >
          A Royal Holi Celebration
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-royal-200/80 font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed"
        >
          We joyfully invite you to shower your blessings and
          celebrate this colorful occasion with our little prince{" "}
          <span className="text-gold-300 font-semibold">Bittu</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#details"
            className="inline-block px-8 py-3 bg-gradient-to-r from-gold-400 to-gold-500 text-royal-900 font-semibold rounded-full hover:from-gold-300 hover:to-gold-400 transition-all duration-300 shadow-lg shadow-gold-500/25 hover:shadow-gold-400/40 hover:-translate-y-0.5"
          >
            View Details
          </a>
          <a
            href="#message"
            className="inline-block px-8 py-3 border border-gold-400/40 text-gold-300 font-semibold rounded-full hover:bg-gold-400/10 transition-all duration-300"
          >
            Read Message
          </a>
        </motion.div>
      </div>
    </section>
  );
}
