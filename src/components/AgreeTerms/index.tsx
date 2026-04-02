import {forwardRef} from 'react'
import {Wrapper, Depth1, Depth2, DepthInner, RightButton} from '@/components/AgreeTerms/index.style'
import {_toCSSUnit} from '@/styles'
import type {Props, PropsDepth} from '@/components/AgreeTerms/index.type'
import BsIcon from '@/components/common/BsIcon/index'

const AgreeTermsBody = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return <Wrapper ref={ref}>{props.children}</Wrapper>
})

const Depth1Body = (props: PropsDepth) => {
  return (
    <Depth1>
      <DepthInner>{props.children}</DepthInner>
      {props.useRightButton && (
        <RightButton onClick={props.onClickRightButton}>
          <BsIcon.ArrowRight color="#999999" height={_toCSSUnit('12px')} />
        </RightButton>
      )}
    </Depth1>
  )
}
const Depth2Body = (props: PropsDepth) => {
  return (
    <Depth2>
      <DepthInner>{props.children}</DepthInner>
      {props.useRightButton && (
        <RightButton onClick={props.onClickRightButton}>
          <BsIcon.ArrowRight color="#999999" height={_toCSSUnit('12px')} />
        </RightButton>
      )}
    </Depth2>
  )
}

const AgreeTerms = Object.assign(AgreeTermsBody, {
  Depth1: Depth1Body,
  Depth2: Depth2Body
})

AgreeTerms.displayName = 'AgreeTerms'
export default AgreeTerms
