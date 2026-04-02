import styled from 'styled-components'
import {typo, color, _toCSSUnit} from '@/styles'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'

export const TYPE_BOTTOMSHEET = 'type-bottomsheet'
export const TYPE_MODAL = 'type-modal'

export const Wrapper = styled.div<{
  type?: typeof TYPE_BOTTOMSHEET | typeof TYPE_MODAL
}>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100%;
  ${(props) => {
    switch (props.type) {
      case TYPE_MODAL:
        return `
        ${InnerContent} {
          top: 50%;
          bottom: auto;
          left: 50%;
          transform: translate(-50%,-50%);
          padding: ${_toCSSUnit('40px')} ${_toCSSUnit('20px')} ${_toCSSUnit('20px')};
          width: calc(100% - ${_toCSSUnit('60px')});
          max-width: ${_toCSSUnit('430px')}
        }
        ${HeaderArea}{
          font-weight: 600;
          font-style: SemiBold;
          font-size: 16px;
          line-height: 140%;
          letter-spacing: 0%;
          text-align: center;
        }
        ${BodyArea}{
          margin-top: ${_toCSSUnit('6px')};
          font-weight: 400;
          font-style: Regular;
          font-size: 14px;
          line-height: 140%;
          letter-spacing: 0%;
          text-align: center;
        }
        ${FooterArea}{
          display: flex;
          gap: ${_toCSSUnit('8px')};
        }
        `
        break
      default:
        return `
       ${InnerContent} {
          bottom: 0;
          left: 50%;
          width: 100%;
          max-width: ${_toCSSUnit('430px')};
          max-height: ${_toCSSUnit('calc(100% - 46px)')};
          padding: ${_toCSSUnit('46px')} ${_toCSSUnit('20px')} ${_toCSSUnit('10px')};
          border-top-left-radius: ${_toCSSUnit('20px')};
          border-top-right-radius: ${_toCSSUnit('20px')};
          transform: translate(-50%, 0);
        }
        ${HeaderArea}{
          ${typo(TYPO_KEY_NAME['H2/Bold'])}
        }
        ${BodyArea}{
          margin-top: ${_toCSSUnit('6px')};
          ${typo(TYPO_KEY_NAME['Body3/Regular'])};
        }
        `
        break
    }
  }}
`

export const Dim = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(17, 17, 17, 0.6);
`

export const InnerContent = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: absolute;
  background: ${color(COLOR_KEY_NAME['dangol/white_0'])};
`

export const HeaderArea = styled.div`
  flex-shrink: 0;
`

export const BodyArea = styled.div`
  overflow: hidden;
  overflow-y: auto;
  flex: 1;
`

export const FooterArea = styled.div`
  flex-shrink: 0;
  margin-top: ${_toCSSUnit('36px')};
`
