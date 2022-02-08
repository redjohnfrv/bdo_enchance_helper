import React from 'react'
import styled from 'styled-components'
import {Container, Image, Text} from '../../ui'
import {Title} from '../../components/Title'
import {images} from '../../assets/images'

export const Source = () => {

  const {accessories, armor, weapon} = images

  return (
    <Container>
      <Wrapper>
        <Title title="SOURCE" />
        <Text>
          This contains information based on which the calculations for the application were created.
        </Text>
        <Text bold={true}>Accessories enhance steps:</Text>
        <Image pic={accessories} note="accessories source" />
        <Text>I 25% / 2,5%  / 70%(18) / 0,5%  / 90%</Text>
        <Text>II 10%  / 1,0%  / 50%(40) / 0,2%  /</Text>
        <Text>III 7,5% / 0,75% / 40,5%(44) / 0,15% /</Text>
        <Text>IV 2,5% / 0,25% / 30%(110) / 0,05% /</Text>
        <Text>V 0,5% / 0,05% /</Text>
        <Text bold={true}>Armor & Weapon enhance steps:</Text>
        <Image pic={armor} note="armor source" />
        <Image pic={weapon} note="weapon source" />
        <Text>I  11,76% / 1,18% / 70%(50) / 0,23%  / 90%</Text>
        <Text>II 7,69%  / 0,77% / 70%(82) / 0,16%  /</Text>
        <Text>III 6,25%  / 0,63% / 70%(102)  / 0,12% /</Text>
        <Text>IV 2% / 0,2%  /</Text>
        <Text>V 0,3% / 0,03% /</Text>
      </Wrapper>
    </Container>
  )
}

const Wrapper = styled.div``
