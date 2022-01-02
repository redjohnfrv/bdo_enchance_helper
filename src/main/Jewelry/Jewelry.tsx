import React from 'react'
import styled from 'styled-components'
import {Container} from '../../ui'
import {Block} from '../../ui/Block'
import {Field, Form} from 'react-final-form'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Options} from '../../components/Options'
import {EMPTY_STRING} from '../../constants'
import {InputValueType} from '../../dto/types'

export const Jewelry = () => {

  const onSubmit = (value: InputValueType) => {
    console.log('result: ', value)
  }

  return (
    <Container>
      <Block>
        <Form
          onSubmit={onSubmit}
          render={({handleSubmit}) => (
            <form onSubmit={handleSubmit}>
              <Wrapper>
                <InputWrapper>
                  <Field
                    name="commonItemPrice"
                    label="Zero enhanced item price:"
                    component={Input}
                    disabled={false}
                    autoFocus
                  />
                  <Field
                    name="startItemPrice"
                    label="Price now:"
                    component={Input}
                    disabled={false}
                    autoFocus
                  />
                  <Field
                    name="enhancedItemPrice"
                    label="Price after successfully enhance:"
                    component={Input}
                    disabled={false}
                    autoFocus
                  />
                  <label>Attempt to get grade: </label>
                  <Field
                    name="enhanceGrade"
                    component="select"
                  >
                    <Options options={[EMPTY_STRING, 'I', 'II', 'III', 'IV', 'V']}/>
                  </Field>
                </InputWrapper>
                <Button text="CLICK" customType="Primary" />
              </Wrapper>
            </form>
          )}
        />
      </Block>
    </Container>
  )
}

const Wrapper = styled.div`

`
const InputWrapper = styled.div`
  
`
