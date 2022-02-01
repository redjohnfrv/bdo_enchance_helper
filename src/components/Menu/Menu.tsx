import React from 'react'
import styled from 'styled-components'
import {Link, useLocation} from 'react-router-dom'
import {Container} from '../../ui'
import {TO_JEW, TO_STUFF} from '../../constants'
import {images} from '../../assets/images'
import {variables} from '../../assets'

export const Menu = () => {

  const {pathname} = useLocation()

  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={images.bdg} alt="BDO enhance calculator" />
        </Logo>
        <List path={pathname === TO_JEW}>
          <Link to={TO_JEW}>To jew</Link>
          <Link to={TO_STUFF}>To stuff</Link>
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
const List = styled.div<{path: boolean}>`
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  
  & a {
    position: relative;
    color: ${variables.colors.primaryDark};
    font-size: ${variables.size.menuSize};
    text-transform: uppercase;
    text-decoration: none;
  }
  
  & a:first-child {
    text-decoration: ${props => props.path ? 'underline' : 'none'};
  }
  & a:last-child {
    text-decoration: ${props => !props.path ? 'underline' : 'none'};
  }
`
