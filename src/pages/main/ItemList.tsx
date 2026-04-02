import {Link} from 'react-router-dom'
import {PATHS} from '@/routes/paths'
import LayoutHeader, {TYPE_KEYNAME} from '@/components/LayoutHeader'
import {
  Content,
  ItemListWrap,
  ItemLists,
  ItemImg,
  ItemInfo,
  ItemTitle,
  ItemBenefit,
  ItemPoint,
  ItemStamp,
  ItemCouponText,
  ItemDate,
  ItemData
} from './index.style'
import BsIcon from '@/components/common/BsIcon'

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

export default function ItemList() {
  const items: ItemData[] = [
    {
      id: 1,
      title: '일이삼사오육칠팔구십일이삼사오일이삼사오육칠팔구십일이삼사오',
      point: 560,
      coupon_rep: 2000,
      coupon_exc: 4,
      coupon_all: 5,
      date: '2025.11.11',
      image: './images/image001.png'
    },
    {
      id: 2,
      title: '더맛있는족발보쌈(선릉본점)',
      stamp: 3,
      stamp_all: 10,
      coupon_rep: 2000,
      coupon_exc: 'N',
      coupon_all: 10,
      date: '2025.12.05',
      image: './images/image002.png'
    },
    {
      id: 3,
      title: '카페 더 문 (CAFE THE MOON)',
      date: '2025.11.12',
      image: './images/image003.png'
    },
    {
      id: 4,
      title: '청년다방떡볶이(판교유스페이스점)',
      stamp: 9,
      stamp_all: 10,
      coupon_rep: 2000,
      coupon_exc: 'N',
      coupon_all: 10,
      image: './images/image004.png'
    },
    {
      id: 5,
      title: '이삭 토스트(판교에이치스퀘어점)',
      image: './images/image005.png'
    },
    {
      id: 6,
      title: '국민닭발(분당점)',
      point: 560,
      date: '2025.12.06',
      image: './images/image006.png'
    },
    {
      id: 7,
      title: '이삭 토스트(판교유스페이스점)',
      stamp: 3,
      stamp_all: 10,
      date: '2025.12.08',
      image: './images/image005.png'
    },
    {
      id: 8,
      title: '락온로스터리(판교에이치스퀘어점)',
      coupon_rep: 1000,
      coupon_exc: 4,
      coupon_all: 5,
      date: '2025.12.07',
      image: './images/image003.png'
    }
  ]

  return (
    <>
      <LayoutHeader type={TYPE_KEYNAME.TYPE2} />
      <Content>
        <ItemListWrap>
          {items.map((item) => (
            <Link key={item.id} to={PATHS['MAIN_ITEM_DETAIL'](item.id)} state={item}>
              <ItemLists>
                <ItemImg>
                  <img src={item.image} alt={item.title} />
                </ItemImg>
                <ItemInfo>
                  <ItemTitle>{item.title}</ItemTitle>
                  {(item.point || item.stamp || item.stamp_all || item.coupon_rep || item.coupon_exc) && (
                    <ItemBenefit>
                      {item.point && (
                        <ItemPoint>
                          <BsIcon.P width="14px" height="14px"></BsIcon.P>
                          <ItemData>{item.point}</ItemData>
                        </ItemPoint>
                      )}
                      {(item.stamp || item.stamp_all) && (
                        <ItemStamp>
                          <BsIcon.S width="14px" height="14px"></BsIcon.S>
                          <ItemData>
                            <strong>{item.stamp}</strong>/{item.stamp_all}
                          </ItemData>
                        </ItemStamp>
                      )}
                      {(item.coupon_rep || item.coupon_exc) && <ItemCouponText>쿠폰할인</ItemCouponText>}
                    </ItemBenefit>
                  )}
                  {item.date && <ItemDate>{item.date}</ItemDate>}
                </ItemInfo>
              </ItemLists>
            </Link>
          ))}
        </ItemListWrap>
      </Content>
    </>
  )
}
