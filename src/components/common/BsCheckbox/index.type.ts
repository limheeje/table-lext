import type {ReactNode, ChangeEvent} from 'react'
import {THEME_1, THEME_2} from '@/components/common/BsCheckbox/index.style'

export interface Props {
  theme?: typeof THEME_1 | typeof THEME_2
  name?: string
  id?: string
  className?: string
  value?: string
  disabled?: boolean
  checked?: boolean
  defaultChecked?: boolean
  useIcon?: boolean
  children?: ReactNode
  onChange?: (e: ChangeEvent) => void
}
