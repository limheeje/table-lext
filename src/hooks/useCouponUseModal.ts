import {useCallback} from 'react'
import {useModal} from '@/contexts/ModalContext'

export const useCouponUseModal = () => {
  const {openCouponUseModal} = useModal()

  const openUseModal = useCallback(() => {
    openCouponUseModal()
  }, [openCouponUseModal])

  return {openUseModal}
}
