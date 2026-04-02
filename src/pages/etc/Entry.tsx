import styled from 'styled-components'
import {typo, color, _toCSSUnit} from '@/styles'
import {KEY_NAME as TYPO_KEY_NAME} from '@/styles/foundation/typo'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'
import LayoutHeader, {TYPE_KEYNAME} from '@/components/LayoutHeader'
import BsButton, {TYPE_PRIMARY, TYPE_OUTINE_PRIMARY} from '@/components/common/BsButton'

export const Wrapper = styled.div``
export const WrapperInner = styled.div`
  padding: ${_toCSSUnit('24px')} ${_toCSSUnit('20px')};
`
export const Title = styled.div`
  ${typo(TYPO_KEY_NAME['H2/Bold'])};
  color: ${color(COLOR_KEY_NAME['dangol/Black_0'])};
`
export const ImageBox = styled.div`
  margin: 0 ${_toCSSUnit('-20px')};
`
export const BoldText = styled.div``

export default function Entry() {
  const imgThmb: string = new URL('@/assets/images/img_thb002.png', import.meta.url).href
  return (
    <Wrapper>
      <LayoutHeader type={TYPE_KEYNAME.TYPE5} />
      <WrapperInner>
        <Title>자주 가는 가게의 쿠폰 · 포인트 · 스탬프 혜택을 단골UP에서 모아보세요</Title>
        <div className="MT40"></div>
        <ImageBox>
          <img src={imgThmb} alt="" />
        </ImageBox>
        <div className="MT40"></div>
        <BsButton type={TYPE_PRIMARY}>
          <BoldText>단골UP 가입하기</BoldText>
        </BsButton>
        <BsButton type={TYPE_OUTINE_PRIMARY} className="MT12">
          <BoldText> 내 단골 혜택 모두 보기</BoldText>
        </BsButton>
      </WrapperInner>
    </Wrapper>
  )
}
