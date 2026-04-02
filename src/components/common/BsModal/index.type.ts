import type {ReactNode} from 'react'
import {TYPE_BOTTOMSHEET, TYPE_MODAL} from '@/components/common/BsModal/index.style'

export interface Props {
  type?: typeof TYPE_BOTTOMSHEET | typeof TYPE_MODAL
  id?: string
  title?: string
  show: boolean
  children?: ReactNode
  onHide?: (s?: any) => void
}
