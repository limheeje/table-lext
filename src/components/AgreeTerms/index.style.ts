import styled from 'styled-components'
import {_toCSSUnit} from '@/styles'

export const Wrapper = styled.div``
export const Depth1 = styled.div`
  padding: ${_toCSSUnit('12px')} 0;
  position: relative;
`
export const Depth2 = styled.div`
  position: relative;
  padding: ${_toCSSUnit('5px')} 0;
`
export const DepthInner = styled.div`
  width: calc(100% - ${_toCSSUnit('28px')});
  display: flex;
`
export const RightButton = styled.button`
  position: absolute;
  right: ${_toCSSUnit('8px')};
  ${Depth1} & {
    top: ${_toCSSUnit('16px')};
  }
  ${Depth2} & {
    top: ${_toCSSUnit('9px')};
  }
  width: ${_toCSSUnit('12px')};
  height: ${_toCSSUnit('12px')};
`
