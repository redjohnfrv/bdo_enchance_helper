import {InputValueType} from '../dto/types'
import {chanceResolver, gradeResolver, profitResolver} from './'

export const calculateAcc = (value: InputValueType) => {
  const {
    commonItemPrice,
    enhanceGrade,
    enhancedItemPrice,
    startItemPrice,
    lucks,
  } = value

  const accObj = gradeResolver(enhanceGrade)
  const chance = chanceResolver(accObj!, enhanceGrade, lucks)!.toFixed(2)
  const {
    rawProfit,
    noPremProfit,
    premProfit,
  } = profitResolver(commonItemPrice, startItemPrice, enhancedItemPrice, chance)

  return {chance, rawProfit, noPremProfit, premProfit}

}
