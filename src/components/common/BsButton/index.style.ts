import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {typo, color, _toCSSUnit} from '@/styles'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'
import type {ButtonType} from '@/components/common/BsButton/index.type'

export const SIZE_MD = 'size-md'
export const SIZE_SM = 'size-sm'
export const SIZE_XSM = 'size-xsm'
export const TYPE_DEFAULT = 'default'
export const TYPE_PRIMARY = 'primary'
export const TYPE_OUTINE_PRIMARY = 'outline-primary'
export const TYPE_SECONDARY = 'secondary'

export const Wrapper = styled.div``
export const Button = styled.button<{
  $buttonType?: ButtonType
  size?: typeof SIZE_MD | typeof SIZE_SM | typeof SIZE_XSM
  inline?: boolean
}>`
  ${(props) => (props.inline ? `` : `width: 100%;`)}
  ${(props) => {
    switch (props.size) {
      case SIZE_SM:
        return `
        height: ${_toCSSUnit('48px')};
        ${typo(TYPO_KEY_NAME['Body1/Regular'])};
        padding: 0 ${_toCSSUnit('13px')};
        `
        break
      case SIZE_XSM:
        return `
        height: ${_toCSSUnit('30px')};
        ${typo(TYPO_KEY_NAME['Body4/Bold'])};
        padding: 0 ${_toCSSUnit('10px')};
        `
        break
      default:
        return `
        height: ${_toCSSUnit('56px')};
        ${typo(TYPO_KEY_NAME['Body1/Regular'])};
        `
    }
  }}
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;
  border: ${_toCSSUnit('1px')} solid transparent;
  ${(props) => {
    switch (props.$buttonType) {
      case TYPE_PRIMARY:
        return `
          background: ${color(COLOR_KEY_NAME['dangol/Red'])};
          color: ${color(COLOR_KEY_NAME['dangol/white_0'])};
        `
      case TYPE_OUTINE_PRIMARY:
        return `
          border-color: ${color(COLOR_KEY_NAME['dangol/Red'])};
          color: ${color(COLOR_KEY_NAME['dangol/Red'])};
        `
      case TYPE_SECONDARY:
        return `
          background: #ECEEF4;
          color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
        `
      case TYPE_DEFAULT:
      default:
        return `
          background: ${color(COLOR_KEY_NAME['dangol/white_0'])};
          ${typo(TYPO_KEY_NAME['Body3/Regular'])}
          color: rgba(17, 17, 17, 0.6);
        `
    }
  }}

  &:disabled {
    background: #b9b9b9;
    cursor: not-allowed;
  }
`

export const ButtonLink = styled(Link)<{
  $buttonType?: ButtonType
  size?: typeof SIZE_MD | typeof SIZE_SM | typeof SIZE_XSM
  inline?: boolean
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${(props) => (props.inline ? `` : `width: 100%;`)}
  ${(props) => {
    switch (props.size) {
      case SIZE_SM:
        return `height: ${_toCSSUnit('48px')};`
        break
      case SIZE_XSM:
        return `height: ${_toCSSUnit('30px')};`
        break
      default:
        return `height: ${_toCSSUnit('56px')};`
    }
  }}
  text-decoration: none;
  transition: background-color 0.2s;
  cursor: pointer;
  ${(props) => {
    switch (props.$buttonType) {
      case TYPE_PRIMARY:
        return `
          background: ${color(COLOR_KEY_NAME['dangol/Red'])};
          ${typo(TYPO_KEY_NAME['Body1/Regular'])}
          color: ${color(COLOR_KEY_NAME['dangol/white_0'])};
        `
      case TYPE_DEFAULT:
      default:
        return `
          background: ${color(COLOR_KEY_NAME['dangol/white_0'])};
          ${typo(TYPO_KEY_NAME['Body3/Regular'])}
          color: rgba(17, 17, 17, 0.6);
        `
    }
  }}

  &[aria-disabled='true'] {
    pointer-events: none;
  }
`
