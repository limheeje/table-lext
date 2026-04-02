import _ from 'lodash'
import {_toCSSUnit} from '@/styles'
import ObjectUtil from '@/utils/ObjectUtil'
const toCSSUnit = _toCSSUnit

export const KEY_NAME = Object.freeze({
  'Body1/Bold': {fontSize: toCSSUnit('16px'), fontWeight: 'var(--font-weight-bold)'},
  'Body1/Medium': {fontSize: toCSSUnit('16px'), fontWeight: 'var(--font-weight-medium)'},
  'Body1/Regular': {fontSize: toCSSUnit('16px'), fontWeight: 'var(--font-weight-regular)'},
  'Body2/Bold': {fontSize: toCSSUnit('15px'), fontWeight: 'var(--font-weight-bold)'},
  'Body2/Medium': {fontSize: toCSSUnit('15px'), fontWeight: 'var(--font-weight-medium)'},
  'Body2/Regular': {fontSize: toCSSUnit('15px'), fontWeight: 'var(--font-weight-regular)'},
  'Body3/Bold': {fontSize: toCSSUnit('14px'), fontWeight: 'var(--font-weight-bold)'},
  'Body3/Medium': {fontSize: toCSSUnit('14px'), fontWeight: 'var(--font-weight-medium)'},
  'Body3/Regular': {fontSize: toCSSUnit('14px'), fontWeight: 'var(--font-weight-regular)'},
  'Body4/Bold': {fontSize: toCSSUnit('13px'), fontWeight: 'var(--font-weight-bold)'},
  'Body4/Medium': {fontSize: toCSSUnit('13px'), fontWeight: 'var(--font-weight-medium)'},
  'Body4/Regular': {fontSize: toCSSUnit('13px'), fontWeight: 'var(--font-weight-regular)'},
  'Body5/Bold': {fontSize: toCSSUnit('12px'), fontWeight: 'var(--font-weight-bold)'},
  'Body5/SemiBold': {fontSize: toCSSUnit('12px'), fontWeight: 'var(--font-weight-semi-bold)'},
  'Body5/Medium': {fontSize: toCSSUnit('12px'), fontWeight: 'var(--font-weight-medium)'},
  'Body5/Regular': {fontSize: toCSSUnit('12px'), fontWeight: 'var(--font-weight-regular)'},
  'Body6/Bold': {fontSize: toCSSUnit('11px'), fontWeight: 'var(--font-weight-bold)'},
  'Body6/Medium': {fontSize: toCSSUnit('11px'), fontWeight: 'var(--font-weight-medium)'},
  'Body6/Regular': {fontSize: toCSSUnit('11px'), fontWeight: 'var(--font-weight-regular)'},
  'Body7/Bold': {fontSize: toCSSUnit('10px'), fontWeight: 'var(--font-weight-bold)'},
  'Body7/Regular': {fontSize: toCSSUnit('10px'), fontWeight: 'var(--font-weight-regular)'},
  'Body8/SemiBold': {fontSize: toCSSUnit('11px'), fontWeight: 'var(--font-weight-semi-bold)'},
  'H1/Bold': {fontSize: toCSSUnit('22px'), fontWeight: 'var(--font-weight-bold)'},
  'H1/Medium': {fontSize: toCSSUnit('22px'), fontWeight: 'var(--font-weight-medium)'},
  'H2/Bold': {fontSize: toCSSUnit('20px'), fontWeight: 'var(--font-weight-bold)'},
  'H2/Medium': {fontSize: toCSSUnit('20px'), fontWeight: 'var(--font-weight-medium)'},
  'H3/Bold': {fontSize: toCSSUnit('18px'), fontWeight: 'var(--font-weight-bold)'},
  'H3/Medium': {fontSize: toCSSUnit('18px'), fontWeight: 'var(--font-weight-medium)'},
  'H4/Bold': {fontSize: toCSSUnit('16px'), fontWeight: 'var(--font-weight-bold)'},
  'H4/Medium': {fontSize: toCSSUnit('16px'), fontWeight: 'var(--font-weight-medium)'},
  'H5/Bold': {fontSize: toCSSUnit('14px'), fontWeight: 'var(--font-weight-bold)'},
  'H5/Medium': {fontSize: toCSSUnit('14px'), fontWeight: 'var(--font-weight-medium)'}
})

const setCssValiant = (s: Record<string, any>) => {
  const _KEY_NAME = KEY_NAME as Record<string, any>
  const initCSS = (fontSize: string = toCSSUnit('16px'), fontWeight: string = 'var(--font-weight-medium)') => ({
    'line-Height': '140%',
    'letter-spacing': 0,
    'font-size': fontSize,
    'font-weight': fontWeight
  })
  return Object.values(_KEY_NAME).some((_s: Record<string, any>) => ObjectUtil.isEqual(_s, s))
    ? initCSS(s.fontSize, s.fontWeight)
    : initCSS()
}

export default function typo(s: Record<string, any>) {
  return _.join(
    _.map(setCssValiant(s), (v: string, k: any) => `${k}: ${v};`),
    ''
  )
}
