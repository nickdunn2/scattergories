import { Pipe, PipeTransform } from '@angular/core'


@Pipe({
    name: 'scattTimeFormat',
    pure: true
})
export class TimeFormatPipe implements PipeTransform {
    /**
     * Transform seconds to more user-friendly format.
     */
    transform = (val: number): any => {
        const minutes = Math.floor(val / 60) % 60
        const seconds = val % 60
        return `${padding(minutes)}${minutes}:${padding(seconds)}${seconds}`
    }
 }

const padding = (time: number): string => time < 10 ? '0' : ''
