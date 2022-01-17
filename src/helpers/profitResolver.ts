import {EGradesToNums} from '../dto/types'

export const profitResolver = (
  defaultPrice: string,
  beforePrice: string,
  afterPrice: string,
  chance: string,
  type: 'Jewelry' | 'Stuff',
  enhanceGrade: string,
  ) => {

  //@ts-ignore
  console.log('EG: ', EGradesToNums[enhanceGrade])

  const dp = Number(defaultPrice)
  const bp = Number(beforePrice)
  const ap = Number(afterPrice)
  const ch = Number(chance)/100

  //enhance try price for stuff (enhance stone + cookie)
  const etp = 4_500_000

  let rawProfit = 0, noPremProfit = 0, premProfit = 0

  switch (type) {
    case 'Jewelry':
      rawProfit = (ap * ch) - (dp + bp)
      noPremProfit = rawProfit > 0
        ? rawProfit * .65
        : rawProfit + (rawProfit * .35)
      premProfit = rawProfit > 0
        ? rawProfit * .845
        : rawProfit + (rawProfit * .155)
    break
    case 'Stuff':
      // TODO пересчитать правильность, добавить рассчет noPrem & Prem
      enhanceGrade !== 'I'
        //@ts-ignore
        ? rawProfit = (ap * ch) - (bp * EGradesToNums[enhanceGrade]) - etp
        : rawProfit = (ap - bp) - (100 / (ch * 100)) * etp
    break
    default: return {rawProfit, noPremProfit, premProfit}
  }

  return {rawProfit, noPremProfit, premProfit}

}
