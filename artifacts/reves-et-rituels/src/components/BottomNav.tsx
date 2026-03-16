import { Link, useLocation } from "wouter";
import { useLanguage } from "@/hooks/use-language";
import { Sparkles, Moon, BookOpen, Feather } from "lucide-react";
import { motion } from "framer-motion";

export function BottomNav() {
  const [location] = useLocation();
  const { t } = useLanguage();

  const tabs = [
    { href: "/dreams", label: t.nav.dreams, icon: Feather },
    { href: "/rituals", label: t.nav.rituals, icon: Sparkles },
    { href: "/journal", label: t.nav.journal, icon: BookOpen },
    { href: "/moon", label: t.nav.moon, icon: Moon }
  ];

  return (
    <div className="fixed bottom-0 w-full max-w-[430px] z-50 pb-safe">
      <div className="glass-panel mx-4 mb-4 rounded-2xl p-2 flex justify-between items-center relative overflow-hidden">
        {tabs.map((tab) => {
          const isActive = location === tab.href || (location === "/" && tab.href === "/dreams");
          const Icon = tab.icon;
          
          return (
            <Link key={tab.href} href={tab.href} className="flex-1 relative">
              <div className="flex flex-col items-center justify-center p-2 rounded-xl cursor-pointer group">
                <div className={`relative z-10 transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  <Icon strokeWidth={isActive ? 2.5 : 1.5} size={24} className="mb-1" />
                </div>
                <span className={`text-[10px] font-medium transition-colors z-10 ${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground'}`}>
                  {tab.label}
                </span>
                
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-primary/10 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
