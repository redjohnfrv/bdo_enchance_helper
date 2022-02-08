import React from 'react'
import styled from 'styled-components'

type Props = {
  pic: string
  note: string
}

export const Image = ({pic, note = ""}: Props) => {
  return (
    <Wrapper>
      <img src={pic} alt={note} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 12px 0;
  
  & img {
    width: 100%;
    height: auto;
  }
`
