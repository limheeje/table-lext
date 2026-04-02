import {Link} from 'react-router-dom'
import {PATHS} from '@/routes/paths'
import {
  Content,
  PageListContainer,
  PageLinkDt,
  PageLinkDd,
  PageTitle,
  PageListHeader,
  PageListWrap,
  PageListSection
} from './index.style'

interface PageInfo {
  title: string
  path: string
  testId?: string
  children?: PageInfo[]
}

export default function PageList() {
  const pages: PageInfo[] = [
    {
      title: '본인 확인',
      path: PATHS.AUTHENTICATION,
      children: [
        {title: '본인 확인', path: PATHS.AUTHENTICATION},
        {title: '내 단골 혜택 확인하기', path: PATHS.MY_BENEFITS}
      ]
    },
    {
      title: '내 단골UP',
      path: PATHS.MAIN,
      children: [{title: '쿠폰 케이스 통합', path: PATHS.COUPONCASE}]
    },
    {
      title: '내 단골가게',
      path: PATHS.ITEMDETAIL,
      children: [
        {
          title: '쿠폰이 없는 경우',
          path: PATHS.STORE_NO_COUPON
        },
        {
          title: '이용 내역 없는 경우',
          path: PATHS.STORE_NO_HISTORY
        },
        {
          title: '최근 1개월 이용 내역이 없는 경우',
          path: PATHS.STORE_NO_RECENT_HISTORY
        }
      ]
    },
    {
      title: '회원가입',
      path: PATHS.SIGNUP
    },
    {
      title: '기타',
      path: PATHS.ETC,
      children: [
        {
          title: '공통Alert 케이스',
          path: PATHS.ALERTCASE
        },
        {
          title: '공통Toast 케이스',
          path: PATHS.TOASTCASE
        },
        {
          title: '네트워크 오류',
          path: PATHS.ERROR_NETWORK
        },
        {
          title: '약관 - 폼',
          path: PATHS.TERMS
        },
        {
          title: 'Entry',
          path: PATHS.ENTRY
        }
      ]
    }
  ]

  return (
    <>
      <Content>
        <PageListContainer>
          <PageListHeader>
            <h1>마크업 List</h1>
          </PageListHeader>
          <PageListWrap>
            <PageListSection>
              {pages.map((page, index) => (
                <dl key={index}>
                  <PageLinkDt>
                    <Link to={page.path}>
                      <PageTitle>· {page.title}</PageTitle>
                    </Link>
                  </PageLinkDt>
                  {page.children && (
                    <PageLinkDd>
                      {page.children.map((child, childIndex) => (
                        <Link key={childIndex} to={child.path}>
                          <PageTitle>&nbsp;└&nbsp;&nbsp;{child.title}</PageTitle>
                        </Link>
                      ))}
                    </PageLinkDd>
                  )}
                </dl>
              ))}
            </PageListSection>
          </PageListWrap>
        </PageListContainer>
      </Content>
    </>
  )
}
