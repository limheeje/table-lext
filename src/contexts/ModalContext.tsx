import {createContext, useContext, useState, useCallback, useMemo, useRef, useEffect, type ReactNode} from 'react'
import BsModal from '@/components/common/BsModal'
import StringUtil from '@/utils/StringUtil'
import BsButton, {SIZE_SM} from '@/components/common/BsButton'
import type {ButtonType, ButtonSize} from '@/components/common/BsButton/index.type'

interface PropsModal {
  type?: string
  title?: string
  body?: string
  onHide?: (item?: any, onClose?: any) => void
  onConfirm?: (item?: any, onClose?: any) => void
  buttonItems?: Record<string, any>[]
  primaryText?: string
  closeButtonText?: string
}

interface ModalContextType {
  openModal: (params: PropsModal) => void
  closeAllModals: () => void
  openCouponUseModal: (onConfirm?: () => void) => void
  openCouponUseConfirmModal: (onConfirm?: () => void) => void
  openAppInstallModal: (onConfirm?: () => void) => void
}

export interface PropsClickCallback {
  modalItem?: Record<string, any>
  onClose?: (modalItem: Record<string, any>) => void
}

const ModalContext = createContext<ModalContextType>({
  openModal: () => {},
  closeAllModals: () => {},
  openCouponUseModal: () => {},
  openCouponUseConfirmModal: () => {},
  openAppInstallModal: () => {}
})

export const ModalProvider = ({children}: {children?: ReactNode}) => {
  const [modalItems, setModaltems] = useState<Record<string, any>[]>([])
  const onCloseRef = useRef<(item: Record<string, any>) => void>((__item) => {})

  const openCouponUseConfirmModalRef = useRef<((onConfirm?: () => void) => void) | null>(null)

  const onClose = useCallback((item: Record<string, any>) => {
    setModaltems((prevItems) => {
      const filtered = prevItems.filter((_item) => _item.id !== item.id)
      item.onHide?.(item, onCloseRef.current!)
      return filtered
    })
  }, [])

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  const openModal = useCallback((params: PropsModal) => {
    const uniqueId = StringUtil.getUUID()
    setModaltems((prevItems) => [
      ...prevItems,
      {
        id: uniqueId,
        ...params
      }
    ])
  }, [])

  const onConfirm = useCallback((item: Record<string, any>) => {
    item.onConfirm?.(item, onCloseRef.current!)
  }, [])

  const closeAllModals = useCallback(() => {
    setModaltems((prevItems) => {
      prevItems.forEach((item) => {
        item.onHide?.(item, onCloseRef.current!)
      })
      return []
    })
  }, [])

  // 사장님 확인하기 확인 모달
  const openCouponUseConfirmModal = useCallback(
    (onConfirm?: () => void) => {
      openModal({
        title: '사장님 확인하기',
        body: '화면을 사장님께 보여주세요.',
        primaryText: '사용 완료',
        closeButtonText: '닫기',
        onHide: () => {},
        onConfirm: (item: any, onClose: any) => {
          onClose(item)
          onConfirm?.()
        }
      })
    },
    [openModal]
  )

  useEffect(() => {
    openCouponUseConfirmModalRef.current = openCouponUseConfirmModal
  }, [openCouponUseConfirmModal])

  // 쿠폰 사용하기 모달
  const openCouponUseModal = useCallback(
    (onConfirm?: () => void) => {
      openModal({
        title: '쿠폰 사용하기',
        body: '이 쿠폰은 매장에서 사용 가능해요.',
        primaryText: '지금 매장에서 사용할게요',
        closeButtonText: '닫기',
        onHide: () => {},
        onConfirm: (item: any, onClose: any) => {
          onClose(item)
          openCouponUseConfirmModalRef.current?.(onConfirm)
        }
      })
    },
    [openModal]
  )

  // 앱 설치하기 모달
  const openAppInstallModal = useCallback(
    (onConfirm?: () => void) => {
      openModal({
        title: '단골 UP 설치하기',
        body: '더 많은 단골 혜택을 이용하시겠어요?<br> 앱에서는 쿠폰, 적립, 주문까지 한 번에 가능해요.',
        primaryText: '앱 설치하기',
        closeButtonText: '닫기',
        onHide: () => {},
        onConfirm: (item: any, onClose: any) => {
          onClose(item)
          onConfirm?.()
        }
      })
    },
    [openModal]
  )

  const contextValue = useMemo(
    () => ({
      openModal,
      closeAllModals,
      openCouponUseModal,
      openCouponUseConfirmModal,
      openAppInstallModal
    }),
    [openModal, closeAllModals, openCouponUseModal, openCouponUseConfirmModal, openAppInstallModal]
  )

  return (
    <ModalContext.Provider value={contextValue}>
      {children}
      {modalItems.map((item) => (
        <BsModal show={true} onHide={() => onClose(item)} id={item.id} key={item.id} type={item.type}>
          <BsModal.Header>{item.title}</BsModal.Header>
          <BsModal.Body dangerouslySetInnerHTML={{__html: item.body}} />
          <BsModal.Footer>
            {item.buttonItems && item.buttonItems.length ? (
              item.buttonItems.map(
                (
                  _item: {
                    title?: string
                    size?: ButtonSize
                    type?: ButtonType
                    clickCallback?: (params: PropsClickCallback) => void
                  },
                  index: number
                ) => (
                  <BsButton
                    type={_item.type ? _item.type : 'primary'}
                    size={_item.size ? _item.size : SIZE_SM}
                    key={index}
                    onClick={() =>
                      typeof _item.clickCallback === 'function'
                        ? _item.clickCallback({
                            modalItem: item,
                            onClose
                          })
                        : null
                    }
                  >
                    {_item.title}
                  </BsButton>
                )
              )
            ) : (
              <>
                <BsButton type="primary" onClick={() => onConfirm(item)}>
                  {item.primaryText || '확인'}
                </BsButton>
                <BsButton type="default" onClick={() => onClose(item)}>
                  {item.closeButtonText || '닫기'}
                </BsButton>
              </>
            )}
          </BsModal.Footer>
        </BsModal>
      ))}
    </ModalContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useModal = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('')
  }
  return context
}
