import { useState, useRef } from "react";
import { MoreVertical } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { LegalModal } from "./LegalModal";

export function TopBarButtons() {
  const { lang } = useLanguage();
  const [legalOpen, setLegalOpen] = useState(false);
  const legalBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
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

      <LegalModal
        open={legalOpen}
        onClose={() => setLegalOpen(false)}
        anchorRef={legalBtnRef}
      />
    </>
  );
}