export type InputValueType = {
  commonItemPrice: string
  enhanceGrade: string
  enhancedItemPrice: string
  startItemPrice: string
  lucks: string
}

export type EnhancedType = {
  chance: string
  rawProfit: string
  noPremProfit: string
  premProfit: string
  value: InputValueType
}

export type GradeObjType = {
  min: number
  max: number
  cap: number | null
  capChance: number | null
  prevCapStep: number
  afterCapStep: number
}

export type GradesObjType = {
  I: GradeObjType,
  II: GradeObjType,
  III: GradeObjType,
  IV: GradeObjType,
  V: GradeObjType,
}

export enum EGradesToNums {
  'II' = .28,
  'III' = .14,
  'IV' = .18,
  'V' = .4
}
