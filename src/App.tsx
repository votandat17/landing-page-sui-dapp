import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SuiClientProvider, WalletProvider } from "@mysten/dapp-kit";
import { LandingPage } from "./ui/LandingPage.tsx";
import "@mysten/dapp-kit/dist/index.css";

const queryClient = new QueryClient();
const networks = {
  testnet: {
    url: "https://fullnode.testnet.sui.io:443",
    network: "testnet" as const,
  },
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networks} defaultNetwork="testnet">
        <WalletProvider autoConnect>
          <LandingPage />
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}