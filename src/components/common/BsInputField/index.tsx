import {useState} from 'react'
import {Wrapper, Input, ErrorMessage} from '@/components/common/BsInputField/index.style'
import type {Props} from '@/components/common/BsInputField/index.type'

const BsInputField = ({
  value: controlledValue,
  onChange,
  onValidation,
  error: externalError = false,
  errorMessage: externalErrorMessage,
  placeholder = '휴대폰 번호 입력'
}: Props) => {
  const [internalValue, setInternalValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [hasBeenFocused, setHasBeenFocused] = useState(false)

  const value = controlledValue !== undefined ? controlledValue : internalValue
  const isError = externalError
  const displayErrorMessage = externalErrorMessage

  // 숫자만 추출
  const extractNumbers = (str: string) => {
    return str.replace(/\D/g, '')
  }

  // 전화번호 포맷팅 (3-4-4)
  const formatPhoneNumber = (numbers: string) => {
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`
  }

  // 값 업데이트
  const updateValue = (newValue: string) => {
    const numbers = extractNumbers(newValue)
    // 11자리 초과 시 차단
    if (numbers.length > 11) return

    const formatted = formatPhoneNumber(numbers)

    if (controlledValue === undefined) {
      setInternalValue(formatted)
    }
    onChange?.(formatted)

    // 입력 중에는 유효성 검사 통과로 처리
    onValidation?.(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value)
  }

  const handleFocus = () => {
    setIsFocused(true)
    setHasBeenFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
    // 테두리 색상 유지
  }

  return (
    <Wrapper>
      <Input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        $isFocused={isFocused || hasBeenFocused}
        $hasError={isError}
      />
      {displayErrorMessage && <ErrorMessage>{displayErrorMessage}</ErrorMessage>}
    </Wrapper>
  )
}

BsInputField.displayName = 'BsInputField'

export default BsInputField
