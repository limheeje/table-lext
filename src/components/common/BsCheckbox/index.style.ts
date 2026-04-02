import styled from 'styled-components'
import {_toCSSUnit, color} from '@/styles'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'

export const THEME_1 = 'theme-1' //테두리 있는거
export const THEME_2 = 'theme-2' //테두리 없는거

export const Wrapper = styled.div<{
  theme?: string
}>`
  display: inline-flex;
  ${(props) => {
    switch (props.theme) {
      case THEME_2:
        return `
        ${Icon} {}
        ${Input}:checked + ${Label} ${Icon} {
            path{
                stroke: ${color(COLOR_KEY_NAME['dangol/Red'])};
            }
        }
        `
      default:
        return `
        ${Icon} {border-color: #ddd}
        ${Input}:checked + ${Label} ${Icon} {
        background-color: ${color(COLOR_KEY_NAME['dangol/Red'])};
        border-color: ${color(COLOR_KEY_NAME['dangol/Red'])};
        }
        `
    }
  }}
`
export const ContentInner = styled.div`
  position: relative;
`
export const Input = styled.input`
  position: absolute;
  left: -999em;
  top: -999em;
  opacity: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
`
export const Label = styled.label`
  display: flex;
  align-items: flex-start;
`
export const Icon = styled.div`
  width: ${_toCSSUnit('20px')};
  height: ${_toCSSUnit('20px')};
  margin-right: ${_toCSSUnit('8px')};
  border: ${_toCSSUnit('1px')} solid transparent;
`
export const Text = styled.div`
  min-height: ${_toCSSUnit('20px')};
`
export const TextLevel1 = styled.div`
  font-weight: 700;
  font-style: Bold;
  font-size: ${_toCSSUnit('16px')};
  line-height: 140%;
  letter-spacing: 0%;
  color: #111;
`
export const TextLevel2 = styled.div`
  font-weight: 400;
  font-style: Regular;
  font-size: ${_toCSSUnit('14px')};
  line-height: 140%;
  letter-spacing: 0%;
  color: #777;
`
