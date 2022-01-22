import React from 'react'
import styled from 'styled-components'
import {formatter} from '../../helpers'
import {EnhancedType} from '../../dto/types'

type Props = {
  state: EnhancedType
  type?: 'Jewelry' | 'Stuff'
}

export const ResultBlock = ({state, type}: Props) => {
  return (
    <Wrapper>
      <div>
        <h2>prev:</h2><br />
        {type === 'Jewelry' &&
          <>
            <span>item price: {formatter(state.value.commonItemPrice)} $</span><br />
          </>
        }
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
