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
import { requestConsentInfo, initAdMob, showBanner } from "@/lib/admob";

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
  useEffect(() => {
    const init = async () => {
      await requestConsentInfo(); // ← 1. Popup RGPD si nécessaire
      await initAdMob();          // ← 2. Init AdMob
      await showBanner();         // ← 3. Bannière
    };
    init();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
        <NotificationPrompt />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;