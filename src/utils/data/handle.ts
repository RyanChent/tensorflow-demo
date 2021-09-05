import { isArray, isFunction, isObject, isPrimitive } from "./types"

const hasOwn = Object.prototype.hasOwnProperty

export const hasOwnProperty = (obj: object, key: string) => hasOwn.call(obj, key)

export const pick = (obj: { [prop: string]: any }, key: string | string[]) => {
    if (isArray(key)) {
        return (key as string[]).reduce((self, item) => {
            self[item] = obj[item]
            return self
        }, {} as { [prop: string]: any })
    } else {
        return { [key as string]: obj[key as string] }
    }
}

export const pickDeep = (obj: { [prop: string]: any }, hash = new WeakMap()) => {
    if (obj instanceof RegExp) return new RegExp(obj)
    if (obj instanceof Date) return new Date(obj)
    if (isObject(obj)) return obj
    if (hash.has(obj)) return hash.get(obj)
    const newObj = isArray(obj) ? new Array(0) : Object.create(null)
    hash.set(obj, newObj)
    for (const key in obj) {
        if (hasOwnProperty(obj, key)) {
            newObj[key] = pickDeep(obj[key], hash)
        }
    }
}

export const arrayToString = (obj: [], level = 1) => {
    let str = `[`
    obj.forEach((item, index) => {
        if (isPrimitive(item)) {
            str += `${!isNaN(item) ? item : `'${item}'`}${index < obj.length - 1 ? ', ' : ''}`
        } else {
            str += `\n${'\t'.repeat(level)}`
            if (isArray(item)) {
                str += `${arrayToString(item, level + 1)},`
            } else if (isFunction(item)) {
                str += `${(item as Function).toString()},\n`
            } else if (isObject(item)) {
                str += `${objectToString(item, level + 1)},`
            }
        }
    })
    return str + ']'
}

export const objectToString = (obj: object, level = 1) => {
    let str = `{\n`
    for (const [key, value] of Object.entries(obj)) {
        str += `${'\t'.repeat(level) + key}: `
        if (isPrimitive(value)) {
            str += `${!isNaN(value) ? value : `'${value}'`},\n`
        } else {
            if (isArray(value)) {
                str += `${arrayToString(value, level + 1)},\n`
            } else if (isFunction(value)) {
                str += `${value.toString()},\n`
            } else if (isObject(value)) {
                str + `${objectToString(value, level + 1)}, \n`
            }
        }
    }
    return str + `${'\t'.repeat(level - 1)}}`
}

export default {
    hasOwnProperty,
    pick,
    pickDeep,
    arrayToString,
    objectToString
}