import { useState } from "react";
import { shortenAddress } from "./ShortenAddress";
import { TokenList } from "./TokenList";
import { NFTGrid } from "./NFTGrid";
import { TokenCount } from "./TokenCoutnt";
import { SuiBalance } from "./SuiBalance";
import { NFTCount } from "./NFTCount";
function Dashboard({ address }: { address: string }) {
    const [tab, setTab] = useState<"tokens" | "nfts">("tokens");

    return (
        <div className="max-w-4xl mx-auto px-5 py-12 w-full">
            <div className="flex items-baseline gap-4 mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-slate-100" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Portfolio
                </h2>
                <span className="text-xs text-slate-600 font-mono">{shortenAddress(address)}</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
                <SuiBalance address={address} />
                <TokenCount address={address} />
                <NFTCount address={address} />
            </div>

            <div className="flex gap-1 border-b border-white/[0.07] mb-7">
                {(["tokens", "nfts"] as const).map((type) => {
                    return (
                        <button 
                            className={`px-5 py-2.5 text-sm font-medium border-b-2 -mb-px transition-colors
                                ${tab === type
                                ? "border-cyan-400 text-cyan-400"
                                : "border-transparent text-slate-500 hover:text-slate-300"
                            }`}

                            key={type}
                            onClick={() => setTab(type)}
                        >
                            {type === "tokens" ? "Tokens" : "NFTs"}
                        </button>
                    )
                })}
            </div>
            {tab === "tokens" ? <TokenList address={address} /> : <NFTGrid address={address} />}
        </div>
    )
}


export { Dashboard };