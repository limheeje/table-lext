import BsButton, {SIZE_MD, TYPE_SECONDARY} from '@/components/common/BsButton'
import {useModal} from '@/contexts/ModalContext'
import type {PropsClickCallback} from '@/contexts/ModalContext'
import {TYPE_MODAL} from '@/components/common/BsModal/index.style'

export default function AlertCase() {
  const {openModal} = useModal()
  return (
    <>
      <BsButton
        size={SIZE_MD}
        type={'primary'}
        onClick={() =>
          openModal({
            type: TYPE_MODAL,
            title: '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
            buttonItems: [
              {
                title: 'text',
                clickCallback: (params: PropsClickCallback) => {
                  alert(JSON.stringify(params.modalItem))
                  params.onClose?.(params.modalItem!)
                }
              }
            ]
          })
        }
      >
        타이틀+버튼1
      </BsButton>
      <br />
      <br />
      <BsButton
        size={SIZE_MD}
        type={'primary'}
        onClick={() =>
          openModal({
            type: TYPE_MODAL,
            title: '테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트',
            buttonItems: [
              {
                title: 'text',
                type: TYPE_SECONDARY,
                clickCallback: (params: PropsClickCallback) => {
                  params.onClose?.(params.modalItem!)
                }
              },
              {
                title: 'text',
                clickCallback: (params: PropsClickCallback) => {
                  alert(JSON.stringify(params.modalItem))
                  params.onClose?.(params.modalItem!)
                }
              }
            ]
          })
        }
      >
        타이틀+버튼2
      </BsButton>
      <br />
      <br />
      <BsButton
        size={SIZE_MD}
        type={'primary'}
        onClick={() =>
          openModal({
            type: TYPE_MODAL,
            title: '테스트',
            body: '설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글',
            buttonItems: [
              {
                title: 'text',
                clickCallback: (params: PropsClickCallback) => {
                  alert(JSON.stringify(params.modalItem))
                  params.onClose?.(params.modalItem!)
                }
              }
            ]
          })
        }
      >
        타이틀+설명+버튼1
      </BsButton>
      <br />
      <br />
      <BsButton
        size={SIZE_MD}
        type={'primary'}
        onClick={() =>
          openModal({
            type: TYPE_MODAL,
            title: '테스트',
            body: '설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글설명글',
            buttonItems: [
              {
                title: 'text',
                type: TYPE_SECONDARY,
                clickCallback: (params: PropsClickCallback) => {
                  params.onClose?.(params.modalItem!)
                }
              },
              {
                title: 'text',
                clickCallback: (params: PropsClickCallback) => {
                  alert(JSON.stringify(params.modalItem))
                  params.onClose?.(params.modalItem!)
                }
              }
            ]
          })
        }
      >
        타이틀+설명+버튼2
      </BsButton>
    </>
  )
}
