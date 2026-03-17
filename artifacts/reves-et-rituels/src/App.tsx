import { Switch, Route, Router as WouterRouter, Redirect } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import Dreams from "@/pages/Dreams";
import Home from "@/pages/Home";
import Rituals from "@/pages/Rituals";
import Journal from "@/pages/Journal";
import Moon from "@/pages/Moon";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/dreams" component={Dreams} />
        <Route path="/rituals" component={Rituals} />
        <Route path="/journal" component={Journal} />
        <Route path="/moon" component={Moon} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
