import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { variables } from '../../assets'

type Props = {
  link: string
  path: boolean
  text: string
}

export const UnderlineLink = ({link, path, text}: Props) => {
  return (
    <Wrapper path={path}>
      <Link to={link}>{text}</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div<{path: boolean}>`
  & a {
    position: relative;
    color: ${variables.colors.primaryDark};
    font-size: ${variables.size.menuSize};
    text-transform: uppercase;
    text-decoration: none;
  }

  & a:first-child {
    text-decoration: ${props => !props.path ? 'underline' : 'none'};
  }
  & a:last-child {
    text-decoration: ${props => props.path ? 'underline' : 'none'};
  }
`
