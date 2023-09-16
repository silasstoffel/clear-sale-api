const FLATTEN_MAX_DEPTH = 32

export interface SetUnset<T> {
    $set: {[key: string]: unknown}
    $unset: {
      [key: string]: number
    }
}

const flattenObject = (target: Record<string, unknown>, depth = 0): Record<string, unknown> => {
    const obj: Record<string, unknown> = {}

    if (depth >= FLATTEN_MAX_DEPTH) {
        return obj
    }

    for (const key in target) {
        if (typeof target[key] === 'object' && !Array.isArray(target[key])) {
            const childrenValue = flattenObject(target[key] as Record<string, unknown>, depth + 1)
            for (const childrenKey in childrenValue) {
                obj[`${key}.${childrenKey}`] = childrenValue[childrenKey]
            }
        } else {
            obj[key] = String(target[key])
        }
    }

    return obj
}

export const createSetAndUnsetOperators = <T>(source: Partial<T>): SetUnset<T> => {
    const flatSource = flattenObject(source)
    const $set: Record<string, unknown> = {}
    const $unset: Record<string, number> = {}
    Object.keys(flatSource).forEach(key => {
        flatSource[key] || flatSource[key] === false
            ? Object.assign($set, { [key]: flatSource[key] })
            : Object.assign($unset, { [key]: 1 })
    })

    return { $set, $unset }
}