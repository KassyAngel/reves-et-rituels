import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import { useLocation } from "wouter";
import { Layout } from "@/components/Layout";
import Dreams from "@/pages/Dreams";
import Home from "@/pages/Home";
import Rituals from "@/pages/Rituals";
import Journal from "@/pages/Journal";
import Moon from "@/pages/Moon";
import NotFound from "@/pages/not-found";
import Prayers from "@/pages/Prayers";
import Plants from "@/pages/Plants";
import { NotificationPrompt } from "@/components/NotificationPrompt";
import { requestConsentInfo, initAdMob } from "@/lib/admob";
import { getNotificationSettings, scheduleDaily } from "@/lib/notifications";
import { useRateApp } from "@/hooks/use-rate-app";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const scrollContainer = document.querySelector(".overflow-y-auto");
    if (scrollContainer) scrollContainer.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dreams" component={Dreams} />
        <Route path="/rituals" component={Rituals} />
        <Route path="/journal" component={Journal} />
        <Route path="/moon" component={Moon} />
        <Route path="/prayers" component={Prayers} />
        <Route path="/plants" component={Plants} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  const { checkAndPrompt } = useRateApp();
  useEffect(() => {
    const init = async () => {
      await requestConsentInfo();
      await initAdMob();
      checkAndPrompt();
     
      // Re-schedule 365 jours à chaque ouverture de l'app
      try {
        const settings = await getNotificationSettings();
        if (settings?.enabled) {
          const savedLang = (localStorage.getItem("rr_lang") as "fr" | "en") || "fr";
          await scheduleDaily(settings.hour, settings.minute, savedLang);
        }
      } catch {
        // Web ou permission révoquée — pas de crash
      }
    };
    init();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base="">
        <Router />
        <NotificationPrompt />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;