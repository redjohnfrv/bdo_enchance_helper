import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Container} from '../../ui'
import {TO_JEW, TO_STUFF} from '../../constants'
import {images} from '../../assets/images'
import {variables} from '../../assets'

export const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={images.bdg} alt="BDO enhance calculator" />
        </Logo>
        <List>
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
const List = styled.div`
  display: flex;
  gap: 15px;
  justify-content: flex-start;
  
  @keyframes unSlideWidth {
    from {width: 100%;}
    to {width: 0;}
  }
  
  @keyframes slideWidth {
    from {width: 0;}
    to {width: 100%;}
  }
  
  & a {
    position: relative;
    color: ${variables.colors.primaryDark};
    font-size: ${variables.size.menuSize};
    text-transform: uppercase;
    text-decoration: none;
    
    &:after {
      content: '';
      height: 1px;
      position: absolute;
      top: 22px;
      left: 0;
      background-color: ${variables.colors.primaryDark};
      animation: unSlideWidth .5s forwards;
    } 
    
    &:hover:after {
      animation: slideWidth .5s forwards;
    }
  }
`
