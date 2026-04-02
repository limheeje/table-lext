import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {PATHS} from '@/routes/paths'
import LayoutHeader, {TYPE_KEYNAME} from '@/components/LayoutHeader'
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

export default function NoHistoryCase() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'coupon' | 'history'>('history')

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
  const storeCoupons: CouponData[] = [
    {
      id: 1,
      title: '단골가입쿠폰',
      discount: '2,000원 할인',
      condition: '최종금액 2만원 이상 주문',
      period: '발급 후 7일 이내',
      buttonType: 'use',
      onClick: () => console.log('쿠폰 사용')
    }
  ]

  // 앱 전용 쿠폰
  const appCoupons: CouponData[] = [
    {
      id: 3,
      title: '11월 프로모션 쿠폰',
      discount: '10% 할인',
      condition: '최종금액 2만원 이상 주문',
      period: '발급 후 7일 이내',
      buttonType: 'app',
      onClick: () => console.log('APP 다운')
    }
  ]

  // 이용 내역 없는 경우
  const historyData: any[] = []

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
                  <NoHistory>이용 내역이 없습니다.</NoHistory>
                )}
              </HistoryWrap>
            </div>
          )}
        </TabContent>
      </Content>
    </>
  )
}
