export const convertMilliSecondsToSeconds = (milliSeconds: number): string => {
    const min: number = Math.floor(milliSeconds / 100 / 60)
    const sec: number = Math.floor(milliSeconds / 100) - (60 * min)
    const ms: number = milliSeconds % 100

    return `${min}:${sec}:${ms}`
}