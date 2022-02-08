import React from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import {
  TO_FAQ,
  TO_JEW,
  TO_ROOT,
  TO_SOURCE,
  TO_STUFF
} from '../constants'
import {Menu} from '../components/Menu'
import {Jewelry} from './Jewelry'
import {Stuff} from './Stuff'
import {Container} from '../ui'
import {Footer} from '../components/Footer'
import {Faq} from './Faq'
import {Source} from './Source'

export const Navigator = () => {
  return (
    <>
      <Container>
        <Menu />
        <Routes>
          <Route path={TO_ROOT} element={<Jewelry />} />
          <Route path={TO_JEW} element={<Jewelry />} />
          <Route path={TO_STUFF} element={<Stuff />} />
          <Route path={TO_FAQ} element={<Faq />} />
          <Route path={TO_SOURCE} element={<Source />} />
          <Route path="*" element={<Navigate to={TO_JEW} replace />} />
        </Routes>
      </Container>
      <Footer />
    </>
  )
}
