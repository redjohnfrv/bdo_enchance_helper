import React from 'react'
import styled from 'styled-components'
import {variables} from '../../assets'

type Props = {
  tooltip: string
}

export const Tooltip = ({tooltip}: Props) => {
  return (
    <Wrapper>
      <Icon>i</Icon>
      <Text>{tooltip}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 60px;
  
  &:hover div {
    color: ${variables.colors.blue};
    border: 1px solid ${variables.colors.blue}
  }
`
const Icon = styled.div`
  width: 14px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: ${variables.colors.primaryDark};
  border: 1px solid ${variables.colors.primaryDark};
  border-radius: 50%;
  cursor: default;
  
  &:hover ~div {
    visibility: visible;
    opacity: 1;
  }
`
const Text = styled.div`
  position: absolute;
  top: 0;
  left: 28px;
  width: max-content;
  padding: 5px;
  font-size: 14px;
  color: ${variables.colors.blue};
  background-color: ${variables.colors.white};
  border: 1px solid ${variables.colors.blue};
  border-radius: ${variables.size.borderRadius};
  opacity: 0;
  visibility: hidden;
  cursor: default;
  z-index: 10;
`
