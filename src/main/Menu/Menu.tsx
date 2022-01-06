import React from 'react'
import {Link} from 'react-router-dom'
import {Container} from '../../ui'
import {TO_JEW, TO_STUFF} from '../../constants'

export const Menu = () => {
  return (
    <Container>
      <Link to={TO_JEW}>To jew</Link>
      <Link to={TO_STUFF}>To stuff</Link>
    </Container>
  )
}
