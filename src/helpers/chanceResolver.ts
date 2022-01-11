import {GradeObjType} from "../dto/types"


export const chanceResolver = (
  gradeObj: GradeObjType,
  enhanceGrade: string,
  lucks: string,
  type: 'Jewelry' | 'Stuff'
) => {
  const lucksToNum = Number(lucks)
  const min = gradeObj!.min!
  const max = gradeObj!.max!
  const cap = gradeObj!.cap!
  const prevStep = gradeObj!.prevCapStep!
  const afterStep = gradeObj!.afterCapStep!
  const capChance = gradeObj!.capChance!

  if (enhanceGrade === 'V' && lucksToNum * prevStep <= max) {
    return min + (lucksToNum * prevStep)
  } else if (enhanceGrade === 'V' && lucksToNum * prevStep > max) {
    return max
  } else if (type === 'Stuff' && enhanceGrade === 'IV' && lucksToNum * prevStep <= max) {
    return min + (lucksToNum * prevStep)
  } else if (type === 'Stuff' && enhanceGrade === 'IV' && lucksToNum * prevStep > max) {
    return max
  } else {
    //Return min chance
    if (lucksToNum <= 0) return min

    //Return chance lower cap
    if (lucksToNum <= cap) return (lucksToNum * prevStep) + min

    //Return chance after cap bigger max
    if (lucksToNum > cap
      && capChance + ((lucksToNum - cap) * afterStep) >= max
    ) return max

    //Return chance after cap lower max
    if (lucksToNum > cap
      && capChance + ((lucksToNum - cap) * afterStep) < max
    ) return capChance + ((lucksToNum - cap) * afterStep)
  }
}
