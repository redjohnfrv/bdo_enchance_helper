const numberPattern = /^\d+$/

export const validation = {
  validInput: (value: string) => value && value.match(numberPattern)
    ? undefined
    : 'Required number',
}
