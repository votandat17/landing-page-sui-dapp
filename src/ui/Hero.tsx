import { ConnectButton } from "./ConnectButton";

function Hero() {
    return (
        <section className="relative overflow-hidden flex justify-center px-5 py-28">
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div>
                    <div className="absolute top-[-150px] left-1/2 -translate-x-[60%] w-[500px] h-[500px] rounded-full bg-cyan-400/[0.08] blur-[80px]" />
                    <div className="absolute bottom-[-50px] right-[15%] w-[300px] h-[300px] rounded-full bg-blue-500/[0.07] blur-[80px]" />
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
                        }}
                    >
                    </div>
                </div>
            </div>

            <div className="relative max-w-2xl text-center">
                <div className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
                    Build on Sui
                </div>
                <h1
                    className="font-extrabold leading-[1.05] tracking-[-2px] mb-5 text-slate-100"
                    style={{ fontSize: "clamp(42px, 6vw, 72px)", fontFamily: "'Syne', sans-serif" }}

                >
                    Your Web3{" "}Experience, Simplified.
                    <span 
                        style={{
                            background: "linear-gradient(135deg, #22d3ee 0%, #5078ff 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                        }}
                    >
                        Portfolio Hub for Sui NFTs and Tokens
                    </span>
                </h1>
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md mx-auto mb-10">
                    Connect your Sui wallet to view and manage your NFTs and tokens in one sleek dashboard. Built with the latest Sui SDKs and React, our dApp offers a seamless and intuitive experience for all your Web3 needs.
                </p>
                <ConnectButton />
            </div>
        </section>
    )
    
}

export { Hero };