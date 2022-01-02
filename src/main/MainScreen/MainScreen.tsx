import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from '../../ui'
import {TO_JEW} from '../../constants'

export const MainScreen = () => {
  return (
    <Container>
      <Link to={TO_JEW}>To jew</Link>
    </Container>
  )
}
