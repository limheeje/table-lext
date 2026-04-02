import {forwardRef, useEffect, useRef, type ReactNode} from 'react'
import type {Props} from '@/components/common/BsToast/index.type'
import {
  Wrapper,
  Container,
  ContentBody,
  Icon,
  ALIGN_TOP as LOCAL_ALIGN_TOP,
  ALIGN_BOTTOM as LOCAL_ALIGN_BOTTOM
} from '@/components/common/BsToast/index.style'
import BsIcon from '@/components/common/BsIcon'
import {createPortal} from 'react-dom'

export const ICON_X = 'icon-x'
export const ICON_CHECK = 'icon-check'
export const ALIGN_TOP = LOCAL_ALIGN_TOP
export const ALIGN_BOTTOM = LOCAL_ALIGN_BOTTOM

const BsToastContainer = forwardRef<HTMLDivElement, Props>(
  ({show, setShow, closeTimer = 3000, onClose = () => '', align = ALIGN_BOTTOM, ...props}, ref) => {
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const getPortalRoot = () => {
      if (typeof window !== 'undefined') {
        const targetId = align === 'align-top' ? 'toast_wrapping_head' : 'toast_wrapping_bottom'
        return document.getElementById(targetId) || document.body
      } else {
        return null
      }
    }
    const portalRoot = getPortalRoot()

    useEffect(() => {
      if (show) {
        if (timerRef.current) clearTimeout(timerRef.current)
        timerRef.current = setTimeout(() => {
          setShow?.(false)
          onClose?.()
        }, closeTimer)
      }
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current)
      }
    }, [show, setShow, closeTimer, onClose])

    function handleClick() {
      props.onClick?.()
      setShow?.(false)
      onClose?.()
    }
    if (!show || !portalRoot) return null
    return (
      show &&
      createPortal(
        <Wrapper ref={ref} $align={align} $timer={closeTimer}>
          <Container onClick={handleClick}>{props.children}</Container>
        </Wrapper>,
        portalRoot
      )
    )
  }
)
const BsToastContentBody = (props: {children?: ReactNode}) => {
  return <ContentBody>{props.children}</ContentBody>
}
const BsToastIconBody = (props: {type?: typeof ICON_X | typeof ICON_CHECK | null; children?: ReactNode}) => {
  return (
    props.type && (
      <Icon>
        {props.type === ICON_X ? (
          <BsIcon.XCircle></BsIcon.XCircle>
        ) : props.type === ICON_CHECK ? (
          <BsIcon.CheckCircle></BsIcon.CheckCircle>
        ) : (
          props.children
        )}
      </Icon>
    )
  )
}

const BsToast = Object.assign(BsToastContainer, {
  Content: BsToastContentBody,
  Icon: BsToastIconBody
})
BsToast.displayName = 'BsToast'
export default BsToast
