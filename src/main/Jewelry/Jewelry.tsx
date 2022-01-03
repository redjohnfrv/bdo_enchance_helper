import React from 'react'
import styled from 'styled-components'
import {Container, Divider, Block} from '../../ui'
import {Field, Form} from 'react-final-form'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Options} from '../../components/Options'
import {InputValueType} from '../../dto/types'
import {calculateAcc} from '../../helpers'

export const Jewelry = () => {

  const onSubmit = (value: InputValueType) => {
    calculateAcc(value)
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
                  <Divider />
                  <CheckboxWrapper>
                    <label>Attempt to get grade: </label>
                    <Field
                      name="enhanceGrade"
                      component="select"
                    >
                      <Options options={['-', 'I', 'II', 'III', 'IV', 'V']}/>
                    </Field>
                  </CheckboxWrapper>
                  <Field
                    name="lucks"
                    label="Luck value:"
                    width="25"
                    component={Input}
                    disabled={false}
                    autoFocus
                  />
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
const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  
  & label {
    width: 262px;
  }
`
