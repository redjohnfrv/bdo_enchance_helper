import React from 'react'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'
import {Container} from '../../ui'
import {UnderlineLink} from '../UnderlineLink'
import {TO_JEW, TO_STUFF} from '../../constants'
import {images} from '../../assets/images'

export const Menu = () => {

  const {pathname} = useLocation()

  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={images.bdg} alt="BDO enhance calculator" />
        </Logo>
        <List path={pathname}>
          <UnderlineLink
            link={TO_JEW}
            path={pathname === TO_JEW}
            text="To jew" />
          <UnderlineLink
            link={TO_STUFF}
            path={pathname === TO_STUFF}
            text="To stuff" />
        </List>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 25px;
  justify-content: flex-start;
  align-items: flex-end;
`
const Logo = styled.div`
  width: 55px;
  height: 55px;
  
  & img {
    width: 100%;
  }
`
const List = styled.div<{path: string}>`
  display: flex;
  gap: 15px;
  justify-content: flex-start;
`
