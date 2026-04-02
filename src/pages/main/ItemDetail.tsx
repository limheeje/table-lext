import {useState, useEffect, useRef} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import {PATHS} from '@/routes/paths'
import LayoutHeader, {TYPE_KEYNAME} from '@/components/LayoutHeader'
import {useModal} from '@/contexts/ModalContext'
import {useCouponUseModal} from '@/hooks/useCouponUseModal'
import BsIcon from '@/components/common/BsIcon'
import MyCoupon from '@/components/MyCoupon'
import {
  Content,
  ItemDetailInfo,
  ItemDetailTitle,
  ItemDetailImg,
  ItemInfo,
  ItemTitle,
  ItemDetailBenefit,
  ItemPoint,
  ItemStamp,
  ItemCoupon,
  ItemDetailData,
  TabMenu,
  TabItem,
  TabContent,
  TabContentInner,
  TabContentTit,
  NoCoupon,
  NoHistory,
  HistoryWrap,
  HistoryGroup,
  HistoryDate,
  HistoryItem,
  HistoryDateWrapper,
  HistoryPaymentCancelLabel,
  HistoryDetails,
  HistoryDetailItem,
  HistoryDetailLabel,
  HistoryDetailValue,
  HistoryPayment
} from './index.style'

interface ItemData {
  id: number
  title: string
  point?: number
  coupon_rep?: string | number
  coupon_exc?: string | number
  coupon_all?: number
  stamp?: number
  stamp_all?: number
  date?: string
  image: string
}

interface CouponData {
  id: number
  title: string
  discount: string
  addSupportText?: string
  condition: string
  period: string
  useOfflineYN?: string
  useOnlineYN?: string
  lineCountEllipsis?: number
  buttonType?: 'use' | 'download' | 'app'
  onClick?: () => void
}

interface HistoryData {
  id: number
  date: string
  paymentAmount: number
  pointEarned?: number
  pointDeducted?: number
  stampEarned?: number
  couponUsed: boolean
  isCanceled: boolean
}

