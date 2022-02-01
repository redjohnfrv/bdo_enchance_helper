import React from 'react'
import {Tooltip} from '../../components/Tooltip'
import styled from 'styled-components'
import {variables} from '../../assets'

type Props = {
  label: string
  tooltip?: string
  width?: string
}

export const Label = ({label, tooltip, width = '250px'}: Props) => {
  return (
    <Wrapper width={width}>
      <label>{label}</label>
      {tooltip && <Tooltip tooltip={tooltip} />}
    </Wrapper>
  )
}

const Wrapper = styled.div<{width: string}>`
  width: ${props => props.width};
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: flex-start;
  color: ${variables.colors.primaryDark};
  font-size: ${variables.size.textCommon};
`
