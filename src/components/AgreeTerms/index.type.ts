import type {ReactNode} from 'react'

export interface Props {
  children?: ReactNode
}
export interface PropsDepth {
  children?: ReactNode
  useRightButton?: boolean
  onClickRightButton?: (e: React.MouseEvent<HTMLButtonElement>) => void
}
