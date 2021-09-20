export const uuid = (length = 31): string =>
    'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'
        .replace(/[xy]/g, (c) => {
            const r = (Math.random() * 16) | 0,
                v = c == 'x' ? r : (r & 0x3) | 0x8
            return v.toString(16)
        })
        .slice(0, length + 1)

export default {
    uuid
}