export const profitResolver = (
  defaultPrice: string,
  beforePrice: string,
  afterPrice: string,
  chance: string) => {

  const dp = Number(defaultPrice)
  const bp = Number(beforePrice)
  const ap = Number(afterPrice)
  const ch = Number(chance)/100

  const rawProfit = ((ap * ch) - (bp * (1 - ch))) - dp
  const noPremProfit = rawProfit * .65
  const premProfit = rawProfit * .845

  return {rawProfit, noPremProfit, premProfit}
}
