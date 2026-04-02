export interface Props {
  value?: string
  onChange?: (value: string) => void
  onValidation?: (isValid: boolean) => void
  error?: boolean
  errorMessage?: string
  placeholder?: string
}
