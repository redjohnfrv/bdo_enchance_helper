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

export type ItemLabelType = {
  label1: string
  label2: string
  label3: string
  label4: string
  label5: string
  tooltip1: string
  tooltip2: string
  tooltip3: string
  tooltip4: string
  tooltip5: string
}

export type LabelsType = {
  jewelry: ItemLabelType,
  stuff: ItemLabelType,
}
