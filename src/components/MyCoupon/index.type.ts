import type {ReactNode} from 'react'

export type ButtonType = 'use' | 'download' | 'app'

export interface Props {
  title: ReactNode
  discount: ReactNode
  addSupportText?: ReactNode
  condition: ReactNode
  period: ReactNode
  buttonLabel?: ReactNode
  buttonType?: ButtonType
  onClick?: () => void
  useOfflineYN?: string
  useOnlineYN?: string
  lineCountEllipsis?: number
}
