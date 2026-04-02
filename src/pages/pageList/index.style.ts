import styled from 'styled-components'
import {typo, color, _toCSSUnit} from '@/styles'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${_toCSSUnit('14px')};
`

export const PageListHeader = styled.div`
  border-bottom: ${_toCSSUnit('3px')} solid ${color(COLOR_KEY_NAME['dangol/Black_0'])};
  padding: ${_toCSSUnit('1em')} ${_toCSSUnit('4em')} ${_toCSSUnit('0.9em')} ${_toCSSUnit('0.1em')};

  h1 {
    ${typo(TYPO_KEY_NAME['Body1/Bold'])}
  }
`

export const PageListWrap = styled.div``

export const PageListSection = styled.div``

export const PageListContainer = styled.div`
  width: 100%;
  max-width: ${_toCSSUnit('430px')};
  margin: 0 auto;
`

export const PageLinkDt = styled.dt`
  display: block;
  width: 100%;
  border-bottom: ${_toCSSUnit('1px')} solid #dfdfdf;
  a {
    display: block;
    padding: ${_toCSSUnit('10px')};
  }
`

export const PageTitle = styled.span`
  display: inline-block;
  width: 100%;
`
export const PageLink = styled.a`
  padding: 10px;
`
export const PageLinkDd = styled.dd`
  display: block;
  width: 100%;
  border-bottom: ${_toCSSUnit('1px')} solid #dfdfdf;
  a {
    display: block;
    padding: ${_toCSSUnit('10px')};
    border-bottom: ${_toCSSUnit('1px')} solid #dfdfdf;
  }
`
