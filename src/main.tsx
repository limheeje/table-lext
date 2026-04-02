import {StrictMode, useEffect} from 'react'
import {createRoot} from 'react-dom/client'
import {createHashRouter, RouterProvider, useLocation} from 'react-router-dom'
import {ToastProvider} from '@/contexts/ToastContext'
import {ModalProvider} from '@/contexts/ModalContext'
import {PATHS} from '@/routes/paths'
import {GlobalStyle} from '@/styles'
import Authentication from '@/pages/authentication/index'
import Auth from '@/pages/authentication/Auth'
import MyBenefits from '@/pages/authentication/MyBenefits'
import ItemList from '@/pages/main/ItemList'
import CouponCase from '@/pages/main/CouponCase'
import ItemDetail from '@/pages/main/ItemDetail'
import PageList from '@/pages/pageList'
import QaItemDetail from '@/pages/pageList/designqa/QaItemDetail'
import NoCouponCase from '@/pages/pageList/designqa/NoCouponCase'
import NoHistoryCase from '@/pages/pageList/designqa/NoHistoryCase'
import NoRecentHistoryCase from '@/pages/pageList/designqa/NoRecentHistoryCase'
import Signup from '@/pages/signup'
import Etc from '@/pages/etc'
import ErrorNetwork from '@/pages/etc/ErrorNetwork'
import AlertCase from '@/pages/etc/AlertCase'
import ToastCase from '@/pages/etc/ToastCase'
import TermsCase from '@/pages/etc/TermsCase'
import Entry from '@/pages/etc/Entry'
import NotFound from '@/404'
import '@/assets/scss/reset.scss'
import '@/assets/scss/layout.scss'

const ScrollRestorationController = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  return null
}

const ScrollToTop = ({children}: {children: React.ReactNode}) => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'auto'})
  }, [location.pathname])

  return children
}

const router = createHashRouter([
  {
    path: PATHS['AUTHENTICATION'],
    element: (
      <ScrollToTop>
        <Authentication />
      </ScrollToTop>
    ),
    children: [
      {
        path: PATHS['AUTHENTICATION'],
        element: (
          <ScrollToTop>
            <Auth />
          </ScrollToTop>
        )
      },
      {
        path: PATHS['MY_BENEFITS'],
        element: (
          <ScrollToTop>
            <MyBenefits />
          </ScrollToTop>
        )
      }
    ]
  },
  {
    path: PATHS['MAIN'],
    children: [
      {
        index: true,
        element: (
          <ScrollToTop>
            <ItemList />
          </ScrollToTop>
        )
      },
      {
        path: PATHS['COUPONCASE'],
        element: (
          <ScrollToTop>
            <CouponCase />
          </ScrollToTop>
        )
      },
      {
        path: ':id',
        element: (
          <ScrollToTop>
            <ItemDetail />
          </ScrollToTop>
        )
      }
    ]
  },
  {
    path: '*',
    element: (
      <ScrollToTop>
        <NotFound />
      </ScrollToTop>
    )
  },
  {
    path: PATHS['PAGELIST'],
    element: (
      <ScrollToTop>
        <PageList />
      </ScrollToTop>
    )
  },
  {
    path: PATHS['ITEMDETAIL'],
    element: (
      <ScrollToTop>
        <QaItemDetail />
      </ScrollToTop>
    )
  },
  {
    path: PATHS['STORE_NO_COUPON'],
    element: (
      <ScrollToTop>
        <NoCouponCase />
      </ScrollToTop>
    )
  },
  {
    path: PATHS['STORE_NO_HISTORY'],
    element: (
      <ScrollToTop>
        <NoHistoryCase />
      </ScrollToTop>
    )
  },
  {
    path: PATHS['STORE_NO_RECENT_HISTORY'],
    element: (
      <ScrollToTop>
        <NoRecentHistoryCase />
      </ScrollToTop>
    )
  },
  {
    path: PATHS['SIGNUP'],
    element: <Signup />
  },
  {
    path: PATHS['ETC'],
    element: <Etc />,
    children: [
      {
        path: PATHS['ERROR_NETWORK'],
        element: <ErrorNetwork />
      },
      {
        path: PATHS['ALERTCASE'],
        element: <AlertCase />
      },
      {
        path: PATHS['TOASTCASE'],
        element: <ToastCase />
      },
      {
        path: PATHS['TERMS'],
        element: <TermsCase />
      },
      {
        path: PATHS['ENTRY'],
        element: <Entry />
      }
    ]
  }
])

createRoot(document.getElementById('root')! as HTMLElement).render(
  <>
    <ToastProvider>
      <ModalProvider>
        <StrictMode>
          <ScrollRestorationController />
          <GlobalStyle />
          <div className="container">
            <RouterProvider router={router} />
          </div>
        </StrictMode>
      </ModalProvider>
      <div id="toast_wrapping_head"></div>
      <div id="toast_wrapping_bottom"></div>
    </ToastProvider>
  </>
)
