import React from 'react'
import styled from 'styled-components'
import {variables} from '../assets'

export const Divider = () => {
  return (
    <Wrapper />
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
  height: 1px;
  margin: 0 24px 12px;
  background: ${variables.colors.gray};
`
