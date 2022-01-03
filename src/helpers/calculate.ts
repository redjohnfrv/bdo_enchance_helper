import {InputValueType} from '../dto/types'
import {chanceResolver, gradeResolver} from './'

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
  // FIXME log to delete
  console.log(getChance)

}
