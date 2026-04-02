import {Wrapper} from '@/components/common/BsIcon/index.style'
import type {Props} from '@/components/common/BsIcon/index.type'
import {forwardRef} from 'react'

const ArrowLeft = forwardRef<HTMLSpanElement, Props>(({color = '#111111', width, height}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg height="44" viewBox="0 0 38 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 14L10.5 22L18.5 30" stroke={color} strokeWidth="1.7" strokeLinecap="square" />
      </svg>
    </Wrapper>
  )
})
const ArrowRight = forwardRef<HTMLSpanElement, Props>(({color = '#111111', width, height}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.9989 2.00049L7.9989 6.00049L3.9989 10.0005" stroke={color} strokeLinecap="square" />
      </svg>
    </Wrapper>
  )
})
const My = forwardRef<HTMLSpanElement, Props>(({color = '#111111', width, height}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="13" r="6.08" stroke={color} strokeWidth="3.84" />
        <path
          d="M24 24.9199C32.8807 24.9199 40.0801 32.1193 40.0801 41V41.0801H7.91992V41C7.91992 32.1193 15.1193 24.9199 24 24.9199Z"
          stroke={color}
          strokeWidth="3.84"
        />
      </svg>
    </Wrapper>
  )
})
const P = forwardRef<HTMLSpanElement, Props>(({width, height}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="23.9999" cy="24" r="21.6" fill="#FF2233" />
        <path
          d="M17.9446 33.9428V14.3033H25.6355C27.0931 14.3033 28.3525 14.5846 29.4138 15.1472C30.475 15.7098 31.2806 16.4897 31.8304 17.4871C32.3866 18.4844 32.6647 19.6351 32.6647 20.9393C32.6647 22.2435 32.3834 23.3942 31.8208 24.3916C31.2646 25.3889 30.4495 26.1656 29.3754 26.7218C28.3014 27.2716 27.026 27.5465 25.5492 27.5465H20.6105V24.2573H24.8875C25.6738 24.2573 26.3355 24.1199 26.8725 23.8449C27.4096 23.57 27.8091 23.1833 28.0712 22.6846C28.3397 22.186 28.474 21.6042 28.474 20.9393C28.474 20.2744 28.3397 19.6959 28.0712 19.2036C27.8091 18.7113 27.4096 18.3309 26.8725 18.0624C26.3355 17.7875 25.6706 17.6501 24.8779 17.6501H22.0202V33.9428H17.9446Z"
          fill="white"
        />
      </svg>
    </Wrapper>
  )
})
const S = forwardRef<HTMLSpanElement, Props>(({width, height}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6.85718" y="29.1429" width="34.2857" height="17.1429" fill="#227AFF" />
        <path
          d="M16.209 15.1215C14.9418 10.0529 18.7754 5.1429 24.0001 5.1429C29.2247 5.14289 33.0583 10.0529 31.7911 15.1215L27.4286 32.5715H20.5715L16.209 15.1215Z"
          fill="#227AFF"
        />
        <rect x="10.2856" y="39.4286" width="27.4286" height="3.42857" fill="#F4F6FA" />
      </svg>
    </Wrapper>
  )
})
const T = forwardRef<HTMLSpanElement, Props>(({width, height}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 18.1329C2.94546 18.1329 5.33301 20.5214 5.33301 23.4669C5.33281 26.3201 3.09222 28.6502 0.274414 28.793L0 28.7999V42.1329H48V28.7999C45.0546 28.7999 42.6672 26.4122 42.667 23.4669C42.667 20.5213 45.0545 18.1329 48 18.1329V4.79987H0V18.1329Z"
          fill="#A44EFF"
        />
        <g clipPath="url(#clip0_294_5393)">
          <path
            d="M17.7628 18.9925C19.4728 18.9925 20.8591 17.6062 20.8591 15.8962C20.8591 14.1862 19.4728 12.7999 17.7628 12.7999C16.0528 12.7999 14.6665 14.1862 14.6665 15.8962C14.6665 17.6062 16.0528 18.9925 17.7628 18.9925Z"
            fill="white"
          />
          <path
            d="M30.0858 34.0404C31.7958 34.0404 33.1821 32.6541 33.1821 30.9441C33.1821 29.2341 31.7958 27.8478 30.0858 27.8478C28.3758 27.8478 26.9895 29.2341 26.9895 30.9441C26.9895 32.6541 28.3758 34.0404 30.0858 34.0404Z"
            fill="white"
          />
          <path
            d="M31.2011 14.5028L16.5867 32.5851"
            stroke="white"
            strokeWidth="2.66667"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_294_5393">
            <rect width="18.5157" height="21.3333" fill="white" transform="translate(14.6665 12.7999)" />
          </clipPath>
        </defs>
      </svg>
    </Wrapper>
  )
})
const ErrorNetwork = forwardRef<HTMLSpanElement, Props>(({width, height}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20.4609 39.119C20.4609 40.091 20.8078 40.9236 21.5014 41.617C22.1951 42.3106 23.0278 42.6575 23.9994 42.6575C24.9711 42.6575 25.8038 42.3106 26.4974 41.617C27.1911 40.9236 27.5379 40.091 27.5379 39.119C27.5379 38.1473 27.1911 37.318 26.4974 36.631C25.8038 35.9436 24.9711 35.6 23.9994 35.6C23.0278 35.6 22.1951 35.9436 21.5014 36.631C20.8078 37.318 20.4609 38.1473 20.4609 39.119Z"
          fill="#777777"
        />
        <path
          opacity="0.7"
          d="M12.2063 32.446L15.0138 35.2845C16.2805 34.1948 17.6791 33.3691 19.2098 32.8075C20.7405 32.2461 22.3366 31.9655 23.9983 31.9655C25.66 31.9655 27.2561 32.2461 28.7868 32.8075C30.3175 33.3691 31.7161 34.1948 32.9828 35.2845L35.7903 32.446C34.1673 31 32.343 29.8916 30.3173 29.121C28.2916 28.3506 26.1853 27.9655 23.9983 27.9655C21.8113 27.9655 19.705 28.3506 17.6793 29.121C15.6536 29.8916 13.8293 31 12.2063 32.446Z"
          fill="#777777"
        />
        <path
          opacity="0.7"
          d="M6.68433 27.027L9.49233 29.846C11.4923 28.0356 13.7378 26.6543 16.2288 25.702C18.7198 24.7493 21.3165 24.273 24.0188 24.273C26.7012 24.273 29.2948 24.7441 31.7998 25.6865C34.3048 26.6288 36.5573 28.0051 38.5573 29.8155L41.3653 26.977C38.9883 24.7896 36.3183 23.1288 33.3553 21.9945C30.3927 20.8598 27.2908 20.2925 24.0498 20.2925C20.8088 20.2925 17.6987 20.8681 14.7193 22.0195C11.7397 23.1705 9.06133 24.8396 6.68433 27.027Z"
          fill="#999999"
        />
        <path
          opacity="0.5"
          d="M1.05933 21.5575L3.91733 24.377C6.65066 21.859 9.74166 19.9301 13.1903 18.5905C16.639 17.2508 20.2415 16.581 23.9978 16.581C27.7542 16.581 31.3567 17.2508 34.8053 18.5905C38.254 19.9301 41.345 21.859 44.0783 24.377L46.9363 21.5575C43.7927 18.6295 40.249 16.4046 36.3053 14.883C32.362 13.361 28.2595 12.6 23.9978 12.6C19.7362 12.6 15.6337 13.3641 11.6903 14.8925C7.74666 16.4205 4.20299 18.6421 1.05933 21.5575Z"
          fill="#999999"
        />
        <path
          d="M25.9512 7C27.0932 7.00018 28.0029 7.95498 27.9482 9.0957L26.8447 32.0957C26.7936 33.1618 25.914 34 24.8467 34H23.1533C22.086 34 21.2064 33.1618 21.1553 32.0957L20.0518 9.0957C19.9971 7.95498 20.9068 7.00018 22.0488 7H25.9512Z"
          fill="#777777"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </Wrapper>
  )
})
const CheckSmall = forwardRef<HTMLSpanElement, Props>(({width, height, color = '#ddd'}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 10.3182L8.125 13.5L15 6.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </Wrapper>
  )
})
const CheckCircle = forwardRef<HTMLSpanElement, Props>(({width, height, color = '#FF2233'}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke={color} />
        <path
          d="M5.76904 10.2649L8.41327 12.9091L14.2306 7.0918"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </Wrapper>
  )
})
const XCircle = forwardRef<HTMLSpanElement, Props>(({width, height, color = '#FF2233'}, ref) => {
  return (
    <Wrapper ref={ref} style={{width, height}}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="19" height="19" rx="9.5" stroke={color} />
        <path
          d="M6.63348 14L6 13.3665L9.36652 10L6 6.63348L6.63348 6L10 9.36652L13.3665 6L14 6.63348L10.6335 10L14 13.3665L13.3665 14L10 10.6335L6.63348 14Z"
          fill={color}
          stroke={color}
          strokeWidth="0.2"
        />
      </svg>
    </Wrapper>
  )
})

const BsIcon = Object.assign({
  ArrowLeft,
  ArrowRight,
  My,
  S,
  T,
  P,
  ErrorNetwork,
  CheckSmall,
  CheckCircle,
  XCircle
})
BsIcon.displayName = 'BsIcon'
export default BsIcon
