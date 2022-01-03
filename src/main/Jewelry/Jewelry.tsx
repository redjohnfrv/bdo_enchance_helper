import React from 'react'
import styled from 'styled-components'
import {RootState} from '../../redux/store'
import {InputValueType} from '../../dto/types'
import {DASH_STRING} from '../../constants'
import {Container, Divider, Block} from '../../ui'
import {Field, Form} from 'react-final-form'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Options} from '../../components/Options'
import {calculateAcc} from '../../helpers'
import {useDispatch, useSelector} from 'react-redux'
import {getChance} from '../../redux/calcSlice'

export const Jewelry = () => {

  const state = useSelector((state: RootState) => state.calc.value)
  const dispatch = useDispatch()

  const onSubmit = (value: InputValueType) => {
    const chance = calculateAcc(value)
    dispatch(getChance(chance))
  }

  return (
    <Container>
      <BlocksWrapper>
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
                        <Options options={[DASH_STRING, 'I', 'II', 'III', 'IV', 'V']}/>
                      </Field>
                    </CheckboxWrapper>
                    <Field
                      name="lucks"
                      label="Luck value:"
                      width="25"
                      component={Input}
                      disabled={false}
                      autoFocus
                      defaultValue={state}
                    />
                  </InputWrapper>
                  <Button text="CLICK" customType="Primary" />
                </Wrapper>
              </form>
            )}
          />
        </Block>
        <Block>
          <div>SUCCESS: {state} %</div><br />
          <div>PROFIT: 0</div>
        </Block>
      </BlocksWrapper>
    </Container>
  )
}

const BlocksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`
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
