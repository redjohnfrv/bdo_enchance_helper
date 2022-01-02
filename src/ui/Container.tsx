import React, {ReactNode} from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

export const Container = ({children}: Props) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`
