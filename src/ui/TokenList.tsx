import { useSuiClientQuery } from "@mysten/dapp-kit";
import { shortenAddress } from "./ShortenAddress";
import { mistToSui } from "./misToSui";

function TokenList({ address }: { address: string }) {
    const { data, isLoading } = useSuiClientQuery("getOwnedObjects", {owner: address});
    if (isLoading) {
        return (
            <div>
                {[...Array(4)].map((_, index) => {
                    return (
                        <div
                            key={index}
                            className="h-16 rounded-xl bg-white/[0.03] border border-white/[0.07] animate-pulse"
                        />
                    )
                })}
            </div>
        )
    }

    const tokens = data?.data ?? [];
    
    if(tokens.length === 0) {
        return (
            <div className="flex flex-col items-center gap-3 py-20 text-slate-600">
                <span className="text-4xl">◇</span>
                <p className="text-sm">No tokens found</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-2">
            {tokens.map((token: any) => {
                const parts = token.coinType.split("::");
                const name = parts[parts.length - 1] ?? token.coinType;
                const isSui = token.coinType === "0x2::sui::SUI";
                return (
                    <div
                        key={token.coinType}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-colors
                            ${isSui ? "border-cyan-400/20 bg-cyan-400/[0.04] hover:border-cyan-400/35" : "border-white/[0.07] bg-white/[0.03] hover:border-white/[0.13]"}
                        `}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 font-bold text-sm">
                                {name[0]?.toUpperCase() }
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-200">{isSui? "SUI": name}</p>
                                <p className="text-xs text-slate-600 font-mono">{shortenAddress(parts[0] ?? "")}</p>
                            </div>
                        </div>

                        <p className="font-bold">${isSui ? `${mistToSui(token.balance)}` : `${token.balance}`}</p>
                    </div>
                )
            })}
        </div>
    )
}

export { TokenList };