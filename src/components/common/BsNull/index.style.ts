import styled from 'styled-components'
import {typo, color, _toCSSUnit} from '@/styles'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'

export const Wrapper = styled.div``
export const WrapperInner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Contentbox = styled.div`
  text-align: center;
`
export const Icon = styled.div<{width?: string; height?: string}>`
  display: inline-flex;
  width: ${(props) => (props.width ? _toCSSUnit(props.width) : _toCSSUnit('48px'))};
  height: ${(props) => (props.height ? _toCSSUnit(props.height) : _toCSSUnit('48px'))};
  margin-bottom: ${_toCSSUnit('16px')};
`
export const Title = styled.div`
  ${typo(TYPO_KEY_NAME['H3/Bold'])};
  color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
`
export const Description = styled.div`
  margin-top: ${_toCSSUnit('4px')};
  ${typo(TYPO_KEY_NAME['Body2/Medium'])};
  color: ${color(COLOR_KEY_NAME['Gray/gray_9'])};
`
export const ButtonGroup = styled.div`
  margin-top: ${_toCSSUnit('16px')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${_toCSSUnit('6px')};
`
