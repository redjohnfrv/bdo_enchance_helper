import React from 'react'
import styled from 'styled-components'
import {InputValueType} from '../../dto/types'
import {DASH_STRING} from '../../constants'
import {Container, Divider, Block} from '../../ui'
import {Field, Form} from 'react-final-form'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Options} from '../../components/Options'
import {calculateJew, validation} from '../../helpers'
import {useDispatch, useSelector} from 'react-redux'
import {getJewState, removeJewState} from '../../redux/jewerly/jewSlice'
import {selectJewState} from '../../redux/jewerly/selector'

export const Jewelry = () => {

  const state = useSelector(selectJewState)
  const dispatch = useDispatch()

  const onSubmit = async (inputValue: InputValueType) => {
    const {chance, rawProfit, noPremProfit, premProfit, value} = calculateJew(inputValue)
    await dispatch(removeJewState())
    dispatch(getJewState(
      {
          chance,
          rawProfit,
          noPremProfit,
          premProfit,
          value,
        }
      )
    )
  }

  return (
    <Container>
      <BlocksWrapper>
        <Block>
          <Form
            onSubmit={onSubmit}
            render={({handleSubmit, invalid}) => (
              <form onSubmit={handleSubmit}>
                <Wrapper>
                  <InputWrapper>
                    <Field
                      name="commonItemPrice"
                      label="Zero enhanced item price:"
                      component={Input}
                      validate={validation.validInput}
                      mask={true}
                    />
                    <Field
                      name="startItemPrice"
                      label="Price now:"
                      component={Input}
                      validate={validation.validInput}
                      mask={true}
                    />
                    <Field
                      name="enhancedItemPrice"
                      label="Price after successfully enhance:"
                      component={Input}
                      validate={validation.validInput}
                      mask={true}
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
                      width="32"
                      component={Input}
                      defaultValue={state.chance}
                      validate={validation.validInput}
                    />
                  </InputWrapper>
                  <Button
                    text="CALCULATE"
                    customType="Primary"
                    disabled={invalid}
                  />
                </Wrapper>
              </form>
            )}
          />
        </Block>
        <Block>
          <div>
            <h2>prev:</h2><br />
            <span>item price: {state.value.commonItemPrice}</span><br />
            <span>item start price: {state.value.startItemPrice}</span><br />
            <span>item success price: {state.value.enhancedItemPrice}</span><br />
            <span>lucks: {state.value.lucks}</span><br />
            <span>grade success: {state.value.enhanceGrade}</span>
          </div><br />
          <div>SUCCESS: {state.chance} %</div><br />
          <div>RAW: {state.rawProfit} $</div><br />
          <div>NO PREM: {state.noPremProfit} $</div><br />
          <div>PREM: {state.premProfit} $</div><br />
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
