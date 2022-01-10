import React from 'react'
import styled from 'styled-components'
import {variables} from '../../assets'
import {FieldRenderProps} from 'react-final-form'

type InputFiledProps = {
  label: string
  defaultValue: string
  placeholder?: string
  width?: string
  mask: boolean
}

type Props = FieldRenderProps<string> & InputFiledProps

export const Input = (
  {input,
   placeholder,
   meta,
   label,
   width = '150',
   defaultValue,
   mask = false,
  }: Props) => {
  return (
    <Wrapper>
      {label && <label>{label}</label>}
      <InputWrapper width={width} mask={mask}>
        <input
          {...input}
          placeholder={placeholder}
          value={defaultValue}
        />
        {mask
          && <MaskedInput>
            <span>.</span>
            <span>.</span>
            <span>.</span>
             </MaskedInput>
        }
        {meta.error && meta.touched && <ErrorLabel>{meta.error}</ErrorLabel>}
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
const InputWrapper = styled.div<{width: string, mask: boolean}>`
  position: relative;
  font-variant-numeric: tabular-nums;

  & input {
    font-family: 'Courier New', sans-serif;
    height: 15px;
    width: ${props => props.width + `px;`};
    font-size: 18px;
    text-align: right;
    letter-spacing: ${props => !props.mask ? '' : '1.3px'};
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
const MaskedInput = styled.div`
  position: absolute;
  top: 6px;
  left: -40px;
  width: 100%;
  height: 100%;
  text-align: right;
  
  & span {
    padding-left: 33px;
    color: ${variables.colors.danger};
    size: 14px;
  }
`
