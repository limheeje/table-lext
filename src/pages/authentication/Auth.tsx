import {useState} from 'react'
import LayoutHeader, {TYPE_KEYNAME} from '@/components/LayoutHeader'
import {Content, MainText, SubText, Img, ButtonWrapper} from './index.style'
import BsButton from '@/components/common/BsButton'
import BsInputField from '@/components/common/BsInputField'

export default function Authentication() {
  const imgThmb: string = new URL('@/assets/images/img_thb001.png', import.meta.url).href
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handlePhoneChange = (value: string): void => {
    setPhoneNumber(value)
    // 입력 중에는 에러 상태 초기화
    if (hasError) {
      setHasError(false)
      setErrorMessage('')
    }
  }

  const handleValidation = (isValid: boolean): void => {
    if (!isValid) {
      setHasError(true)
      setErrorMessage('입력하신 휴대폰 번호로 가입된 정보가 없습니다.')
    }
  }

  const handleConfirm = (): void => {
    // 추후 실제 인증 로직 추가
    setHasError(true)
    setErrorMessage('입력하신 휴대폰 번호로 가입된 정보가 없습니다.')
  }

  // 숫자만 추출 11자리인지 확인
  const phoneNumberDigits: string = phoneNumber.replace(/\D/g, '')
  const isPhoneNumberValid: boolean = phoneNumberDigits.length === 11

  return (
    <>
      <LayoutHeader type={TYPE_KEYNAME.TYPE1} />
      <Content>
        <MainText>
          자주 가는 가게의 혜택을 <br></br> 단골 UP에서 한 번에 모아드려요.
        </MainText>
        <SubText>쿠폰을 사용하기 전에 간단한 본인확인이 필요해요.</SubText>
        <BsInputField
          value={phoneNumber}
          onChange={handlePhoneChange}
          onValidation={handleValidation}
          error={hasError}
          errorMessage={errorMessage}
        />
        <Img src={imgThmb} alt="" />
        <ButtonWrapper>
          <BsButton type="primary" onClick={handleConfirm} disabled={!isPhoneNumberValid}>
            확인
          </BsButton>
        </ButtonWrapper>
      </Content>
    </>
  )
}
