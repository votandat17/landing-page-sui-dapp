
function StatCard({
    label,
    value,
    unit,
    accent = false,
} : {
    label: string;
    value: string | number;
    unit: string;
    accent?: boolean;
}) {
    return (
        <div
            className={`flex flex-col gap-1 rounded-xl p-6 border transition-colors ${accent ? "border-cyan-400/25 bg-cyan-400/5 hover:border-cyan-400/40" : "border-white/[0.07] bg-white/[0.03] hover:border-white/[0.13]"}`}
                
        >
            <span className="text-xs uppercase tracking-widest text-slate-500">{label}</span>
            <span className={`font-bold text-4xl leading-none ${accent ? "text-cyan-400" : "text-slate-100"}`}>{value}</span>
            <span className="text-xs text-slate-600">{unit}</span>
        </div>
    )
}


export  {StatCard};