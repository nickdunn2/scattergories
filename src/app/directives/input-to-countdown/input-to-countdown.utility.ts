import { ICountdown } from './input-to-countdown.interfaces'

export const INITIAL_TIME: ICountdown = {
    seconds: 0,
    minutes: 2,
    totalSeconds: 120
}

export const calculateSeconds = (countdown: ICountdown): number => {
    console.log('calculating --', countdown)
    return countdown.seconds + (countdown.minutes * 60)
}

export const mapTotalSecondsToCountdown = (totalSeconds: number): ICountdown => {
    console.log('mapping totalSeconds to Countdown', totalSeconds)
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = totalSeconds % 60

    return {
        seconds,
        minutes,
        totalSeconds
    }
}
