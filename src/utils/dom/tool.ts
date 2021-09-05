export const copy = (content: string) => {
    if (content) {
        const textarea = document.createElement('textarea')
        textarea.value = content
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('Copy')
        document.body.removeChild(textarea)
    }
}

export default {
    copy
}