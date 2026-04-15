import { useConnectWallet, useDisconnectWallet, useCurrentAccount, useWallets } from "@mysten/dapp-kit";
import { useState } from "react";
import { shortenAddress } from "./ShortenAddress";


function ConnectButton() {
    const wallets = useWallets();
    const { mutate: connectWallet } = useConnectWallet();
    const { mutate: disconnectWallet } = useDisconnectWallet();
    const currnentAccount = useCurrentAccount();
    const [ open, setOpen] = useState(false);

    if(currnentAccount) {
        return (
            <div className="flex items-center gap-2">
                <div className="flex items-center gap2 bg-white/5 border rounded-lg border-white/10 px-3 py-2 text-sm font-mono text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]" />
                    {shortenAddress(currnentAccount.address)}
                </div>
                <button 
                    onClick={() => disconnectWallet()}
                    className="border border-white/10 text-slate-400 hover:border-red-500/50 hover:text-red-400 transition-colors text-sm px-3 py-2 rounded-lg"
                >
                    Disconnect
                </button>
            </div>
        )
    }

    return (
        <div className="relative">
            <button
                onClick={() => setOpen((!open))}
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
                Connect Wallet
            </button>

            {open && (
                <div>
                    {wallets.length > 0 ? (
                        wallets.map((wallet) => (
                            <button 
                                key={wallet.name}
                                onClick={() => {connectWallet({ wallet: wallet }); setOpen(false); }}
                                className="flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:bg-white/5 transition-colors"
                            >
                                {wallet.icon && (<img src={wallet.icon} alt={wallet.name} className="w-5 h-5" />)}
                                {wallet.name}
                            </button>
                        ))
                    ) : (
                        <p className="text-slate-500 text-sm text-center px-3 py-4">
                            No wallets found. 
                            <a 
                                href="https://suiwallet.com" 
                                className="text-cyan-400 hover:text-cyan-300"
                                target="_blank"
                                rel= "noreferrer"
                            >
                                Please install a compatible wallet extension.
                            </a>
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}


export { ConnectButton };