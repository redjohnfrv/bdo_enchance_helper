import React from 'react'
import styled from 'styled-components'
import {InputValueType} from '../../dto/types'
import {DASH_STRING} from '../../constants'
import {Container, Divider, Block} from '../../ui'
import {Field, Form} from 'react-final-form'
import {Input} from '../../components/Input'
import {Button} from '../../components/Button'
import {Options} from '../../components/Options'
import {calculateAcc} from '../../helpers'
import {useDispatch, useSelector} from 'react-redux'
import {getJewState, removeJewState} from '../../redux/jewerly/jewSlice'
import {selectJewState} from '../../redux/jewerly/selector'

export const Jewelry = () => {

  const state = useSelector(selectJewState)
  console.log('state: ', state)
  const dispatch = useDispatch()

  const onSubmit = async (value: InputValueType) => {
    const {chance, rawProfit, noPremProfit, premProfit} = calculateAcc(value)
    await dispatch(removeJewState())
    dispatch
    (getJewState
      ({
        chance,
        rawProfit,
        noPremProfit,
        premProfit
      })
    )
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
                      defaultValue={state.chance}
                    />
                  </InputWrapper>
                  <Button text="CALCULATE" customType="Primary" />
                </Wrapper>
              </form>
            )}
          />
        </Block>
        <Block>
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
