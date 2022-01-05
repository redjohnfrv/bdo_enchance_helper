export const profitResolver = (
  defaultPrice: string,
  beforePrice: string,
  afterPrice: string,
  chance: string) => {

  const dp = Number(defaultPrice)
  const bp = Number(beforePrice)
  const ap = Number(afterPrice)
  const ch = Number(chance)

  return String((ap - bp - dp) * (ch / 100))
}
