const realType = Object.prototype.toString

export const typeOf = (param: unknown): string => realType.call(param).slice(8, -1)

export const isPrimitive = (param: unknown): boolean => ['number', 'string', 'boolean', 'symbol'].includes(typeof param)

export const isUndef = (param: unknown): boolean => ['Undefined', 'Null'].includes(typeOf(param))

export const isDef = (param: unknown): boolean => !isUndef(param)

export const isObject = (param: unknown): boolean => typeOf(param) === 'Object'

export const isArray = (param: unknown): boolean => typeOf(param) === 'Array'

export const isSymbol = (param: unknown): boolean => typeOf(param) === 'Symbol'

export const isFunction = (param: unknown): boolean => typeOf(param) === 'Function'

export const isJson = (param: unknown): boolean => {
    try {
        return typeof param === 'string' && isObject(JSON.parse(param))
    } catch (e) {
        return false
    }
}

export default {
    typeOf,
    isPrimitive,
    isUndef,
    isDef,
    isObject,
    isArray,
    isSymbol,
    isFunction,
    isJson
}