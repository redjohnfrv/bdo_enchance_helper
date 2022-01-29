import React from 'react'
import styled from 'styled-components'
import {variables} from '../../assets'
import {formatter} from '../../helpers'

type Props = {
  text: string,
  value: string | number
  symbol?: string
  format?: boolean
}

export const SpanLine = ({text, value, symbol, format}: Props) => {
  return (
    <Wrapper>
      {text}: {format ? formatter(value) : value} {symbol}
    </Wrapper>
  )
}

const Wrapper = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: ${variables.size.textCommon};
  color: ${variables.colors.primaryDark};
`
