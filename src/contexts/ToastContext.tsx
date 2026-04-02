import {createContext, useCallback, useContext, useMemo, useState, type ReactNode} from 'react'
import BsToast, {ICON_CHECK, ICON_X, ALIGN_TOP, ALIGN_BOTTOM} from '@/components/common/BsToast'
import StringUtil from '@/utils/StringUtil'
interface Props {
  children?: ReactNode
}
export interface PropsToastItem {
  show?: boolean
  id?: string
  body?: string
  align?: typeof ALIGN_TOP | typeof ALIGN_BOTTOM
  iconType?: typeof ICON_CHECK | typeof ICON_X
  closeTimer?: number
  setShow?: () => void
  onClick?: () => void
  onClose?: () => void
}

const ToastContext = createContext<{
  openToast: (params: PropsToastItem) => void
}>({
  openToast: () => {}
})

export const ToastProvider = (props: Props) => {
  const [toastItems, setToastItems] = useState<PropsToastItem[]>([])

  const closeToast = useCallback((toastId: string) => {
    setToastItems((prevItem) => prevItem.filter((item: PropsToastItem) => item.id !== toastId))
  }, [])
  const openToast = useCallback(
    (params: PropsToastItem) => {
      const toastId = StringUtil.getUUID('_ui_toast')
      setToastItems((prevItem) => [
        ...prevItem,
        {
          id: toastId,
          show: true,
          iconType: ICON_CHECK,
          setShow: () => closeToast(toastId),
          ...params
        }
      ])
    },
    [closeToast]
  )

  const contextValue = useMemo(
    () => ({
      openToast
    }),
    [openToast]
  )

  return (
    <>
      <ToastContext.Provider value={contextValue}>
        {props.children}
        {toastItems.map(({show, setShow, iconType, ...item}: PropsToastItem, index) => (
          <BsToast
            show={!!show}
            setShow={setShow}
            align={item.align}
            closeTimer={item.closeTimer}
            onClick={item.onClick}
            onClose={item.onClose}
            key={index}
          >
            <BsToast.Icon type={iconType} />
            <BsToast.Content>{item.body}</BsToast.Content>
          </BsToast>
        ))}
      </ToastContext.Provider>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('')
  }
  return context
}
