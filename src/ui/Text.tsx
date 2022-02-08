import React, {ReactNode} from 'react'
import styled from 'styled-components'
import {variables} from '../assets'

type Props = {
  children: ReactNode
  bold?: boolean | undefined
}

export const Text = ({children , bold = false}: Props) => {
  return (
    <Wrapper bold={bold}>{children}</Wrapper>
  )
}

const Wrapper = styled.span<{bold: boolean}>`
  display: block;
  font-size: ${variables.size.textCommon};
  color: ${variables.colors.primaryDark};
  margin-bottom: 4px;
  padding: ${props => props.bold ? '8px 0' : '0'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
`
