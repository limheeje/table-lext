import styled from 'styled-components'
import {typo, color, _toCSSUnit} from '@/styles'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'

export const Content = styled.div``

export const ItemListWrap = styled.div``

export const ItemLists = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: ${_toCSSUnit('20px')};
  border-bottom: ${_toCSSUnit('1px')} solid ${color(COLOR_KEY_NAME['Gray/gray_line2'])};
`

export const ItemImg = styled.div`
  overflow: hidden;
  width: ${_toCSSUnit('70px')};
  height: ${_toCSSUnit('70px')};
  margin-right: ${_toCSSUnit('20px')};
  border-radius: 100%;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: ${_toCSSUnit('6px')};
  min-width: 0;
`

export const ItemTitle = styled.p`
  overflow: hidden;
  width: 100%;
  ${typo(TYPO_KEY_NAME['H4/Bold'])}
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const ItemBenefit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${_toCSSUnit('6px')};
  width: 100%;
`

export const ItemPoint = styled.span`
  display: flex;
  align-items: center;
  ${typo(TYPO_KEY_NAME['Body2/Bold'])}

  svg {
    transform: translateY(${_toCSSUnit('-1px')});
  }
`

export const ItemStamp = styled.span`
  display: flex;
  align-items: center;
  min-width: 0;
  ${typo(TYPO_KEY_NAME['Body2/Regular'])}

  svg {
    transform: translateY(${_toCSSUnit('-0.5px')});
  }
`

export const ItemCouponText = styled.span`
  font-weight: 700;
  font-style: Bold;
  font-size: ${_toCSSUnit('10px')};
  line-height: 140%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  padding: ${_toCSSUnit('3px')} ${_toCSSUnit('4px')};
  background-color: #e1f0ff;
  color: #0080ff;
`
export const ItemCoupon = styled.span`
  display: flex;
  align-items: center;
  min-width: 0;
  ${typo(TYPO_KEY_NAME['Body2/Regular'])}

  svg {
    transform: translateY(${_toCSSUnit('-0.5px')});
  }
`

export const ItemData = styled.span`
  display: inline-block;
  margin-left: ${_toCSSUnit('4px')};
`

export const ItemDate = styled.p`
  ${typo(TYPO_KEY_NAME['Body5/Regular'])}
  color: ${color(COLOR_KEY_NAME['Gray/gray_9'])};
`

export const ItemDetailInfo = styled.div`
  padding: ${_toCSSUnit('12px')} ${_toCSSUnit('20px')} ${_toCSSUnit('24px')};
  border-bottom: ${_toCSSUnit('10px')} solid ${color(COLOR_KEY_NAME['Gray/gray_BG'])};
`

export const ItemDetailTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

export const ItemDetailImg = styled.div`
  overflow: hidden;
  width: ${_toCSSUnit('60px')};
  height: ${_toCSSUnit('60px')};
  margin-right: ${_toCSSUnit('16px')};
  border-radius: 100%;
`

export const ItemDetailBenefit = styled.div`
  display: flex;
  align-items: center;
  height: ${_toCSSUnit('44px')};
  margin-top: ${_toCSSUnit('12px')};
  background-color: ${color(COLOR_KEY_NAME['Gray/gray_BG'])};

  > span {
    justify-content: center;
    width: 100%;
    text-align: center;
    & + span {
      position: relative;
      &:after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: ${_toCSSUnit('1px')};
        height: ${_toCSSUnit('20px')};
        background: ${color(COLOR_KEY_NAME['Gray/gray_line'])};
      }
    }
  }

  svg {
    transform: translateY(${_toCSSUnit('0px')});
  }
`
export const ItemDetailData = styled.span`
  display: inline-block;
  margin-left: ${_toCSSUnit('6px')};
  ${typo(TYPO_KEY_NAME['Body3/Bold'])}
  line-height: ${_toCSSUnit('20px')};
`

export const TabMenu = styled.div`
  display: flex;
  gap: ${_toCSSUnit('20px')};
  width: 100%;
  height: ${_toCSSUnit('52px')};
  padding: ${_toCSSUnit('8px')} ${_toCSSUnit('20px')} 0;
`

export const TabItem = styled.button<{$active: boolean}>`
  position: relative;
  flex: 1;
  width: 50%;
  border: none;
  background: none;
  color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
  cursor: pointer;
  ${(props) => (props.$active ? typo(TYPO_KEY_NAME['Body1/Bold']) : typo(TYPO_KEY_NAME['Body1/Regular']))};

  &:after {
    content: '';
    display: ${(props) => (props.$active ? `block` : 'none')};
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: ${_toCSSUnit('3px')};
    background-color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
  }
`

export const TabContent = styled.div``

export const TabContentInner = styled.div`
  padding: ${_toCSSUnit('24px')} ${_toCSSUnit('20px')};
`

export const TabContentTit = styled.div`
  padding-top: ${_toCSSUnit('24px')};
  margin-bottom: ${_toCSSUnit('14px')};
  ${typo(TYPO_KEY_NAME['Body1/Bold'])}

  &:first-child {
    padding-top: 0;
  }
`

export const NoCoupon = styled.p`
  padding: ${_toCSSUnit('63px')} 0;
  ${typo(TYPO_KEY_NAME['Body1/Medium'])}
  color: ${color(COLOR_KEY_NAME['Gray/gray_9'])};
  text-align: center;
`

export const NoHistory = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${_toCSSUnit('calc(100vh - 340px)')};
  ${typo(TYPO_KEY_NAME['Body1/Medium'])}
  color: ${color(COLOR_KEY_NAME['Gray/gray_9'])};
  text-align: center;
`

export const HistoryWrap = styled.div`
  padding-bottom: ${_toCSSUnit('70px')};
`
export const HistoryGroup = styled.div<{$isCanceled?: boolean}>`
  padding: ${_toCSSUnit('24px')} ${_toCSSUnit('20px')};
  border-bottom: ${_toCSSUnit('1px')} solid ${color(COLOR_KEY_NAME['Gray/gray_BG'])};
  ${(props) =>
    props.$isCanceled &&
    `
    ${HistoryDate}, ${HistoryDetails} {
      opacity: .3;
    }
    `}
`

export const HistoryDateWrapper = styled.div`
  position: relative;
`
export const HistoryPaymentCancelLabel = styled.span`
  font-weight: 700;
  font-style: Bold;
  font-size: ${_toCSSUnit('10px')};
  line-height: 140%;
  letter-spacing: 0%;
  text-align: center;
  vertical-align: middle;
  color: ${color(COLOR_KEY_NAME['dangol/Red'])};
  background-color: #ffe9eb;
  padding: ${_toCSSUnit('3px')} ${_toCSSUnit('4px')};
  position: absolute;
  right: 0;
  top: 0;
`
export const HistoryDate = styled.div`
  margin-bottom: ${_toCSSUnit('14px')};
  ${typo(TYPO_KEY_NAME['Body1/Bold'])}
  color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
`

export const HistoryItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const HistoryPayment = styled.div`
  ${typo(TYPO_KEY_NAME['Body3/Bold'])}
  color: ${color(COLOR_KEY_NAME['dangol/Red'])};
`

export const HistoryDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${_toCSSUnit('8px')};
`

export const HistoryDetailItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${typo(TYPO_KEY_NAME['Body3/Regular'])}
  color: ${color(COLOR_KEY_NAME['Gray/gray_9'])};
`

export const HistoryDetailLabel = styled.span`
  margin-right: ${_toCSSUnit('8px')};
`

export const HistoryDetailValue = styled.span`
  color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
`
