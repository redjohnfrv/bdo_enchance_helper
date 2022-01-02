import React from 'react'
import {Route, Routes } from 'react-router-dom'
import {MainScreen} from './MainScreen'
import {Jewelry} from './Jewelry'
import {TO_JEW, TO_ROOT} from '../constants'

export const Navigator = () => {
  return (
    <Routes>
      <Route path={TO_ROOT} element={<MainScreen />} />
      <Route path={TO_JEW} element={<Jewelry />} />
    </Routes>
  )
}
