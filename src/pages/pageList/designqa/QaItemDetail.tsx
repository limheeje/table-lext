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
  HistoryDetails,
  HistoryDetailItem,
  HistoryDetailLabel,
  HistoryDetailValue,
  HistoryPayment
} from '@/pages/main/index.style'

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
  condition: string
  period: string
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
}

export default function QaItemDetail() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<'coupon' | 'history'>('coupon')
  const {openAppInstallModal, closeAllModals} = useModal()
  const {openUseModal} = useCouponUseModal()
  const hasShownModal = useRef(false)

  // 디자인 QA 페이지용 데이터
  const item: ItemData = {
    id: 11111,
    title: '더맛있는족발보쌈(선릉본점)',
    coupon_rep: 2000,
    coupon_exc: 'N',
    coupon_all: 10,
    stamp: 3,
    stamp_all: 10,
    date: '2025.12.05',
    image: './images/image002.png'
  }

  // 매장 전용 쿠폰
  const [storeCoupons, setStoreCoupons] = useState<CouponData[]>([
    {
      id: 1,
      title: '단골가입쿠폰',
      discount: '2,000원 할인',
      condition: '최종금액 2만원 이상 주문',
      period: '발급 후 7일 이내',
      buttonType: 'use',
      onClick: () => openUseModal()
    },
    {
      id: 2,
      title: '일이삼사오육칠팔구십일이일이삼사오육칠팔구십일이',
      discount: '1,000,000원 할인 1,000,000원 할인 1,000,000원 할인',
      condition: '최종금액 2만원 이상 주문',
      period: '발급 후 7일 이내',
      buttonType: 'download',
      onClick: () => handleDownloadCoupon(2)
    }
  ])

  // 앱 전용 쿠폰
  const [appCoupons, setAppCoupons] = useState<CouponData[]>([
    {
      id: 3,
      title: '11월 프로모션 쿠폰',
      discount: '10% 할인',
      condition: '최종금액 2만원 이상 주문',
      period: '발급 후 7일 이내',
      buttonType: 'app',
      onClick: () => handleAppInstallModal(3)
    },
    {
      id: 4,
      title: '단골가입쿠폰',
      discount: '2,000원 할인',
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
      couponUsed: true
    },
    {
      id: 2,
      date: '2025.10.10',
      paymentAmount: 10000,
      pointEarned: 100,
      pointDeducted: 0,
      couponUsed: false
    },
    {
      id: 3,
      date: '2025.10.09',
      paymentAmount: 10000,
      stampEarned: 1,
      couponUsed: true
    },
    {
      id: 4,
      date: '2025.10.08',
      paymentAmount: 0,
      stampEarned: 1,
      couponUsed: true
    }
  ]

  // 페이지 진입 시 앱 설치하기 모달 실행
  useEffect(() => {
    if (!hasShownModal.current) {
      openAppInstallModal()
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

  return (
    <>
      <LayoutHeader type={TYPE_KEYNAME.TYPE3} title="내 단골가게" onBack={() => navigate(PATHS['PAGELIST'])} />
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
                    discount={coupon.discount}
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
                    <HistoryGroup key={history.date}>
                      <HistoryDate>{history.date}</HistoryDate>
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
