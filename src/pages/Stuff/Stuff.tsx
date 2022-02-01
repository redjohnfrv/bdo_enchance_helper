import React from 'react'
import styled from 'styled-components'
import {Block, Container} from '../../ui'
import {MainForm} from '../../components/MainForm'
import {ResultBlock} from '../../components/ResultBlock'
import {useSelector} from 'react-redux'
import {selectStuffState} from '../../redux/stuff/selector'
import {labels} from '../../dto/labels'
import {images} from '../../assets/images'

export const Stuff = () => {

  const state = useSelector(selectStuffState)
  const {bg_sc} = images

  return (
    <Container>
      <BlocksWrapper>
        <Block>
          <MainForm
            state={state}
            labels={labels.stuff}
            type="Stuff"
          />
        </Block>
        <Block>
          <ResultBlock state={state} bg={bg_sc} />
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
