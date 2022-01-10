import React from 'react'
import {formatter} from '../../helpers'
import styled from 'styled-components'
import {EnhancedJewType} from '../../redux/jewerly/jewSlice'

type Props = {
  state: EnhancedJewType
}

export const ResultBlock = ({state}: Props) => {
  return (
    <Wrapper>
      <div>
        <h2>prev:</h2><br />
        <span>item price: {formatter(state.value.commonItemPrice)} $</span><br />
        <span>item start price: {formatter(state.value.startItemPrice)} $</span><br />
        <span>item success price: {formatter(state.value.enhancedItemPrice)} $</span><br />
        <span>lucks: {state.value.lucks}</span><br />
        <span>grade success: {state.value.enhanceGrade}</span>
      </div><br />
      <div>SUCCESS: {state.chance} %</div><br />
      <div>RAW: {formatter(state.rawProfit)} $</div><br />
      <div>NO PREM: {formatter(state.noPremProfit)} $</div><br />
      <div>PREM: {formatter(state.premProfit)} $</div><br />
    </Wrapper>
  )
}

const Wrapper = styled.div``
