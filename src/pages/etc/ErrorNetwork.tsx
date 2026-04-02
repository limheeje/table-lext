import BsNull from '@/components/common/BsNull'
import BsIcon from '@/components/common/BsIcon'
import BsButton, {SIZE_XSM} from '@/components/common/BsButton'

export default function ErrorNetwork() {
  return (
    <>
      <BsNull>
        <BsNull.Icon>
          <BsIcon.ErrorNetwork />
        </BsNull.Icon>
        <BsNull.Title>
          <div>네트워크 연결이 원활하지 않습니다</div>
        </BsNull.Title>
        <BsNull.Description>인터넷 연결 상태를 확인해주세요</BsNull.Description>
        <BsNull.ButtonGroup>
          <BsButton type="primary" size={SIZE_XSM} inline={true}>
            새로고침
          </BsButton>
        </BsNull.ButtonGroup>
      </BsNull>
    </>
  )
}
