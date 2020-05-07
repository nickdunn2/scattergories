import { ICountdown } from './input-to-countdown.interfaces'

export const calculateSeconds = (countdown: ICountdown): number => {
    return countdown.seconds + (countdown.minutes * 60)
}