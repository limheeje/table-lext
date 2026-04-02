import BsButton, {SIZE_MD} from '@/components/common/BsButton'
import {useToast} from '@/contexts/ToastContext'
import {ICON_X, ICON_CHECK, ALIGN_BOTTOM} from '@/components/common/BsToast'

export default function ToastCase() {
  const {openToast} = useToast()
  return (
    <>
      <BsButton
        size={SIZE_MD}
        type={'primary'}
        onClick={() =>
          openToast({
            body: '쿠폰이 사용완료 되었어요', //기본값 ""
            iconType: ICON_CHECK, //기본값 ICON_CHECK
            closeTimer: 3000, //기본값 3000
            align: ALIGN_BOTTOM, //기본값 ALIGN_BOTTOM | ALIGN_TOP
            onClose: () => {
              //토스트 닫힐때
              console.log('close~~~~~')
            },
            onClick: () => {
              //토스트 클릭시 기본콜백은 onClose()
              console.log('clcik~!!!!!!!!!!!!!!!~~~~~~~~')
            }
          })
        }
      >
        쿠폰이 사용완료 되었어요
      </BsButton>
      <br />
      <br />
      <BsButton
        size={SIZE_MD}
        type={'primary'}
        onClick={() =>
          openToast({
            body: '쿠폰을 받지 못했어요', //기본값 ""
            iconType: ICON_X, //기본값 ICON_CHECK
            closeTimer: 3000, //기본값 3000
            align: ALIGN_BOTTOM, //기본값 ALIGN_BOTTOM
            onClose: () => {
              //토스트 닫힐때
              console.log('close~~~~~')
            },
            onClick: () => {
              //토스트 클릭시 기본콜백은 onClose()
              console.log('clcik~!!!!!!!!!!!!!!!~~~~~~~~')
            }
          })
        }
      >
        쿠폰을 받지 못했어요
      </BsButton>
    </>
  )
}
