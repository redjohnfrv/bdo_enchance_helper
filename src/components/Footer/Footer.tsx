import React from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'
import {Container} from '../../ui'
import {UnderlineLink} from '../UnderlineLink'
import {TO_FAQ, TO_SOURCE} from '../../constants'
import {variables} from '../../assets'

export const Footer = () => {

  const {pathname} = useLocation()

  return (
    <Wrapper>
      <Container>
          <Menu>
            <UnderlineLink
              link={TO_FAQ}
              path={pathname === TO_FAQ}
              text="FAQ" />
            <UnderlineLink
              link={TO_SOURCE}
              path={pathname === TO_SOURCE}
              text="Source" />
          </Menu>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding-left: 24px;
  background: ${variables.colors.white};
  z-index: 10;
  
  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: .5px;
    color: ${variables.colors.white};
    box-shadow: 0 -5px 3px 0 ${variables.colors.primaryDark};
  }
`
const Menu = styled.div`
  display: flex;
  gap: 24px;
  
  & a {
    color: ${variables.colors.primaryDark};
    font-size: ${variables.size.menuSize};
    text-decoration: none;
  }
`
