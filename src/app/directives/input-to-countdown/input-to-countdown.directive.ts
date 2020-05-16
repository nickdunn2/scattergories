import { Directive } from '@angular/core'
import { BehaviorSubject, interval, Subject } from 'rxjs'
import { ICountdown, ICommand } from './input-to-countdown.interfaces'
import { calculateSeconds, mapTotalSecondsToCountdown, INITIAL_TIME } from './input-to-countdown.utility'
import { pluck, map, takeWhile, tap, filter, startWith, takeUntil } from 'rxjs/operators'

@Directive({
    selector: '[scattInputToCountdown]'
})
export class InputToCountdownDirective {
    private timeSource = new BehaviorSubject<ICountdown>(INITIAL_TIME)
    public time$ = this.timeSource.asObservable()
    public totalSeconds$ = this.time$.pipe(
        pluck('totalSeconds'),
        startWith(this.timeSource.value.totalSeconds)
    )

    private stopEventSource = new Subject<void>()
    private stopEvent$ = this.stopEventSource.asObservable()
    public emitStopEvent = () => this.stopEventSource.next()

    public getSeconds = () => this.timeSource.value.seconds
    public getMinutes = () => this.timeSource.value.minutes
    public getTotalSeconds = () => this.timeSource.value.totalSeconds

    public updateTime = (value: number, command: ICommand) => {
        console.log('updating time --', value, command)
        const valToUse = value > 0 ? +value : 0
        const updatedCountdown: ICountdown = this.timeSource.getValue()

        if (command === 'seconds') {
            updatedCountdown.seconds = valToUse
        }
        if (command === 'minutes') {
            updatedCountdown.minutes = valToUse
        }

        updatedCountdown.totalSeconds = calculateSeconds(updatedCountdown)
        console.log('updatedCountdown', updatedCountdown)

        this.timeSource.next(updatedCountdown)
    }

    public startTimer = (initial: number) => {
        interval(1000).pipe(
            map(n => initial - (n + 1)),
            filter(num => num >= 0),
            map(mapTotalSecondsToCountdown),
            takeUntil(this.stopEvent$)
        ).subscribe(updatedCountdown => this.timeSource.next(updatedCountdown))
    }

    public resetTimer = () => this.timeSource.next(INITIAL_TIME)
}