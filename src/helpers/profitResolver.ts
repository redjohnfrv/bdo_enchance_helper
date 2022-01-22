import {EGradesToNums} from '../dto/types'

// TODO перепроверить правильность рассчетов

export const profitResolver = (
  defaultPrice: string,
  beforePrice: string,
  afterPrice: string,
  chance: string,
  type: 'Jewelry' | 'Stuff',
  enhanceGrade: string,
  ) => {

  const dp = Number(defaultPrice)
  const bp = Number(beforePrice)
  const ap = Number(afterPrice)
  const ch = Number(chance)/100
  const taxNoPrem = .65
  const taxPrem = .845

  //enhancing try cost for the boss stuff (around an enhancing stone + 5 cookies)
  const etp = 14_500_000

  let rawProfit = 0, noPremProfit = 0, premProfit = 0

  switch (type) {
    case 'Jewelry':
      rawProfit = (ap * ch) - (dp + bp)
      noPremProfit = aboutPremProfit(rawProfit, taxNoPrem)
      premProfit = aboutPremProfit(rawProfit, taxPrem)
    break
    case 'Stuff':
      enhanceGrade !== 'I'
        //@ts-ignore
        ? rawProfit = (ap * ch) - (bp * EGradesToNums[enhanceGrade]) - etp
        : rawProfit = (ap - bp) - (100 / (ch * 100)) * etp
      noPremProfit = aboutPremProfit(rawProfit, taxNoPrem)
      premProfit = aboutPremProfit(rawProfit, taxPrem)

    break
    default: return {rawProfit, noPremProfit, premProfit}
  }

  return {rawProfit, noPremProfit, premProfit}

}

//resolving an auction proceeds
function aboutPremProfit(rawProfit: number, tax: number) {
 return rawProfit > 0
   ? rawProfit * tax
   : rawProfit + (rawProfit * (1 - tax))
}
