export const profitResolver = (
  defaultPrice: string,
  beforePrice: string,
  afterPrice: string,
  chance: string) => {

  const dp = Number(defaultPrice)
  const bp = Number(beforePrice)
  const ap = Number(afterPrice)
  const ch = Number(chance)/100

  const rawProfit = (ap * ch) - (dp + bp)
  const noPremProfit = rawProfit > 0 ? rawProfit * .65 : rawProfit + (rawProfit * .35)
  const premProfit = rawProfit > 0 ? rawProfit * .845 : rawProfit + (rawProfit * .155)

  return {rawProfit, noPremProfit, premProfit}

}
