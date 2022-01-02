import React from 'react'
import styled from 'styled-components'
import { variables } from '../../assets'

type CustomButtonType = 'Primary' | 'Warning'

type Props = {
  text: string
  customType?: CustomButtonType
}

export const Button = ({text, customType='Primary'}: Props) => {
  return (
    <Wrapper type="submit" customType={customType}>
      {text}
    </Wrapper>
  )
}

const Wrapper = styled.button<{customType: CustomButtonType}>`
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
`
