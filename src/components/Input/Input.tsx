import React from 'react'
import styled from 'styled-components'
import {variables} from '../../assets'
import {FieldRenderProps} from 'react-final-form'

type InputFiledProps = {
  placeholder?: string
  label: string
  width?: string
  defaultValue: string
}

type Props = FieldRenderProps<string> & InputFiledProps

export const Input = ({input, placeholder, meta, label, width='150', defaultValue}: Props) => {

  return (
    <Wrapper>
      {label && <label>{label}</label>}
      <InputWrapper width={width}>
        <input
          {...input}
          placeholder={placeholder}
          value={defaultValue}
        />
        {meta.error && <ErrorLabel>{meta.error}</ErrorLabel>}
      </InputWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin: 18px 0;
  
  & label {
    width: 250px;
  }
`
const InputWrapper = styled.div<{width: string}>`
  position: relative;
  width: ${props => props.width + `px;`};

  & input {
    height: 15px;
  }
`
const ErrorLabel = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  font-size: 10px;
  color: ${variables.colors.danger};
  white-space: nowrap;
`
