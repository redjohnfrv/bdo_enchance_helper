import React from 'react'
import styled from 'styled-components'
import {Field, Form} from 'react-final-form'
import {Divider} from '../../ui'
import {Options} from '../Options'
import {Input} from '../Input'
import {Button} from '../Button'
import {calculate, validation} from '../../helpers'
import {DASH_STRING} from '../../constants'
import {EnhancedType, InputValueType} from '../../dto/types'
import {getJewState, removeJewState} from '../../redux/jewerly/jewSlice'
import {removeStuffState, getStuffState } from '../../redux/stuff/stuffSlice'
import {useDispatch} from 'react-redux'

type Props = {
  state: EnhancedType
  type: 'Jewelry' | 'Stuff'
}

export const MainForm = ({state, type}: Props) => {

  const dispatch = useDispatch()

  const onSubmit = async (inputValue: InputValueType) => {
    const {chance, rawProfit, noPremProfit, premProfit, value} = calculate(inputValue, type)
    switch (type) {
      case 'Jewelry': {
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
        break
      }
      case 'Stuff': {
        await dispatch(removeStuffState())
        dispatch(getStuffState(
            {
              chance,
              rawProfit,
              noPremProfit,
              premProfit,
              value,
            }
          )
        )
        break
      }
      default: return null
    }
  }

  return (
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
                mask="true"
              />
              <Field
                name="startItemPrice"
                label="Price now:"
                component={Input}
                validate={validation.validInput}
                mask="true"
              />
              <Field
                name="enhancedItemPrice"
                label="Price after successfully enhance:"
                component={Input}
                validate={validation.validInput}
                mask="true"
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
                mask="false"
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
