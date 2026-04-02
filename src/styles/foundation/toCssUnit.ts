import _ from 'lodash'

const _toCSSUnit = (s: string) =>
  _.replace(s, /(-?\d+(\.\d+)?)px/g, (__: any, v: string) => {
    if (v === '1') {
      return `1px`
    } else {
      return `calc(var(--init-fontsize) / 16 * ${v})`
    }
  })
export default _toCSSUnit
