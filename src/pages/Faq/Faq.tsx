import React from 'react'
import styled from 'styled-components'
import {Container, Divider, Text} from '../../ui'

export const Faq = () => {
  return (
    <Container>
      <Wrapper>
        <Text bold={true}>1. Does the cost of valks count?</Text>
        <Text>
          No. The cost of valkos is not taken into account due to the lack of at least an approximate official cost.
          Also valks cannot be bought or sold directly.
        </Text>
        <Divider />
        <Text bold={true}>2. What formulas are used to calculate?</Text>
        <Text>The formulas were made independently.</Text>
        <Divider />
        <Text bold={true}>3. How was the cost of sharpening weapons and armor calculated?</Text>
        <Text>
          Approximate cost was taken based on the following calculations:
          (around an enhancing stone + 5 cookies) = 14.5kk</Text>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div``
