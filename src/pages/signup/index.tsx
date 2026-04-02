import {useState, type ChangeEvent} from 'react'
import LayoutHeader, {TYPE_KEYNAME} from '@/components/LayoutHeader'
import {useNavigate} from 'react-router-dom'
import {PATHS} from '@/routes/paths'
import {Content, MainText, ButtonWrapper} from '@/pages/authentication/index.style'
import BsButton from '@/components/common/BsButton'
import BsInputField from '@/components/common/BsInputField'
import BsCheckbox, {THEME_2} from '@/components/common/BsCheckbox/index'
import AgreeTerms from '@/components/AgreeTerms/index'

type PropsAgreeItem = {
  codeId?: number
  codeTitle?: string
  required?: boolean
  checked?: boolean
  codeRoutePath?: string
}
type PropsAgreeItems = PropsAgreeItem[]
export default function Signup() {
  const navigate = useNavigate()

  const [agreeItems, setAgreeItems] = useState<PropsAgreeItems>([
    {
      codeId: 1,
      codeTitle: '[필수] 개인정보 수집 및 이용동의',
      required: true,
      checked: false,
      codeRoutePath: ''
    },
    {
      codeId: 2,
      codeTitle: '[필수] 가맹점 개인정보 수집 및 이용동의',
      required: true,
      checked: false,
      codeRoutePath: ''
    },
    {
      codeId: 3,
      codeTitle: '[선택] 마케팅 수집동의',
      required: false,
      checked: false,
      codeRoutePath: ''
    }
  ])
  const isAllChecked = agreeItems.every((item) => item.checked)
  const isDisabled = agreeItems.filter((item) => item.required).every((item) => item.checked)
  function onChangeAllAgree(e: ChangeEvent) {
    const $target = e.target as HTMLInputElement
    setAgreeItems(
      agreeItems.map((_item: PropsAgreeItem) => ({
        ..._item,
        checked: $target.checked
      }))
    )
  }
  function onChangeLocalAgree(item: PropsAgreeItem, e: ChangeEvent) {
    setAgreeItems(
      agreeItems.map((_item: PropsAgreeItem) => {
        let __item = _item
        const $target = e.target as HTMLInputElement
        if (_item.codeId === item.codeId) {
          __item = {
            ...__item,
            checked: $target.checked
          }
        }
        return __item
      })
    )
  }
  function onClickRightButton(item: PropsAgreeItem) {
    switch (item.codeId) {
      case 1:
        navigate(PATHS['TERMS'])
        break
      case 2:
        navigate(PATHS['TERMS'])
        break
      case 3:
        navigate(PATHS['TERMS'])
        break
    }
  }
  return (
    <>
      <LayoutHeader type={TYPE_KEYNAME.TYPE3} title="단골UP 가입" onBack={() => navigate(PATHS['MAIN'])} />
      <Content>
        <MainText>
          휴대폰 번호만 입력하면 <br></br>
          방문한 매장의 혜택을 받을 수 있어요
        </MainText>
        <div className="MT40"></div>
        <BsInputField />
        <ButtonWrapper>
          <AgreeTerms>
            <AgreeTerms.Depth1>
              <BsCheckbox checked={isAllChecked} onChange={(e: ChangeEvent) => onChangeAllAgree(e)}>
                <BsCheckbox.TextLevel1>전체동의</BsCheckbox.TextLevel1>
              </BsCheckbox>
            </AgreeTerms.Depth1>
            {agreeItems.map((item: PropsAgreeItem, index) => (
              <AgreeTerms.Depth2 key={index} useRightButton onClickRightButton={() => onClickRightButton(item)}>
                <BsCheckbox
                  checked={item.checked}
                  theme={THEME_2}
                  onChange={(e: ChangeEvent) => onChangeLocalAgree(item, e)}
                >
                  <BsCheckbox.TextLevel2>{item.codeTitle}</BsCheckbox.TextLevel2>
                </BsCheckbox>
              </AgreeTerms.Depth2>
            ))}
          </AgreeTerms>

          <div className="MT34"></div>

          <BsButton type="primary" disabled={!isDisabled}>
            가입하기
          </BsButton>
        </ButtonWrapper>
      </Content>
    </>
  )
}
