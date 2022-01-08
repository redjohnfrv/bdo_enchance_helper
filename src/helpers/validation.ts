import {FieldValidator} from 'final-form'

const numberPattern = /^\d+$/

export const validators = {
  required: (value: string) => (typeof value !== 'string')
    ? 'Required'
    : (value.trim() ? undefined : 'Required'),
  validInput: (value: string) => value.match(numberPattern)
    ? undefined
    : 'Required',
  // inputLength: (value: string) => (value.length < 0)
  //   ? 'Value is too short!'
  //   : undefined
}

export const composeValidators = (...validators: FieldValidator<any>[]) => (value: any) =>
  validators.reduce((error, validator) =>
    error || validator(value, {}), undefined)
