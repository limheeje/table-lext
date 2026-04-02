import {forwardRef, useMemo, type ChangeEvent, type ReactNode} from 'react'
import type {Props} from '@/components/common/BsCheckbox/index.type'
import {
  Wrapper,
  ContentInner,
  Input,
  Label,
  Icon,
  Text,
  TextLevel1,
  TextLevel2,
  THEME_1 as _THEME_1,
  THEME_2 as _THEME_2
} from '@/components/common/BsCheckbox/index.style'
import {color} from '@/styles'
import {KEY_NAME as COLOR_KEY_NAME} from '@/styles/foundation/color'
import StringUtil from '@/utils/StringUtil'
import BsIcon from '@/components/common/BsIcon/index'

export const THEME_1 = _THEME_1
export const THEME_2 = _THEME_2
const BsCheckboxWrapper = forwardRef<HTMLInputElement, Props>(({theme = THEME_1, useIcon = true, ...props}, ref) => {
  const localId = useMemo(() => props.id ?? StringUtil.getUUID(), [props.id])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    return props.onChange?.(e)
  }
  return (
    <Wrapper className={props.className} theme={theme}>
      <ContentInner>
        <Input
          ref={ref}
          type="checkbox"
          id={localId}
          value={props.value}
          name={props.name}
          checked={props.checked}
          defaultChecked={props.defaultChecked}
          disabled={props.disabled}
          onChange={handleChange}
        />
        <Label htmlFor={localId}>
          {useIcon && (
            <Icon>
              {theme === THEME_2 ? (
                <BsIcon.CheckSmall color={props.checked ? color(COLOR_KEY_NAME['dangol/Red']) : undefined} />
              ) : (
                <BsIcon.CheckSmall color={props.checked ? color(COLOR_KEY_NAME['dangol/white_0']) : undefined} />
              )}
            </Icon>
          )}
          <Text>{props.children}</Text>
        </Label>
      </ContentInner>
    </Wrapper>
  )
})

const TLevel1 = (props: {children?: ReactNode}) => {
  return <TextLevel1>{props.children}</TextLevel1>
}
const TLevel2 = (props: {children?: ReactNode}) => {
  return <TextLevel2>{props.children}</TextLevel2>
}

const BsCheckbox = Object.assign(BsCheckboxWrapper, {
  TextLevel1: TLevel1,
  TextLevel2: TLevel2
})

BsCheckbox.displayName = 'BsCheckbox'
export default BsCheckbox
