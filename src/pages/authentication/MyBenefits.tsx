import {useState} from 'react'
import LayoutHeader, {TYPE_KEYNAME} from '@/components/LayoutHeader'
import {Content, MainText, ButtonWrapper} from './index.style'
import BsButton from '@/components/common/BsButton'
import BsInputField from '@/components/common/BsInputField'

export default function Authentication() {
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
      <LayoutHeader type={TYPE_KEYNAME.TYPE3} title="본인확인" />
      <Content>
        <MainText>
          휴대폰 번호만 입력하면 <br />
          방문한 매장의 혜택을 확인할 수 있어요
        </MainText>
        <div className="MT40"></div>
        <BsInputField
          value={phoneNumber}
          onChange={handlePhoneChange}
          onValidation={handleValidation}
          error={hasError}
          errorMessage={errorMessage}
        />
        <ButtonWrapper>
          <BsButton type="primary" onClick={handleConfirm} disabled={!isPhoneNumberValid}>
            단골 혜택 확인하기
          </BsButton>
        </ButtonWrapper>
      </Content>
    </>
  )
}
