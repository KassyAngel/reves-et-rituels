import { useLanguage } from '@/hooks/use-language';
import { motion } from 'framer-motion';

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-sm font-display font-bold text-foreground/80 hover:text-gold hover:gold-glow transition-all duration-300"
    >
      <motion.span
        key={lang}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
      >
        {lang === 'fr' ? 'EN' : 'FR'}
      </motion.span>
    </button>
  );
}
