import styled from 'styled-components'
import {typo, color, _toCSSUnit} from '@/styles'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${_toCSSUnit('calc(100vh - 60px)')};
  padding: ${_toCSSUnit('24px')} ${_toCSSUnit('20px')} 0;
`
export const TermsTitle = styled.div`
  ${typo(TYPO_KEY_NAME['H2/Bold'])};
  color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
  margin-bottom: ${_toCSSUnit('6px')};
`
export const TermsDescription = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: ${_toCSSUnit('14px')};
  leading-trim: NONE;
  line-height: 140%;
  letter-spacing: 0%;
  color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
  margin-bottom: ${_toCSSUnit('24px')};
`
export const TermsDl = styled.dl`
  margin-bottom: ${_toCSSUnit('16px')};
`
export const TermsDt = styled.dt`
  font-weight: 700;
  font-style: Bold;
  font-size: ${_toCSSUnit('16px')};
  line-height: 140%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
  margin-bottom: ${_toCSSUnit('4px')};
`
export const TermsDd = styled.dd`
  font-weight: 400;
  font-style: Regular;
  font-size: ${_toCSSUnit('14px')};
  leading-trim: NONE;
  line-height: 140%;
  letter-spacing: 0%;
  color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
`
export const TermsBottomArea = styled.div`
  position: sticky;
  bottom: ${_toCSSUnit('20px')};
  z-index: 10;
  width: 100%;
  margin-top: auto;
`
