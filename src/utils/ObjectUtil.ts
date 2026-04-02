import _ from 'lodash'

export default class ObjectUtil {
  static cloneDeep(o: object) {
    return _.cloneDeep(o)
  }
  static isLastIndex(a: any[], index: number) {
    return index === a.length - 1
  }
  static isObject(o: any) {
    return typeof o === 'object'
  }
  static isArray(o: any) {
    return typeof o === 'object' && Array.isArray(o)
  }
  static isEqual(a: any, _a: any) {
    return _.isEqual(a, _a)
  }
  static isEmpty(o: any) {
    return _.isEmpty(o)
  }
  static isNull(o: any) {
    return _.isNull(o)
  }
}
