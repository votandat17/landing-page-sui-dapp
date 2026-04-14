import { useSuiClientQuery } from "@mysten/dapp-kit"
import { StatCard } from "./StatCard";
function TokenCount({ address }: { address: string }){
    const { data, isLoading } = useSuiClientQuery("getAllBalances", { owner: address });
    const count = data?.filter((balance) => balance.coinType !== "0x2::sui::SUI" && Number(balance.totalBalance) > 0).length ?? 0;
    return (
        <StatCard
            label="Other Tokens"
            value={isLoading ? '...' : count}
            unit="types"
        />
    )
}

export { TokenCount };