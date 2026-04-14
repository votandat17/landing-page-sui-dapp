import { useSuiClientQuery } from "@mysten/dapp-kit"
import { StatCard } from "./StatCard";
function SuiBalance( { address }: { address: string}) {
    const { data, isLoading } = useSuiClientQuery("getBalance", { owner: address, coinType: "0x2::sui::SUI" });
    return (
        <StatCard
            label="SUI Balance"
            value={isLoading? '...' : data?.totalBalance ?? 0}
            unit="SUI"
        />
    )
}

export { SuiBalance };