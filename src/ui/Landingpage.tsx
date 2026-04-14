import { useCurrentAccount } from "@mysten/dapp-kit";
import { ConnectButton } from "@mysten/dapp-kit";
import { Hero } from "./Hero";
import { Dashboard } from "./Dashboard";
function LandingPage() {
    const account = useCurrentAccount();

    return (
        <div className="min-h-screen flex flex-col text-slate-100" style={{ fontFamily: "'DM Sans', sans-serif", background: "#080c10" }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
            `}</style>
            <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-b border-white/[0.07] backdrop-blur-xl bg-[#080c10]/85">
                <span className="text-xl font-extrabold text-cyan-400 tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                    ◈ SuiView
                </span>
                <ConnectButton />
            </nav>

            {account ? (
                <main className="flex-1 flex justify-center">
                    <Dashboard address={account?.address} />
                </main>
            ) : (
                <>
                    <Hero />
                    <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-white/[0.07] divide-x divide-white/[0.07]">
                        {[
                            { icon: "◎", title: "NFT Gallery", desc: "Xem toàn bộ NFT với hình ảnh và metadata." },
                            { icon: "◈", title: "Token Balance", desc: "Theo dõi số dư SUI và tất cả các token khác." },
                            { icon: "◇", title: "Real-time", desc: "Dữ liệu được lấy trực tiếp từ SUI blockchain." },
                        ].map((item) => {
                            return (
                                <div
                                    key={item.title}
                                    className="px-9 py-12 hover:bg-white/[0.02] transition-colors"
                                >
                                    <span className="block text-3xl text-cyan-400 mb-4">
                                        {item.icon}
                                    </span>
                                    <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Syne', sans-serif" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </>
            )
        }
        </div>
    )
}

export { LandingPage };