export const formatter = (value: string | number) => {
  if (typeof value === 'string') {
   return new Intl.NumberFormat('ru-RU').format(Math.round(Number(value)))
  } else {
    return new Intl.NumberFormat('ru-RU').format(Math.round(value))
  }
}
