import _ from 'lodash'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import 'dayjs/locale/ko'

dayjs.extend(customParseFormat)
dayjs.locale('ko')

export default class StringUtil {
  static getUUID(s?: string) {
    return _.uniqueId(`${s ? s : ''}_uid_`)
  }
  static isHtmlCode(s: string) {
    return /<\/?[a-z][\s\S]*>/i.test(s)
  }
  static isEqual(a: any, _a: any) {
    return _.isEqual(a, _a)
  }
  static setPriceComma(str: string) {
    return str ? str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '0'
  }
  static isEmpty(o: string) {
    return _.isEmpty(o)
  }
  static isLooseEqual(a: string | number, b: string | number) {
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
      return a == b
    } else {
      return false
    }
  }
  static isString(o: any) {
    return typeof o === 'string'
  }
  static getByteSize(str: string) {
    let byteSize = 0
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i)
      if (charCode <= 0x7f) {
        byteSize += 1
      } else if (charCode <= 0x7ff) {
        byteSize += 2
      } else if (charCode >= 0xd800 && charCode <= 0xdbff) {
        byteSize += 4
        i++
      } else {
        byteSize += 3
      }
    }
    return byteSize
  }
  static getDateFormat(d: Date, f: string = 'YYYY-MM-DD') {
    let now = dayjs(d)
    if (f === 'hh:mm' || f === 'HH:mm') {
      now = dayjs(d).locale('en')
    }
    return now.format(f)
  }
}
