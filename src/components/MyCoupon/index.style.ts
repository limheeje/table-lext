import styled from 'styled-components'
import {typo, color, _toCSSUnit} from '@/styles'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'
import type {ButtonType} from '@/components/MyCoupon/index.type'

export const CouponWrap = styled.div`
  overflow: hidden;
  position: relative;

  & + & {
    margin-top: ${_toCSSUnit('8px')};
  }

  &:last-child {
    margin-bottom: ${_toCSSUnit('46px')};
  }

  &:after {
    content: '';
    clear: both;
    display: block;
    position: absolute;
    top: 50%;
    left: ${_toCSSUnit('-10px')};
    width: ${_toCSSUnit('14px')};
    height: ${_toCSSUnit('14px')};
    border-radius: 100%;
    border: ${_toCSSUnit('1px')} solid ${color(COLOR_KEY_NAME['Gray/gray_line'])};
    background-color: ${color(COLOR_KEY_NAME['dangol/white_0'])};
    transform: translate(0, -50%);
  }
`

export const CouponInner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${_toCSSUnit('35px')};
  position: relative;
  padding: ${_toCSSUnit('18px')} ${_toCSSUnit('19px')} ${_toCSSUnit('19px')};
  border-radius: ${_toCSSUnit('1px')};
  border: ${_toCSSUnit('1px')} solid ${color(COLOR_KEY_NAME['Gray/gray_line'])};
`

export const CouponInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: ${_toCSSUnit('2px')};
  min-width: 0;
`
export const CouponHeadUseInfo = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${_toCSSUnit('4px')};
  margin-bottom: ${_toCSSUnit('8px')};
`
export const CouponUseInfoOnline = styled.span`
  display: block;
  padding: ${_toCSSUnit('3px')} ${_toCSSUnit('4px')};
  font-weight: 700;
  font-style: Bold;
  font-size: ${_toCSSUnit('10px')};
  line-height: 140%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: #a7862a;
  background: #fef6dd;
`
export const CouponUseInfoOffline = styled.span`
  display: block;
  padding: ${_toCSSUnit('3px')} ${_toCSSUnit('4px')};
  font-weight: 700;
  font-style: Bold;
  font-size: ${_toCSSUnit('10px')};
  line-height: 140%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: #3393a2;
  background: #e9f8f7;
`

export const CouponTitle = styled.p`
  overflow: hidden;
  width: 100%;
  ${typo(TYPO_KEY_NAME['Body5/Regular'])}
  line-height: ${_toCSSUnit('17px')};
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const CouponDiscount = styled.p<{
  lineCountEllipsis?: number
}>`
  overflow: hidden;
  width: 100%;
  ${typo(TYPO_KEY_NAME['H2/Bold'])}
  color: ${color(COLOR_KEY_NAME['dangol/Red'])};
  text-overflow: ellipsis;
  ${(props) => {
    switch (props.lineCountEllipsis) {
      case 1:
        return `white-space: nowrap;`
      default:
        return `
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: ${props.lineCountEllipsis};
        max-height: calc(140% * ${props.lineCountEllipsis});
    `
    }
  }}
`

export const CouponUserCondition = styled.div`
  strong {
    margin-right: ${_toCSSUnit('6px')};
  }
`

export const CouponCondition = styled.p`
  ${typo(TYPO_KEY_NAME['Body7/Regular'])}
  color: ${color(COLOR_KEY_NAME['Gray/gray_7'])};
  line-height: ${_toCSSUnit('14px')};
`

export const CouponPeriod = styled.p`
  ${typo(TYPO_KEY_NAME['Body7/Regular'])}
  color: ${color(COLOR_KEY_NAME['Gray/gray_7'])};
  line-height: ${_toCSSUnit('14px')};
`

export const CouponButton = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button<{$buttonType?: ButtonType}>`
  min-width: ${_toCSSUnit('74px')};
  height: ${_toCSSUnit('34px')};
  ${typo(TYPO_KEY_NAME['Body5/SemiBold'])}
  cursor: pointer;

  ${(props) => {
    switch (props.$buttonType) {
      case 'use':
        return `
					background-color: #FFE9EB; 
					color: ${color(COLOR_KEY_NAME['dangol/Red'])}`
      case 'download':
        return `
					border: ${_toCSSUnit('1px')} solid ${color(COLOR_KEY_NAME['dangol/Red'])}; background-color: ${color(COLOR_KEY_NAME['dangol/white_0'])};
					color: ${color(COLOR_KEY_NAME['dangol/Red'])}`
      case 'app':
        return `
					min-width: ${_toCSSUnit('79px')};	
					background: linear-gradient(102deg, #FF4F50 0.23%, #F65DFF 99.77%); color: ${color(COLOR_KEY_NAME['dangol/white_0'])};`
      default:
        return `
					background-color: #FFE9EB; 
					color: ${color(COLOR_KEY_NAME['dangol/Red'])};`
    }
  }}
`
