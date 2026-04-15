import { useSuiClientQuery } from "@mysten/dapp-kit";
import { shortenAddress } from "./ShortenAddress";
function NFTGrid({ address }: { address: string }) {
    const { data, isLoading } = useSuiClientQuery("getOwnedObjects", {owner: address, options: {showDisplay: true, showType: true}} );
    const nfts = data?.data.filter((object) => {
        const display = object.data?.display?.data;
        return display && (display.name || display.image_url);
    });

    if(isLoading) {
        return (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[...Array(6)].map((_, index) => {
                    return (
                        <div key={index} className="rounded-xl bg-white/[0.03] border border-white/[0.07] aspect-square animate-pulse" />
                    )
                })}
            </div>
        )
    }

    if(!nfts || nfts.length === 0) {
        return (
            <div className="flex flex-col items-center gap-3 py-20 text-slate-600">
                <span className="text-4xl">◇</span>
                <p className="text-sm">No NFTs found</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {nfts.map((nft) => {
                const display = nft.data?.display?.data;
                const id = nft.data?.objectId;
                return (
                    <div
                        key={id}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.03] overflow-hidden hover:border-white/[0.13] hover:-translate-y-0.5 transition-all duration-200"
                    >
                        {display?.image_url ? (
                            <img 
                                src={`${display.image_url}`} 
                                alt={`${display.name || "NFT"}`} 
                                className="w-full aspect-square object-cover bg-white/5"
                                onError={(e) => {
                                    return (e.target as HTMLImageElement).style.display = "none";
                                }}
                            />

                        ) : (
                            <div className="w-full aspect-square flex items-center justify-center bg-white/[0.03] text-slate-700 text-4xl">
                                ◈
                            </div>
                        )}

                        <div className="px-3 py-2.5">
                            <p className="text-sm font-medium text-slate-200 truncate">{`${display?.name || "Unnamed NFT"}`}</p>
                            <p className="text-xs text-slate-500 truncate">{shortenAddress(id ?? "")}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export { NFTGrid };