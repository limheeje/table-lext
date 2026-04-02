import LayoutHeader, {TYPE_KEYNAME} from '@/components/LayoutHeader'
import TermsDetail from '@/components/TermsDetail/index'
import BsButton from '@/components/common/BsButton'

export default function TermsCase() {
  return (
    <>
      <LayoutHeader type={TYPE_KEYNAME.TYPE4} title="약관 상세보기" />
      <TermsDetail>
        <TermsDetail.Title>개인정보 수집 및 이용 동의</TermsDetail.Title>
        <TermsDetail.Description>
          엔에이치엔케이씨피 주식회사는 아래와 같이 귀하의 개인정보를 수집·이용하고자 합니다.
        </TermsDetail.Description>
        <TermsDetail.Dl>
          <TermsDetail.Dt>1. 수집하는 개인정보 항목</TermsDetail.Dt>
          <TermsDetail.Dd>멤버십 회원번호, 멤버십 서비스 이용 기록</TermsDetail.Dd>
        </TermsDetail.Dl>
        <TermsDetail.Dl>
          <TermsDetail.Dt>1. 수집하는 개인정보 항목</TermsDetail.Dt>
          <TermsDetail.Dd>멤버십 회원번호, 멤버십 서비스 이용 기록</TermsDetail.Dd>
        </TermsDetail.Dl>
        <TermsDetail.BottomArea>
          <BsButton type="primary">확인</BsButton>
        </TermsDetail.BottomArea>
      </TermsDetail>
    </>
  )
}
