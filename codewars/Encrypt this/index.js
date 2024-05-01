var encryptThis = function(text) {
    const textArray = text.split(' ')
    const result = []
    for (let i =0; i < textArray.length; i++) {
        const convertStr = (arr) => {
            let askiiFirstChar = arr.charAt(0).charCodeAt(0)
            let secondChar = arr.charAt(1)
            let lastChar = arr.charAt(arr.length-1)
            let restStr = arr.substring(2, arr.length-1)
            if(arr.length===1) return askiiFirstChar
            if(arr.length === 2) return askiiFirstChar + secondChar
            return askiiFirstChar + lastChar + restStr + secondChar
        }
        result.push(convertStr(textArray[i]))
    }

    return result.join(' ')
}