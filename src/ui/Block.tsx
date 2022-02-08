import React, {ReactNode} from 'react'
import styled from 'styled-components'
import {variables} from '../assets'

type Props = {
  children: ReactNode
  bg?: string
}

export const Block = ({children, bg=''}: Props) => {
  return (
    <Wrapper bg={bg}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<{bg: string}>`
  height: 291px;
  padding: 24px;
  background: ${props => `url(${props.bg}) right / contain no-repeat`};
  border: 1px solid ${variables.colors.black};
  border-radius: ${variables.size.borderRadius};
`
