import React from 'react'
import styled from 'styled-components'
import {Block, Container} from '../../ui'
import {MainForm} from '../../components/MainForm'
import {ResultBlock} from '../../components/ResultBlock'
import {useSelector} from 'react-redux'
import {selectStuffState} from '../../redux/stuff/selector'

export const Stuff = () => {

  const state = useSelector(selectStuffState)

  return (
    <Container>
      <BlocksWrapper>
        <Block>
          <MainForm state={state} />
        </Block>
        <Block>
          <ResultBlock state={state} />
        </Block>
      </BlocksWrapper>
    </Container>
  )
}
const BlocksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`
