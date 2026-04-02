import {forwardRef, type ReactNode} from 'react'
import {
  Wrapper,
  TermsTitle,
  TermsDescription,
  TermsDl,
  TermsDt,
  TermsDd,
  TermsBottomArea
} from '@/components/TermsDetail/index.style'

const TermsDetailContainer = forwardRef<HTMLDivElement, {children?: ReactNode}>((props, ref) => {
  return <Wrapper ref={ref}>{props.children}</Wrapper>
})

const TermsTitleBody = (props: {children?: ReactNode}) => {
  return <TermsTitle>{props.children}</TermsTitle>
}
const TermsDescriptionBody = (props: {children?: ReactNode}) => {
  return <TermsDescription>{props.children}</TermsDescription>
}
const TermsDlBody = (props: {children?: ReactNode}) => {
  return <TermsDl>{props.children}</TermsDl>
}
const TermsDtBody = (props: {children?: ReactNode}) => {
  return <TermsDt>{props.children}</TermsDt>
}
const TermsDdBody = (props: {children?: ReactNode}) => {
  return <TermsDd>{props.children}</TermsDd>
}
const TermsBottomAreaBody = (props: {children?: ReactNode}) => {
  return <TermsBottomArea>{props.children}</TermsBottomArea>
}

const TermsDetail = Object.assign(TermsDetailContainer, {
  Title: TermsTitleBody,
  Description: TermsDescriptionBody,
  Dl: TermsDlBody,
  Dt: TermsDtBody,
  Dd: TermsDdBody,
  BottomArea: TermsBottomAreaBody
})
TermsDetail.displayName = 'TermsDetail'
export default TermsDetail
