import React from 'react'
import styled from 'styled-components'
import {FieldRenderProps} from 'react-final-form'

type InputFiledProps = {
  placeholder?: string
  label: string
  disabled?: boolean
}

type Props = FieldRenderProps<string> & InputFiledProps

export const Input = ({input, placeholder, label, disabled}: Props) => {
  return (
    <Wrapper>
      {label && <label>{label}</label>}
      <input
        {...input}
        disabled={disabled}
        placeholder={placeholder}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin-bottom: 12px;
  
  & label {
    width: 250px;
  }
  
  & input {
  }
`
