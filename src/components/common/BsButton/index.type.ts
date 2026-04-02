import type {ReactNode} from 'react'
import {
  SIZE_MD,
  SIZE_SM,
  SIZE_XSM,
  TYPE_DEFAULT,
  TYPE_PRIMARY,
  TYPE_OUTINE_PRIMARY,
  TYPE_SECONDARY
} from '@/components/common/BsButton/index.style'

export type ButtonType = typeof TYPE_DEFAULT | typeof TYPE_PRIMARY | typeof TYPE_SECONDARY | typeof TYPE_OUTINE_PRIMARY
export type ButtonSize = typeof SIZE_MD | typeof SIZE_SM | typeof SIZE_XSM

export interface Props {
  href?: string
  to?: object | string
  size?: ButtonSize
  className?: string
  disabled?: boolean
  inline?: boolean
  type?: ButtonType
  children?: ReactNode
  onClick?: () => void
}
