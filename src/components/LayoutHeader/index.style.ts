import styled from 'styled-components'
import {typo, color, _toCSSUnit} from '@/styles'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'
import {Wrapper as BsIconWrapper} from '@/components/common/BsIcon/index.style'

export const TYPE_KEYNAME = Object.freeze({
  TYPE1: 'LOGO', //로고
  TYPE5: 'LOGO_MEMBERSHIP', //맴버십로고
  TYPE2: 'TITLE', //타이틀
  TYPE3: 'TITLEBACK', //타이틀+뒤로가기
  TYPE4: 'ONLYTITLE' //타이틀 문구만
})

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  height: ${_toCSSUnit('56px')};
  background-color: ${color(COLOR_KEY_NAME['dangol/white_0'])};

  &[data-type='${TYPE_KEYNAME.TYPE1}'] {
    position: relative;
  }
  &[data-type='${TYPE_KEYNAME.TYPE5}'] {
    position: relative;
  }
`

export const ContentInner = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: ${_toCSSUnit('56px')};
  padding: 0 ${_toCSSUnit('20px')};

  ${Wrapper}[data-type= '${TYPE_KEYNAME.TYPE1}'] & {
    justify-content: center;
  }
  ${Wrapper}[data-type= '${TYPE_KEYNAME.TYPE5}'] & {
    justify-content: center;
  }
  ${Wrapper}[data-type= '${TYPE_KEYNAME.TYPE2}'] & {
    justify-content: space-between;
  }
`

export const PageTitle1 = styled.p`
  ${typo(TYPO_KEY_NAME['H1/Bold'])}
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  ${typo(TYPO_KEY_NAME['Body1/Regular'])}

  & > ${BsIconWrapper} {
    margin-right: ${_toCSSUnit('2px')};
  }
`

export const BackButton = styled.button`
  position: absolute;
  top: ${_toCSSUnit('6px')};
  left: ${_toCSSUnit('20px')};
  width: ${_toCSSUnit('38px')};
  height: ${_toCSSUnit('44px')};
`

export const PageTitle2 = styled.p`\
	width:100%;
  ${typo(TYPO_KEY_NAME['Body1/Bold'])}
  text-align:center;
`
