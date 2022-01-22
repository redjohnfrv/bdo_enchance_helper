import React from 'react'
import styled from 'styled-components'
import {Container, Block} from '../../ui'
import {MainForm} from '../../components/MainForm'
import {useSelector} from 'react-redux'
import {selectJewState} from '../../redux/jewerly/selector'
import {ResultBlock} from '../../components/ResultBlock'
import {labels} from '../../dto/labels'

export const Jewelry = () => {

  const state = useSelector(selectJewState)

  return (
    <Container>
      <BlocksWrapper>
        <Block>
          <MainForm
            state={state}
            type="Jewelry"
            labels={labels.jewelry}
          />
        </Block>
        <Block>
          <ResultBlock state={state} type="Jewelry" />
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
