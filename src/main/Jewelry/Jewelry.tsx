import React from 'react'
import {Container} from '../../ui'
import {Block} from '../../ui/Block'
import {TO_ROOT} from '../../constants'
import {useNavigate} from 'react-router-dom'

export const Jewelry = () => {
  const navigate = useNavigate()

  return (
    <Container>
      <Block>
        <span onClick={() => navigate(TO_ROOT)}>back to main</span>
      </Block>
    </Container>
  )
}
