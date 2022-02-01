import React from 'react'
import styled from 'styled-components'
import {variables} from '../../assets'

type CustomButtonType = 'Primary' | 'Warning'

type Props = {
  text: string
  customType?: CustomButtonType
  disabled?: boolean
}

export const Button = ({text, customType='Primary', disabled}: Props) => {
  return (
    <Wrapper type="submit" customType={customType} disabled={disabled}>
      {text}
    </Wrapper>
  )
}

const Wrapper = styled.button<{customType: CustomButtonType, disabled?: boolean}>`
  width: max-content;
  height: 36px;
  line-height: 36px;
  margin: 12px 0;
  padding: 0 24px;
  color: ${variables.colors.white};
  border: none;
  border-radius: ${variables.size.borderRadius};
  background: ${props => props.customType === 'Primary'
    ? variables.colors.primary
    : props.customType === 'Warning'
    ? variables.colors.warning
    : 'none'
  };
  opacity: ${props => props.disabled ? '.5' : '1'};
`
