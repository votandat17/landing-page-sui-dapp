import { useSuiClientQuery } from "@mysten/dapp-kit";
import { StatCard } from "./StatCard";

function NFTCount({ address }: { address: string }) {
    const { data, isLoading } = useSuiClientQuery("getOwnedObjects", {owner: address, options: {showDisplay: true}});
    const count = data?.data.filter((object) => {
        const display = object.data?.display?.data;
        return display && (display.name || display.image_url);
    }
    ).length ?? 0
    return (
        <StatCard label="NFTs" value={isLoading ? '...' : count} unit="items" accent />
    )
}

export { NFTCount };