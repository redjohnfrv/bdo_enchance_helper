import React from 'react'

type Props = {
  options: string[]
}

export const Options = ({options}: Props) => {
  return (
    <>
      {options.map((item, index) => <option key={index} value={item}>{item}</option>)}
    </>
  )
}
