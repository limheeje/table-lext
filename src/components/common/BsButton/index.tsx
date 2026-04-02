import type {Props} from '@/components/common/BsButton/index.type'
import {
  Button,
  ButtonLink,
  SIZE_MD as LOCAL_SIZE_MD,
  SIZE_SM as LOCAL_SIZE_SM,
  SIZE_XSM as LOCAL_SIZE_XSM,
  TYPE_DEFAULT as LOCAL_TYPE_DEFAULT,
  TYPE_PRIMARY as LOCAL_TYPE_PRIMARY,
  TYPE_OUTINE_PRIMARY as LOCAL_TYPE_OUTINE_PRIMARY,
  TYPE_SECONDARY as LOCAL_TYPE_SECONDARY
} from '@/components/common/BsButton/index.style'

export const SIZE_MD = LOCAL_SIZE_MD
export const SIZE_SM = LOCAL_SIZE_SM
export const SIZE_XSM = LOCAL_SIZE_XSM
export const TYPE_DEFAULT = LOCAL_TYPE_DEFAULT
export const TYPE_PRIMARY = LOCAL_TYPE_PRIMARY
export const TYPE_OUTINE_PRIMARY = LOCAL_TYPE_OUTINE_PRIMARY
export const TYPE_SECONDARY = LOCAL_TYPE_SECONDARY

const BsButton = (props: Props) => {
  const handleClick = (e: React.MouseEvent) => {
    if (props.disabled) {
      e.preventDefault()
      e.stopPropagation()
      return
    }
    props.onClick?.()
  }

  return !props.to ? (
    <Button
      onClick={handleClick}
      disabled={props.disabled}
      $buttonType={props.type}
      size={props.size}
      inline={props.inline}
      className={props.className}
    >
      {props.children}
    </Button>
  ) : (
    <ButtonLink
      to={props.disabled ? '#' : props.to}
      onClick={handleClick}
      aria-disabled={props.disabled}
      $buttonType={props.type}
      size={props.size}
      inline={props.inline}
      className={props.className}
    >
      {props.children}
    </ButtonLink>
  )
}

BsButton.displayName = 'BsButton'

export default BsButton
