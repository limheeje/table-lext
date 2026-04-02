import {_toCSSUnit, typo} from '@/styles'
import styled from 'styled-components'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'

export const ALIGN_TOP = 'align-top'
export const ALIGN_BOTTOM = 'align-bottom'

export const Wrapper = styled.div<{$align?: typeof ALIGN_TOP | typeof ALIGN_BOTTOM; $timer?: number}>`
  position: relative;
  width: 100%;
  padding: 0 ${_toCSSUnit('20px')};
  max-width: 430px;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 9999;
  ${(props) => {
    switch (props.$align) {
      case ALIGN_TOP:
        return `
            bottom: auto;
            top: ${_toCSSUnit('48px')};
            //animation: toast-slide-down ${props.$timer}ms ease-in-out forwards;
            `
      default:
        return `
            top: auto;
            bottom: ${_toCSSUnit('48px')};
            //animation: toast-slide-up ${props.$timer}ms ease-in-out forwards;
            `
    }
  }}
  @keyframes
    toast-slide-down {
    0% {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
    15% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    85% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -100%);
      opacity: 0;
    }
  }

  @keyframes toast-slide-up {
    0% {
      transform: translate(-50%, 100%);
      opacity: 0;
    }
    15% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    85% {
      transform: translate(-50%, 0);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, 100%);
      opacity: 0;
    }
  }
`
export const Container = styled.button`
  width: 100%;
  outline: none !important;
  border: none;
  box-shadow: none !important;
  padding: ${_toCSSUnit('14px')} ${_toCSSUnit('20px')};
  border-radius: ${_toCSSUnit('4px')};
  background-color: #111111e0;
  min-height: ${_toCSSUnit('48px')};
  display: flex;
  align-items: flex-start;
`
export const ContentBody = styled.div`
  display: block;
  ${typo(TYPO_KEY_NAME['Body3/Bold'])};
  word-break: break-all;
  color: #ffffff;
  text-align: left;
`
export const Icon = styled.div`
  display: block;
  min-width: ${_toCSSUnit('20px')};
  min-height: ${_toCSSUnit('20px')};
  width: ${_toCSSUnit('20px')};
  height: ${_toCSSUnit('20px')};
  margin-right: ${_toCSSUnit('12px')};
`
