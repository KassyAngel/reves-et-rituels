import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { NotificationSettings } from "./NotificationSettings";

interface Props {
  open: boolean;
  onClose: () => void;
  anchorRef?: React.RefObject<HTMLButtonElement | null>;
}

export function LegalModal({ open, onClose, anchorRef }: Props) {
  const { lang } = useLanguage();

  const getPosition = () => {
    if (!anchorRef?.current) return { top: 80, left: 8 };
    const rect = anchorRef.current.getBoundingClientRect();
    return {
      top: rect.bottom + 8,
      left: Math.max(8, rect.left - 180),
    };
  };

  const pos = getPosition();

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <div className="fixed inset-0 z-[998]" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -6 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            style={{ top: pos.top, left: pos.left }}
            className="fixed z-[999] w-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100"
          >
            {/* Flèche décorative */}
            <div
              className="absolute -top-2 w-4 h-4 bg-white rotate-45 border-l border-t border-slate-100"
              style={{
                left: anchorRef?.current
                  ? anchorRef.current.getBoundingClientRect().left -
                    Math.max(8, anchorRef.current.getBoundingClientRect().left - 180) + 12
                  : 12,
              }}
            />

            <div className="pt-4 pb-3 px-3 space-y-2 relative">
              <button
                onClick={onClose}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center"
              >
                <X size={12} className="text-slate-400" />
              </button>

              {/* ── Notifications ── */}
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1 mb-2">
                {lang === "fr" ? "Notifications" : "Notifications"}
              </p>
              <NotificationSettings />

              {/* ── Séparateur ── */}
              <div className="h-px bg-slate-100 my-2" />

              {/* ── Légal ── */}
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 px-1 mb-2">
                {lang === "fr" ? "Informations légales" : "Legal"}
              </p>

              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors text-left">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Shield size={15} className="text-blue-500" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-foreground">
                    {lang === "fr" ? "Politique de confidentialité" : "Privacy policy"}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {lang === "fr" ? "Vos données & vie privée" : "Your data & privacy"}
                  </p>
                </div>
              </button>

              <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-left">
                <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <FileText size={15} className="text-slate-600" />
                </div>
                <div>
                  <p className="font-semibold text-xs text-foreground">
                    {lang === "fr" ? "Mentions légales" : "Legal notices"}
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    {lang === "fr" ? "CGU & conditions" : "Terms of use"}
                  </p>
                </div>
              </button>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}