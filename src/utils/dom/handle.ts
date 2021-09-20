interface Handler {
    cancel: Function
}

interface Throttle {
    leading?: boolean,
    trailing?: boolean,
    [prop: string]: unknown
}

export const debounce = (func: Function, wait: number, immediate: boolean) => {
    let timeout: number | undefined, result: unknown
    const debounced: Handler = function (this: unknown) {
        if (timeout) {
            clearTimeout(timeout)
        }
        if (immediate) {
            const callNow = !timeout
            timeout = window.setTimeout(() => {
                timeout = undefined
            }, wait)
            if (callNow) {
                result = func.apply(this, arguments)
            }
        } else {
            timeout = window.setTimeout(() => {
                result = func.apply(this, arguments)
            }, wait)
        }
        return result
    }

    debounced.cancel = function () {
        clearTimeout(timeout)
        timeout = undefined
    }
    return debounced
}

export const throttle = (func: Function, wait: number, options: Throttle = {}) => {
    let timeout: number | undefined, context: unknown, args: unknown
    let previous = 0

    const later = function () {
        previous = Number(options.leading) || new Date().getTime()
        timeout = undefined
        func.apply(context, args)
        if (!timeout) {
            context = args = undefined
        }
    }

    const throttled: Handler = function (this: unknown) {
        const now = new Date().getTime()
        if (!previous && options.leading === false) {
            previous = now
        }
        const remaining = wait - (now - previous)
        context = this
        args = arguments
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                window.clearTimeout(timeout)
                timeout = undefined
            }
            previous = now
            func.apply(context, args)
            if (!timeout) {
                context = args = undefined
            }
        } else if (!timeout && options.trailing !== false) {
            timeout = window.setTimeout(later, remaining)
        }
    }

    throttled.cancel = function () {
        window.clearTimeout(timeout)
        previous = 0
        timeout = undefined
    }
    return throttled
}

export default {
    debounce,
    throttle
}