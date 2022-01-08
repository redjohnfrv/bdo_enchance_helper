import { NULL } from '../constants'
import {InputValueType} from '../dto/types'
import {chanceResolver, gradeResolver, profitResolver} from './'

export const calculateJew = (value: InputValueType) => {
  const {
    commonItemPrice = NULL,
    enhanceGrade = NULL,
    enhancedItemPrice = NULL,
    startItemPrice = NULL,
    lucks = NULL,
  } = value

  const accObj = gradeResolver(enhanceGrade)
  const chance = chanceResolver(accObj!, enhanceGrade, lucks)!.toFixed(2)
  const {
    rawProfit,
    noPremProfit,
    premProfit,
  } = profitResolver(commonItemPrice, startItemPrice, enhancedItemPrice, chance)

  return {chance, rawProfit, noPremProfit, premProfit, value}

}
