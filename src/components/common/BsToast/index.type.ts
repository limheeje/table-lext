import type {ReactNode} from 'react'
import {ALIGN_TOP, ALIGN_BOTTOM} from '@/components/common/BsToast/index.style'

export interface Props {
  show: boolean
  setShow?: (show: boolean) => void
  children?: ReactNode
  closeTimer?: number
  align?: typeof ALIGN_TOP | typeof ALIGN_BOTTOM
  onClick?: () => void
  onClose?: () => void
}
