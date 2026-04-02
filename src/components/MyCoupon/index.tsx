import type {Props, ButtonType} from '@/components/MyCoupon/index.type'
import {
  CouponWrap,
  CouponInner,
  CouponInfo,
  CouponHeadUseInfo,
  CouponUseInfoOnline,
  CouponUseInfoOffline,
  CouponTitle,
  CouponDiscount,
  CouponUserCondition,
  CouponCondition,
  CouponPeriod,
  CouponButton,
  Button
} from '@/components/MyCoupon/index.style'

const MyCoupon = ({
  title,
  discount,
  addSupportText,
  condition,
  period,
  buttonLabel,
  buttonType,
  lineCountEllipsis = 1,
  onClick,
  ...props
}: Props) => {
  const getButtonLabel = () => {
    if (buttonLabel) return buttonLabel
    switch (buttonType) {
      case 'use':
        return '쿠폰사용'
      case 'download':
        return '쿠폰받기'
      case 'app':
        return 'APP 다운'
      default:
        return ''
    }
  }

  return (
    <CouponWrap>
      <CouponInner>
        <CouponInfo>
          {(props.useOfflineYN === 'Y' || props.useOfflineYN === 'Y') && (
            <CouponHeadUseInfo>
              {props.useOfflineYN === 'Y' && <CouponUseInfoOffline>매장사용</CouponUseInfoOffline>}
              {props.useOnlineYN === 'Y' && <CouponUseInfoOnline>온라인사용</CouponUseInfoOnline>}
            </CouponHeadUseInfo>
          )}
          <CouponTitle>{title}</CouponTitle>
          <CouponDiscount lineCountEllipsis={lineCountEllipsis} dangerouslySetInnerHTML={{__html: discount || ''}} />
          {addSupportText ? <CouponDiscount>{addSupportText}</CouponDiscount> : ''}
          <CouponUserCondition>
            <CouponCondition>
              <strong>사용조건</strong>
              {condition}
            </CouponCondition>
            <CouponPeriod>
              <strong>사용기간</strong>
              {period}
            </CouponPeriod>
          </CouponUserCondition>
        </CouponInfo>
        <CouponButton>
          <Button $buttonType={buttonType} onClick={onClick}>
            {getButtonLabel()}
          </Button>
        </CouponButton>
      </CouponInner>
    </CouponWrap>
  )
}

MyCoupon.displayName = 'MyCoupon'

export default MyCoupon
export type {ButtonType}
