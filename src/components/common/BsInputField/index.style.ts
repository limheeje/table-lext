import styled from 'styled-components'
import {typo, _toCSSUnit, color} from '@/styles'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`

export const Input = styled.input<{$isFocused: boolean; $hasError: boolean}>`
  width: 100%;
  height: ${_toCSSUnit('48px')};
  padding: ${_toCSSUnit('15px')} ${_toCSSUnit('14px')};
  border: ${_toCSSUnit('1px')} solid transparent;
  border-color: ${({$isFocused, $hasError}) => {
    if ($hasError) return color(COLOR_KEY_NAME['dangol/Red'])
    if ($isFocused) return color(COLOR_KEY_NAME['dangol/Black_0'])
    return 'transparent'
  }};
  background-color: ${({$isFocused}) =>
    $isFocused ? color(COLOR_KEY_NAME['dangol/white_0']) : color(COLOR_KEY_NAME['Gray/gray_BG'])};
  outline: none;
  transition: background-color 0.2s;
  ${typo(TYPO_KEY_NAME['Body1/Regular'])}

  &::placeholder {
    color: ${color(COLOR_KEY_NAME['Gray/gray_9'])};
  }

  &:focus {
    border-color: ${({$hasError}) =>
      $hasError ? color(COLOR_KEY_NAME['dangol/Red']) : color(COLOR_KEY_NAME['dangol/Black_0'])};
    background-color: ${color(COLOR_KEY_NAME['dangol/white_0'])};
  }
`

export const ErrorMessage = styled.div`
  position: absolute;
  top: ${_toCSSUnit('57px')};
  left: 0;
  color: ${color(COLOR_KEY_NAME['dangol/Red'])};
  ${typo(TYPO_KEY_NAME['Body5/Regular'])}
`
