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
