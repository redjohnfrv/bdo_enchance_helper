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

  const getAccObj = gradeResolver(enhanceGrade)
  const getChance = chanceResolver(getAccObj!, enhanceGrade, lucks)!.toFixed(2)
  const getProfit = profitResolver(commonItemPrice, startItemPrice, enhancedItemPrice, getChance)

  // FIXME log to delete
  console.log(getChance)
  console.log(getProfit)

  return {getChance, getProfit}

}
