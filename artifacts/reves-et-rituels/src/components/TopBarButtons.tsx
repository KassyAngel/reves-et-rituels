import { useState, useRef } from "react";
import { Crown, MoreVertical } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { PremiumModal } from "./PremiumModal";
import { LegalModal } from "./LegalModal";

export function TopBarButtons() {
  const { lang } = useLanguage();
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const legalBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div className="flex items-center gap-0.5">

        {/* ⋮ Menu en premier */}
        <button
          ref={legalBtnRef}
          onClick={() => setLegalOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl active:scale-95 transition-transform"
        >
          <MoreVertical size={18} strokeWidth={1.5} className="text-slate-400" />
          <span className="text-[9px] font-medium text-slate-400">
            {lang === "fr" ? "Menu" : "Menu"}
          </span>
        </button>

        {/* 👑 Premium en second */}
        <button
          onClick={() => setPremiumOpen(true)}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl active:scale-95 transition-transform"
        >
          <Crown size={18} strokeWidth={1.5} className="text-yellow-500 mb-0.5" />
          <span className="text-[9px] font-semibold text-yellow-500/90">Premium</span>
        </button>

      </div>

      <PremiumModal open={premiumOpen} onClose={() => setPremiumOpen(false)} />
      <LegalModal open={legalOpen} onClose={() => setLegalOpen(false)} anchorRef={legalBtnRef} />
    </>
  );
}