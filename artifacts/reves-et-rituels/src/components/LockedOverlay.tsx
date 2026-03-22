import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";

interface Props {
  onWatch: () => void;
  loading: boolean;
}

export function LockedOverlay({ onWatch, loading }: Props) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center py-10 px-6 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mb-4 shadow-sm">
        <span className="text-3xl">🔒</span>
      </div>
      <h3 className="font-display font-bold text-lg text-foreground mb-2">
        {lang === "fr" ? "Contenu Premium" : "Premium Content"}
      </h3>
      <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-[260px]">
        {lang === "fr"
          ? "Regarde une courte publicité pour débloquer ce contenu gratuitement."
          : "Watch a short ad to unlock this content for free."}
      </p>
      <button
        onClick={onWatch}
        disabled={loading}
        className="w-full py-3.5 rounded-2xl font-bold text-sm text-white active:scale-95 transition-transform disabled:opacity-50"
        style={{
          background: "linear-gradient(135deg, #a78bfa 0%, #c084fc 100%)",
          boxShadow: "0 4px 15px rgba(167, 139, 250, 0.3)",
        }}
      >
        {loading
          ? (lang === "fr" ? "Chargement..." : "Loading...")
          : (lang === "fr" ? "Regarder la publicité" : "Watch ad")}
      </button>
      <p className="text-[10px] text-muted-foreground/60 mt-3">
        {lang === "fr"
          ? "ou passe Premium pour un accès illimité"
          : "or go Premium for unlimited access"}
      </p>
    </motion.div>
  );
}