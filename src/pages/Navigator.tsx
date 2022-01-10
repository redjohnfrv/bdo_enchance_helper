import React from 'react'
import {Route, Routes } from 'react-router-dom'
import {TO_JEW, TO_ROOT, TO_STUFF} from '../constants'
import {Menu} from './Menu'
import {Jewelry} from './Jewelry'
import {Stuff} from './Stuff'
import {Container} from '../ui'

export const Navigator = () => {
  return (
    <Container>
      <Menu />
      <Routes>
        <Route path={TO_ROOT} element={<Jewelry />} />
        <Route path={TO_JEW} element={<Jewelry />} />
        <Route path={TO_STUFF} element={<Stuff />} />
      </Routes>
    </Container>
  )
}