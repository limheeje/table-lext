import {
  Wrapper,
  ContentInner,
  TYPE_KEYNAME,
  PageTitle1,
  PageTitle2,
  UserInfo,
  BackButton
} from '@/components/LayoutHeader/index.style'
import type {Props} from '@/components/LayoutHeader/index.type'
import BsIcon from '@/components/common/BsIcon'

const LayoutHeader = ({type, title, onBack}: Props) => {
  const logoImage = new URL('@/assets/images/logo.svg', import.meta.url).href
  const logoMembershipImage = new URL('@/assets/images/logo_membership.svg', import.meta.url).href

  const renderContent = () => {
    switch (type) {
      case 'LOGO':
        return (
          <>
            <img src={logoImage} />
          </>
        )
      case 'LOGO_MEMBERSHIP':
        return (
          <>
            <img src={logoMembershipImage} />
          </>
        )
      case 'TITLE':
        return (
          <>
            <PageTitle1>내 단골UP</PageTitle1>
            <UserInfo>
              <BsIcon.My width="20px" height="20px" /> 9010님
            </UserInfo>
          </>
        )
      case 'TITLEBACK':
        return (
          <>
            <BackButton type="button" onClick={onBack}>
              <BsIcon.ArrowLeft />
            </BackButton>
            {title && <PageTitle2>{title}</PageTitle2>}
          </>
        )
      case 'ONLYTITLE':
        return <>{title && <PageTitle2>{title}</PageTitle2>}</>
      default:
        return (
          <>
            <img src={logoImage} />
          </>
        )
    }
  }

  return (
    <Wrapper data-type={type}>
      <ContentInner>{renderContent()}</ContentInner>
    </Wrapper>
  )
}

LayoutHeader.displayName = 'LayoutHeader'

export default LayoutHeader
export {TYPE_KEYNAME}
