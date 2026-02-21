import { motion } from "framer-motion";

export default function MessageSection() {
  return (
    <section id="message" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-b from-white/[0.06] to-white/[0.02] backdrop-blur-sm border border-gold-400/15 rounded-3xl p-10 md:p-16 text-center"
        >
          {/* Top badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-royal-800 px-6 py-1.5 rounded-full border border-gold-400/30">
            <span className="text-gold-400 font-display text-xs tracking-[0.2em] uppercase">
              A Heartfelt Invitation
            </span>
          </div>

          {/* Gold corner ornaments */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gold-400/25 rounded-tl-xl" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-gold-400/25 rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-gold-400/25 rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-gold-400/25 rounded-br-xl" />

          {/* Decorative quotes */}
          <div className="absolute top-8 left-8 text-gold-400/15 text-7xl font-cursive select-none leading-none">
            &ldquo;
          </div>
          <div className="absolute bottom-8 right-8 text-gold-400/15 text-7xl font-cursive select-none leading-none rotate-180">
            &ldquo;
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-royal-100/80 font-sans text-lg md:text-xl leading-relaxed mb-6 relative z-10"
          >
            With hearts overflowing with joy and colours of happiness,
            we invite you to grace this auspicious occasion with your presence.
            Come join us as we celebrate the festival of colors and shower
            blessings on our little prince.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-royal-100/60 font-sans text-base md:text-lg leading-relaxed mb-8 relative z-10"
          >
            Your love and blessings will add the most beautiful colors
            to this celebration. We eagerly await your presence!
          </motion.p>

          {/* Holi divider */}
          <div className="divider-holi w-40 mx-auto rounded-full mb-8" />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-gold-300 font-cursive text-3xl md:text-4xl relative z-10"
          >
            With Love & Warm Regards
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-royal-200/60 font-sans text-sm mt-4 relative z-10"
          >
            — Bittu's Family
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
