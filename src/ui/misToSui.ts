function mistToSui(mist: string): string {
    return (Number(mist) / 1_000_000_000).toFixed(4);
}

export { mistToSui };