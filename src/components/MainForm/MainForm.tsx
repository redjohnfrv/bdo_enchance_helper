import React from 'react'
import styled from 'styled-components'
import {Field, Form} from 'react-final-form'
import {Divider} from '../../ui'
import {Options} from '../../ui/Options'
import {Input} from '../../ui/Input'
import {Button} from '../../ui/Button'
import {Label} from '../../ui/Label'
import {calculate, validation} from '../../helpers'
import {DASH_STRING} from '../../constants'
import {
  EnhancedType,
  InputValueType,
  ItemLabelType,
} from '../../dto/types'
import {getJewState, removeJewState} from '../../redux/jewerly/jewSlice'
import {removeStuffState, getStuffState } from '../../redux/stuff/stuffSlice'
import {useDispatch} from 'react-redux'

type Props = {
  state: EnhancedType
  type: 'Jewelry' | 'Stuff'
  labels: ItemLabelType
}

export const MainForm = ({state, type, labels}: Props) => {

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
              {type === 'Jewelry' && <Field
                name="commonItemPrice"
                label={labels.label1}
                tooltip={labels.tooltip1}
                component={Input}
                validate={validation.validInput}
                mask="true"
              />}
              <Field
                name="startItemPrice"
                label={labels.label2}
                tooltip={labels.tooltip2}
                component={Input}
                validate={validation.validInput}
                mask="true"
              />
              <Field
                name="enhancedItemPrice"
                label={labels.label3}
                tooltip={labels.tooltip3}
                component={Input}
                validate={validation.validInput}
                mask="true"
              />
              <Divider />
              <CheckboxWrapper>
                <Label
                  label={labels.label4}
                  tooltip={labels.tooltip4}
                  width="262px"
                />
                <Field
                  name="enhanceGrade"
                  component="select"
                >
                  <Options options={[DASH_STRING, 'I', 'II', 'III', 'IV', 'V']}/>
                </Field>
              </CheckboxWrapper>
              <Field
                name="lucks"
                label={labels.label5}
                tooltip={labels.tooltip5}
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
`
