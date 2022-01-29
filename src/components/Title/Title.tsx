import React from 'react'
import styled from 'styled-components'
import {variables} from '../../assets'

type Props = {
  title: string
}

export const Title = ({title}: Props) => {
  return (
    <Wrapper>
      {title}:
    </Wrapper>
  )
}

const Wrapper = styled.h2`
  margin: 0 0 12px;
  padding: 0;
  font-size: ${variables.size.titleH2};
  color: ${variables.colors.primaryDark};
`
