import {forwardRef} from 'react'
import type {Props} from '@/components/common/BsNull/index.type'
import {
  Wrapper,
  WrapperInner,
  Contentbox,
  Icon,
  Title,
  Description,
  ButtonGroup
} from '@/components/common/BsNull/index.style'

const BsNullWrapper = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <>
      <Wrapper ref={ref}>
        <WrapperInner>
          <Contentbox>{props.children}</Contentbox>
        </WrapperInner>
      </Wrapper>
    </>
  )
})

const IconBody = (props: {width?: string; height?: string; children: React.ReactNode}) => {
  return (
    <Icon width={props.width} height={props.height}>
      {props.children}
    </Icon>
  )
}
const TitleBody = (props: {children: React.ReactNode}) => {
  return <Title>{props.children}</Title>
}
const DescriptionBody = (props: {children: React.ReactNode}) => {
  return <Description>{props.children}</Description>
}
const ButtonGroupBody = (props: {children: React.ReactNode}) => {
  return <ButtonGroup>{props.children}</ButtonGroup>
}

const BsNull = Object.assign(BsNullWrapper, {
  Icon: IconBody,
  Title: TitleBody,
  Description: DescriptionBody,
  ButtonGroup: ButtonGroupBody
})
BsNull.displayName = 'BsNull'

export default BsNull
