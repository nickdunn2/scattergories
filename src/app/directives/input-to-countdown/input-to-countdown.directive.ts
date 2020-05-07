import { Directive } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { ICountdown, ICommand } from './input-to-countdown.interfaces'
import { calculateSeconds } from './input-to-countdown.utility'

@Directive({
    selector: '[scattInputToCountdown]'
})
export class InputToCountdownDirective {
    private timeSource = new BehaviorSubject<ICountdown>({
        seconds: 0,
        minutes: 0,
        totalTime: 0
    })

    public time$ = this.timeSource.asObservable()

    public updateTime = (value: number, command: ICommand) => {
        const valToUse = value > 0 ? value : 0
        const updatedCountdown: ICountdown = this.timeSource.getValue()

        if (command === 'seconds') {
            updatedCountdown.seconds = valToUse
        }
        if (command === 'minutes') {
            updatedCountdown.minutes = valToUse
        }

        updatedCountdown.totalTime = calculateSeconds(updatedCountdown)

        this.timeSource.next(updatedCountdown)
    }

    public getSeconds = () => this.timeSource.value.seconds
    public getMinutes = () => this.timeSource.value.minutes
}