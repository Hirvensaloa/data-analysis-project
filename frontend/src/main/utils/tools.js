//Here are general functions for helping components.

//Resolves any circular references within JSON-objects. Can be used with JSON.stringify(jsonObj, getCircularReplacer)
export const getCircularReplacer = () => {
    const seen = new WeakSet()
    return (key, value) => {
        if(typeof value === 'object' && value != null){
            if(seen.has(value))
                return

            seen.add(value)
        }
        return value
    }
}

export const arrayBufferToBase64 = (buffer) => {
    let binary = ''
    let bytes = [].slice.call(new Uint8Array(buffer))

    bytes.forEach(b => binary += String.fromCharCode(b))

    return window.btoa(binary)
}