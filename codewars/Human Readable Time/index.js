function humanReadable (seconds) {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds - hours * 3600)/60)
    const second = seconds - minutes * 60 - hours * 3600

    const formatSpelling = (value, hours) => {
        if(!value) return '00'
        if(value && value.toString().length === 1) return `0${value}`
        if(value === 60) return '00'
        if(value > 60 && !hours) return `${value - 60}`
        return value
    }
    return `${formatSpelling(hours, true)}:${formatSpelling(minutes)}:${formatSpelling(second)}`
}