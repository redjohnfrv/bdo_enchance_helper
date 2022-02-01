import React from 'react'
import styled from 'styled-components'
import {EnhancedType} from '../../dto/types'
import {Title} from '../Title'
import {SpanLine} from '../../ui/SpanLine'
import {Divider} from '../../ui'

type Props = {
  state: EnhancedType
  type?: 'Jewelry' | 'Stuff'
  bg: string
}

export const ResultBlock = ({state, type, bg}: Props) => {
  return (
    <Wrapper bg={bg}>
      <div>
        <Title title="Last sample" />
        {type === 'Jewelry' &&
          <>
            <SpanLine text='Consumable' value={state.value.commonItemPrice} symbol="$" />
          </>
        }
        <SpanLine text='Default' value={state.value.startItemPrice} symbol="$" format={true} />
        <SpanLine text='Success' value={state.value.enhancedItemPrice} symbol="$" format={true} />
        <SpanLine text='Grade' value={state.value.enhanceGrade} />
        <SpanLine text='Lucks' value={state.value.lucks} />
      </div>
      <Divider />
      <SpanLine text='Success chance' value={state.chance} symbol="%" />
      <SpanLine text='Raw value' value={state.rawProfit} symbol="$" format={true} />
      <SpanLine text='No prem value' value={state.noPremProfit} symbol="$" format={true} />
      <SpanLine text='Prem value' value={state.premProfit} symbol="$" format={true} />
    </Wrapper>
  )
}

const Wrapper = styled.div<{bg: string}>`
  background: ${props => `url(${props.bg}) right / contain no-repeat`};
`
