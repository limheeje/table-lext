import {forwardRef, useEffect, useState} from 'react'
import {createPortal} from 'react-dom'
import type {Props} from '@/components/common/BsModal/index.type'
import {
  Wrapper,
  Dim,
  InnerContent,
  HeaderArea,
  BodyArea,
  FooterArea,
  TYPE_BOTTOMSHEET
} from '@/components/common/BsModal/index.style'
import StringUtil from '@/utils/StringUtil'

const ModalWrapper = forwardRef<HTMLDivElement, Props>(({id, show, onHide, type = TYPE_BOTTOMSHEET, ...props}, ref) => {
  const [localId] = useState(id || StringUtil.getUUID())

  useEffect(() => {
    if (show) {
      document.documentElement.style.overflow = 'hidden'
    }
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [show])

  function onClose(e?: React.MouseEvent<HTMLElement>) {
    onHide?.(e)
  }
  return (
    show &&
    createPortal(
      <Wrapper ref={ref} id={localId} type={type}>
        <Dim onClick={onClose} />
        <InnerContent>{props.children}</InnerContent>
      </Wrapper>,
      document.body
    )
  )
})
const Header = (props: any) => {
  return <HeaderArea>{props.children}</HeaderArea>
}
const Body = (props: any) => {
  if (props.dangerouslySetInnerHTML) {
    return <BodyArea dangerouslySetInnerHTML={props.dangerouslySetInnerHTML} />
  }
  return <BodyArea>{props.children}</BodyArea>
}
const Footer = (props: any) => {
  return <FooterArea>{props.children}</FooterArea>
}

const BsModal = Object.assign(ModalWrapper, {
  Header,
  Body,
  Footer
})
BsModal.displayName = 'BsModal'
export default BsModal
