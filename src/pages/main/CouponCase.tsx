import MyCoupon from '@/components/MyCoupon'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  margin: 15px 0;
`
export default function CouponCase() {
  return (
    <>
      {/* <MyCoupon
        title={'단골 가입 쿠폰'}
        useOfflineYN={'1'}
        useOnlineYN={'1'}
        lineCountEllipsis={3}
        discount={'1'}
        condition={'1'}
        period={'1'}
        buttonType={'use'} //'use' | 'download' | 'app' | 
      /> */}
      <H1>1) 금액 할인 (정률)</H1>
      <MyCoupon
        title={'단골 가입 쿠폰'}
        lineCountEllipsis={3}
        discount={'20% 할인'}
        condition={'제한 없음'}
        period={'상시 사용 가능'}
        buttonType={'download'}
      />
      <MyCoupon
        title={'단골 가입 쿠폰'}
        lineCountEllipsis={3}
        discount={'20% 할인'}
        condition={'제한 없음'}
        period={'상시 사용 가능'}
        buttonType={'app'}
      />
      <MyCoupon
        title={'단골 가입 쿠폰'}
        useOfflineYN={'Y'}
        useOnlineYN={'Y'}
        lineCountEllipsis={3}
        discount={'20% 할인'}
        condition={'제한 없음'}
        period={'상시 사용 가능'}
        buttonType={'use'}
      />
      <H1>2) 금액 할인 (정액)</H1>
      <MyCoupon
        title={'첫 구매 감사 쿠폰'}
        lineCountEllipsis={3}
        discount={'3,000원 할인'}
        condition={'최소 주문 금액 1.5만원 이상'}
        period={'발급 후 7일 이내'}
        buttonType={'download'}
      />
      <MyCoupon
        title={'첫 구매 감사 쿠폰'}
        lineCountEllipsis={3}
        discount={'3,000원 할인'}
        condition={'최소 주문 금액 1.5만원 이상'}
        period={'발급 후 7일 이내'}
        buttonType={'app'}
      />
      <MyCoupon
        title={'첫 구매 감사 쿠폰'}
        lineCountEllipsis={3}
        useOfflineYN={'Y'}
        useOnlineYN={'N'}
        discount={'3,000원 할인'}
        condition={'최소 주문 금액 2만원 이상'}
        period={'2025.11.10 11:59 까지'}
        buttonType={'use'}
      />
      <H1>3-1) 상품 (특정 상품 일부 할인)</H1>
      <MyCoupon
        title={'VIP 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노<br/>'}
        addSupportText={'구매 시 1,000원 할인'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'download'}
      />
      <MyCoupon
        title={'VIP 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노'}
        addSupportText={'구매 시 1,000원 할인'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'app'}
      />
      <MyCoupon
        title={'VIP 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'Y'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노'}
        addSupportText={'구매 시 1,000원 할인'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'2025.11.10 11:59 까지'}
        buttonType={'use'}
      />
      <MyCoupon
        title={'VIP 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={
          '아이스아메리카노핫아메리카노차가운아메리카노뜨아이스아메리카노핫아메리카노차가운아메리카노뜨구매 시 1,000원 할인'
        }
        addSupportText={'구매 시 1,000원 할인'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'2025.11.10 11:59 까지'}
        buttonType={'download'}
      />
      <H1>3-2) 상품 (특정 상품 전체 할인)</H1>
      <MyCoupon
        title={'VIP 쿠폰'}
        lineCountEllipsis={3}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노'}
        addSupportText={'구매 시 전액 할인'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'download'}
      />
      <MyCoupon
        title={'VIP 쿠폰'}
        lineCountEllipsis={3}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노'}
        addSupportText={'구매 시 전액 할인'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'app'}
      />
      <MyCoupon
        title={'VIP 쿠폰'}
        lineCountEllipsis={3}
        useOfflineYN={'Y'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노'}
        addSupportText={'구매 시 전액 할인'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'2025.11.10 11:59 까지'}
        buttonType={'use'}
      />
      <H1>4) 상품 (1+1)</H1>
      <MyCoupon
        title={'리마인드 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'1+1(아이스아메리카노)'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'download'}
      />
      <MyCoupon
        title={'리마인드 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'3,000원 할인'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'app'}
      />
      <MyCoupon
        title={'리마인드 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'Y'}
        useOnlineYN={'N'}
        discount={'3,000원 할인'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'2025.11.10 11:59 까지'}
        buttonType={'use'}
      />
      <MyCoupon
        title={'리마인드 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'1+1(아이스아메리카노핫뜨거운아이스아메리카노뜨거운아이스아메리카노뜨거운아이스아메리카노'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'download'}
      />
      <H1>5) 상품 (스탬프 리워드)</H1>
      <MyCoupon
        title={'스탬프 보상 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'download'}
      />
      <MyCoupon
        title={'스탬프 보상 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'app'}
      />
      <MyCoupon
        title={'스탬프 보상 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'Y'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'2025.11.10 11:59 까지'}
        buttonType={'use'}
      />
      <MyCoupon
        title={'스탬프 보상 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'아이스아메리카노핫아이스뜨거운아이스아메리카노이스아메리카노이스아메리카노'}
        condition={'대상 상품 포함 주문 시 사용 가능'}
        period={'발급 후 7일 이내'}
        buttonType={'download'}
      />
      <H1>6) 상품 (무료 증정 → 2차 스펙/개발 전)</H1>
      <MyCoupon
        title={'단골 가입 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'무료 증정(아메리카노)'}
        condition={'최소 주문 금액 5,000원 이상'}
        period={'발급 후 7일 이내'}
        buttonType={'download'}
      />
      <MyCoupon
        title={'단골 가입 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'무료 증정(아메리카노)'}
        condition={'최소 주문 금액 5,000원 이상'}
        period={'발급 후 7일 이내'}
        buttonType={'app'}
      />
      <MyCoupon
        title={'단골 가입 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'Y'}
        useOnlineYN={'Y'}
        discount={'무료 증정(아메리카노)'}
        condition={'최소 주문 금액 5,000원 이상'}
        period={'2025.11.10 11:59 까지'}
        buttonType={'use'}
      />
      <MyCoupon
        title={'단골 가입 쿠폰'}
        lineCountEllipsis={2}
        useOfflineYN={'N'}
        useOnlineYN={'N'}
        discount={'무료 증정(아메리카노이스뜨거운아이스아메리카노아메리카노이스뜨거운아이스아메리카노'}
        condition={'최소 주문 금액 5,000원 이상'}
        period={'발급 후 7일 이내'}
        buttonType={'download'}
      />
    </>
  )
}
