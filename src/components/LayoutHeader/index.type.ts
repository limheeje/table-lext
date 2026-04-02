export type HeaderType = 'LOGO' | 'TITLE' | 'TITLEBACK' | 'ONLYTITLE' | 'LOGO_MEMBERSHIP'

export interface Props {
  type: HeaderType
  title?: string
  onBack?: () => void
}
