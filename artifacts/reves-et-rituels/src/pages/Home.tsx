import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { useLocation } from "wouter";
import { showBanner } from "@/lib/admob";

const stars = Array.from({ length: 18 });

export default function Home() {
  const { t, lang, toggleLang } = useLanguage();
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#e8f0fe] via-[#f5f0ff] to-[#fffbe8]">

      {/* Floating stars */}
      {stars.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-200 opacity-60"
          style={{
            width: Math.random() * 6 + 2,
            height: Math.random() * 6 + 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Language toggle */}
      <button
        onClick={toggleLang}
        className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-sm text-xs font-bold text-slate-500 shadow-sm border border-white hover:bg-white transition-all"
      >
        {lang === 'fr' ? 'EN' : 'FR'}
      </button>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex flex-col items-center text-center px-8 z-10"
      >
        {/* Hero image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6"
        >
          <img
            src={`${import.meta.env.BASE_URL}images/hero-moon.png`}
            alt="Rêves & Rituels"
            className="w-56 h-56 object-contain"
            style={{
              borderRadius: "50%",
              maskImage: "radial-gradient(circle, black 55%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(circle, black 55%, transparent 75%)",
              filter: "drop-shadow(0px 8px 24px rgba(180, 140, 255, 0.4))"
            }}
          />
        </motion.div>

        {/* App name */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.3em" }}
          animate={{ opacity: 1, letterSpacing: "0.08em" }}
          transition={{ delay: 0.4, duration: 1.2 }}
          className="font-display text-4xl font-bold text-slate-700 mb-2 tracking-wide"
        >
          {lang === 'fr' ? 'Rêves & Rituels' : 'Dreams & Rituals'}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-slate-400 text-sm font-sans mb-8 italic"
        >
          {lang === 'fr' ? 'Explore ton monde intérieur' : 'Explore your inner world'}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent mb-8"
        />

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-slate-500 text-sm italic max-w-[260px] leading-relaxed mb-10 font-sans"
        >
          {lang === 'fr'
            ? '"Les rêves sont la fenêtre de l\'âme sur l\'infini."'
            : '"Dreams are the soul\'s window to the infinite."'}
        </motion.p>

        {/* Enter button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={async () => {
            await showBanner();
            navigate("/dreams");
          }}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-purple-300 via-purple-200 to-yellow-200 text-slate-700 font-bold text-base shadow-lg hover:shadow-xl transition-all border border-white/60"
        >
          {lang === 'fr' ? 'Commencer le voyage' : 'Begin the journey'}
        </motion.button>

      </motion.div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-purple-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
    </div>
  );
}