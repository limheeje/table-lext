import styled from 'styled-components'
import {typo, _toCSSUnit} from '@/styles'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${_toCSSUnit('calc(100vh - 60px)')};
  padding: ${_toCSSUnit('24px')} ${_toCSSUnit('20px')} 0;
`

export const MainText = styled.p`
  ${typo(TYPO_KEY_NAME['H2/Bold'])}
`

export const SubText = styled.p`
  margin: ${_toCSSUnit('40px')} 0 ${_toCSSUnit('16px')};
  ${typo(TYPO_KEY_NAME['Body2/Medium'])}
`

export const Img = styled.img`
  margin-top: ${_toCSSUnit('83px')};
`

export const ButtonWrapper = styled.div`
  position: sticky;
  bottom: ${_toCSSUnit('20px')};
  z-index: 10;
  width: 100%;
  margin-top: auto;
`
