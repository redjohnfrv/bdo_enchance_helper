import React from 'react'
import styled from 'styled-components'
import {FieldRenderProps} from 'react-final-form'

type InputFiledProps = {
  placeholder?: string
  label: string
  width?: string
  disabled?: boolean
  defaultValue: string
}

type Props = FieldRenderProps<string> & InputFiledProps

export const Input = ({input, placeholder, label, width='150', disabled, defaultValue}: Props) => {
  return (
    <Wrapper width={width}>
      {label && <label>{label}</label>}
      <input
        {...input}
        disabled={disabled}
        placeholder={placeholder}
        value={defaultValue}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div<{width: string}>`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin: 12px 0;
  
  & label {
    width: 250px;
  }
  
  & input {
    height: 15px;
    width: ${props => props.width + `px;`};
  }
`