export default function ItemDetail() {
  const navigate = useNavigate()
  const location = useLocation()
  const item = location.state as ItemData | null
  const [activeTab, setActiveTab] = useState<'coupon' | 'history'>('coupon')
  const {openAppInstallModal, closeAllModals} = useModal()
  const {openUseModal} = useCouponUseModal()
  const hasShownModal = useRef(false)

  // 매장 전용 쿠폰
  const [storeCoupons, setStoreCoupons] = useState<CouponData[]>([
    {
      id: 1,
      title: '단골 가입 쿠폰',
      useOfflineYN: 'N',
      useOnlineYN: 'N',
      lineCountEllipsis: 3,
      discount: '20% 할인',
      condition: '제한 없음',
      period: '상시 사용 가능',
      buttonType: 'download',
      onClick: () => openUseModal()
    },
    {
      id: 2,
      title: 'VIP 쿠폰',
      useOfflineYN: 'N',
      useOnlineYN: 'N',
      lineCountEllipsis: 2,
      discount: '아이스아메리카노',
      addSupportText: '구매 시 1,000원 할인',
      condition: '대상 상품 포함 주문 시 사용 가능',
      period: '발급 후 7일 이내',
      buttonType: 'app',
      onClick: () => handleDownloadCoupon(2)
    }
  ])

  // 앱 전용 쿠폰
  const [appCoupons, setAppCoupons] = useState<CouponData[]>([
    {
      id: 3,
      title: '11월 프로모션 쿠폰',
      discount: '10% 할인',
      lineCountEllipsis: 1,
      condition: '최종금액 2만원 이상 주문',
      period: '발급 후 7일 이내',
      buttonType: 'app',
      onClick: () => handleAppInstallModal(3)
    },
    {
      id: 4,
      title: '단골가입쿠폰',
      discount: '2,000원 할인2,000원 할인2,000원 할인',
      lineCountEllipsis: 2,
      condition: '최종금액 2만원 이상 주문',
      period: '발급 후 7일 이내',
      buttonType: 'app',
      onClick: () => handleAppInstallModal(4)
    },
    {
      id: 4,
      title: '단골가입쿠폰',
      discount: '2,000원 할인000원 할인000원 할인000원 할인000원 할인',
      lineCountEllipsis: 3,
      condition: '최종금액 2만원 이상 주문',
      period: '발급 후 7일 이내',
      buttonType: 'app',
      onClick: () => handleAppInstallModal(4)
    }
  ])

  // download 버튼 클릭 시 use로 변경 ui 확인 용
  const handleDownloadCoupon = (couponId: number) => {
    setStoreCoupons((prevCoupons) =>
      prevCoupons.map((coupon) =>
        coupon.id === couponId
          ? {
              ...coupon,
              buttonType: 'use' as const,
              onClick: () => openUseModal()
            }
          : coupon
      )
    )
    setAppCoupons((prevCoupons) =>
      prevCoupons.map((coupon) =>
        coupon.id === couponId
          ? {
              ...coupon,
              buttonType: 'use' as const,
              onClick: () => openUseModal()
            }
          : coupon
      )
    )
  }

  // 앱 설치 모달 열기
  const handleAppInstallModal = (__couponId: number) => {
    openAppInstallModal()
  }

  // 이용 내역
  const historyData: HistoryData[] = [
    {
      id: 1,
      date: '2025.11.11',
      paymentAmount: 20000,
      pointEarned: 200,
      pointDeducted: 1100,
      couponUsed: true,
      isCanceled: false
    },
    {
      id: 2,
      date: '2025.10.10',
      paymentAmount: 10000,
      pointEarned: 100,
      pointDeducted: 0,
      couponUsed: false,
      isCanceled: false
    },
    {
      id: 3,
      date: '2025.10.09',
      paymentAmount: 10000,
      stampEarned: 1,
      couponUsed: true,
      isCanceled: false
    },
    {
      id: 4,
      date: '2025.10.08',
      paymentAmount: 0,
      stampEarned: 1,
      couponUsed: true,
      isCanceled: false
    },
    {
      id: 5,
      date: '2025.10.08',
      paymentAmount: 20000,
      pointEarned: 200,
      pointDeducted: 1100,
      couponUsed: true,
      isCanceled: true
    }
  ]

  // 페이지 진입 시 앱 설치하기 모달 실행
  useEffect(() => {
    if (!hasShownModal.current) {
      //openAppInstallModal()
      hasShownModal.current = true
    }
  }, [openAppInstallModal])

  // 페이지 이동 시 모달 닫기
  useEffect(() => {
    return () => {
      closeAllModals()
      hasShownModal.current = false
    }
  }, [closeAllModals, location.pathname])

  if (!item) {
    return (
      <>
        <LayoutHeader type={TYPE_KEYNAME.TYPE3} title="내 단골가게" onBack={() => navigate(PATHS['MAIN'])} />
        <Content>항목없음</Content>
      </>
    )
  }

  return (
    <>
      <LayoutHeader type={TYPE_KEYNAME.TYPE3} title="내 단골가게" onBack={() => navigate(PATHS['MAIN'])} />
      <Content>
        <ItemDetailInfo>
          <ItemDetailTitle>
            {item.image && (
              <ItemDetailImg>
                <img src={item.image} alt={item.title} />
              </ItemDetailImg>
            )}
            <ItemInfo>{item.title && <ItemTitle>{item.title}</ItemTitle>}</ItemInfo>
          </ItemDetailTitle>
          {(item.point || item.stamp || item.stamp_all || item.coupon_all) && (
            <ItemDetailBenefit>
              {item.point && (
                <ItemPoint>
                  <BsIcon.P width="20px" height="20px"></BsIcon.P>
                  <ItemDetailData>{item.point}P</ItemDetailData>
                </ItemPoint>
              )}
              {(item.stamp || item.stamp_all) && (
                <ItemStamp>
                  <BsIcon.S width="20px" height="20px"></BsIcon.S>
                  <ItemDetailData>
                    <strong>{item.stamp}</strong>/{item.stamp_all}개
                  </ItemDetailData>
                </ItemStamp>
              )}
              {item.coupon_all && (
                <ItemCoupon>
                  <BsIcon.T width="20px" height="20px"></BsIcon.T>
                  <ItemDetailData>
                    <strong>{item.coupon_all}장</strong>
                  </ItemDetailData>
                </ItemCoupon>
              )}
            </ItemDetailBenefit>
          )}
        </ItemDetailInfo>
        <TabMenu>
          <TabItem $active={activeTab === 'coupon'} onClick={() => setActiveTab('coupon')}>
            내 단골 쿠폰
          </TabItem>
          <TabItem $active={activeTab === 'history'} onClick={() => setActiveTab('history')}>
            이용 내역
          </TabItem>
        </TabMenu>
        <TabContent>
          {activeTab === 'coupon' && (
            <TabContentInner>
              <TabContentTit>매장 전용 쿠폰</TabContentTit>
              {storeCoupons.length > 0 ? (
                storeCoupons.map((coupon) => (
                  <MyCoupon
                    key={coupon.id}
                    title={coupon.title}
                    useOfflineYN={coupon.useOfflineYN}
                    useOnlineYN={coupon.useOnlineYN}
                    lineCountEllipsis={coupon.lineCountEllipsis}
                    discount={coupon.discount}
                    addSupportText={coupon.addSupportText}
                    condition={coupon.condition}
                    period={coupon.period}
                    buttonType={coupon.buttonType}
                    onClick={coupon.onClick}
                  />
                ))
              ) : (
                <NoCoupon>사용 가능한 쿠폰이 없습니다.</NoCoupon>
              )}
              <TabContentTit>앱 전용 쿠폰</TabContentTit>
              {appCoupons.length > 0 ? (
                appCoupons.map((coupon) => (
                  <MyCoupon
                    key={coupon.id}
                    title={coupon.title}
                    discount={coupon.discount}
                    addSupportText={coupon.addSupportText}
                    lineCountEllipsis={coupon.lineCountEllipsis}
                    condition={coupon.condition}
                    period={coupon.period}
                    buttonType={coupon.buttonType}
                    onClick={coupon.onClick}
                  />
                ))
              ) : (
                <NoCoupon>사용 가능한 쿠폰이 없습니다.</NoCoupon>
              )}
            </TabContentInner>
          )}
          {activeTab === 'history' && (
            <div>
              <HistoryWrap>
                {historyData.length > 0 ? (
                  historyData.map((history) => (
                    <HistoryGroup key={history.date} $isCanceled={history.isCanceled}>
                      <HistoryDateWrapper>
                        <HistoryDate>{history.date}</HistoryDate>
                        {history.isCanceled ? <HistoryPaymentCancelLabel>결제취소</HistoryPaymentCancelLabel> : ''}
                      </HistoryDateWrapper>
                      <HistoryItem key={history.id}>
                        <HistoryDetails>
                          {history.paymentAmount !== undefined && (
                            <HistoryDetailItem>
                              <HistoryDetailLabel>총 결제 금액</HistoryDetailLabel>
                              <HistoryPayment>{history.paymentAmount.toLocaleString()}원</HistoryPayment>
                            </HistoryDetailItem>
                          )}
                          {history.pointEarned !== undefined && (
                            <HistoryDetailItem>
                              <HistoryDetailLabel>포인트 적립</HistoryDetailLabel>
                              <HistoryDetailValue>{history.pointEarned.toLocaleString()}P</HistoryDetailValue>
                            </HistoryDetailItem>
                          )}
                          {history.pointDeducted !== undefined && (
                            <HistoryDetailItem>
                              <HistoryDetailLabel>포인트 차감</HistoryDetailLabel>
                              <HistoryDetailValue>{history.pointDeducted.toLocaleString()}P</HistoryDetailValue>
                            </HistoryDetailItem>
                          )}
                          {history.stampEarned !== undefined && (
                            <HistoryDetailItem>
                              <HistoryDetailLabel>스탬프 적립</HistoryDetailLabel>
                              <HistoryDetailValue>{history.stampEarned}개</HistoryDetailValue>
                            </HistoryDetailItem>
                          )}
                          {history.couponUsed && (
                            <HistoryDetailItem>
                              <HistoryDetailLabel>쿠폰</HistoryDetailLabel>
                              <HistoryDetailValue>사용</HistoryDetailValue>
                            </HistoryDetailItem>
                          )}
                        </HistoryDetails>
                      </HistoryItem>
                    </HistoryGroup>
                  ))
                ) : (
                  <>
                    <NoHistory>이용 내역이 없습니다.</NoHistory>
                    {/* <NoHistory>최근 1개월 이용 내역만 조회 할 수 있습니다.</NoHistory> */}
                  </>
                )}
              </HistoryWrap>
            </div>
          )}
        </TabContent>
      </Content>
    </>
  )
}
