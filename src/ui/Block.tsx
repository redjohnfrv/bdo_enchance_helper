import React, {ReactNode} from 'react'
import styled from 'styled-components'
import {variables} from '../assets'

type Props = {
  children: ReactNode
}

export const Block = ({children}: Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 24px;
  border: 1px solid ${variables.colors.black};
  border-radius: ${variables.size.borderRadius};
`
