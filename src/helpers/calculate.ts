import {NULL} from '../constants'
import {InputValueType} from '../dto/types'
import {
  chanceResolver,
  jewGradeResolver,
  profitResolver,
  stuffGradeResolver
} from './'

export const calculate = (value: InputValueType, type: 'Jewelry' | 'Stuff') => {
  const {
    commonItemPrice = NULL,
    enhanceGrade = NULL,
    enhancedItemPrice = NULL,
    startItemPrice = NULL,
    lucks = NULL,
  } = value

  const gradeObj = type === 'Jewelry' ? jewGradeResolver(enhanceGrade) : stuffGradeResolver(enhanceGrade)
  const chance = chanceResolver(gradeObj!, enhanceGrade, lucks, type)!.toFixed(2)
  const {
    rawProfit,
    noPremProfit,
    premProfit,
  } = profitResolver(commonItemPrice, startItemPrice, enhancedItemPrice, chance, type)

  return {chance, rawProfit, noPremProfit, premProfit, value}

}
