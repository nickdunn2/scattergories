import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { fromEvent, Observable, merge, of, interval } from 'rxjs'
import { mapTo, switchMap, scan } from 'rxjs/operators'
import { InputToCountdownDirective } from 'src/app/directives/input-to-countdown/input-to-countdown.directive'

@Component({
    selector: 'scatt-countdown',
    templateUrl: './countdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent implements AfterViewInit {
    @ViewChild('start', { static: true })
    startBtn: ElementRef

    @ViewChild('pause', { static: true })
    pauseBtn: ElementRef

    @ViewChild('reset', { static: true })
    resetBtn: ElementRef

    private interval$: Observable<any>

    constructor(public directive: InputToCountdownDirective) {}

    ngAfterViewInit() {
        const start$ = fromEvent(this.startBtn.nativeElement, 'click').pipe(mapTo(true))
        const pause$ = fromEvent(this.pauseBtn.nativeElement, 'click').pipe(mapTo(false))
        const reset$ = fromEvent(this.resetBtn.nativeElement, 'click').pipe(mapTo(null))
        const stateChange$ = this.directive.time$.pipe(mapTo(null))

        this.interval$ = merge(start$, pause$, reset$, stateChange$).pipe(
            switchMap(isCounting => {
                if (isCounting === null) {
                    return of(null)
                }

                return isCounting ? interval(1000) : of()
            }),
            scan((acc, curr) => {
                if (acc === 0) {
                    return acc
                }

                if (curr === null || !acc) {
                    return this.directive.getTotalSeconds()
                }

                return --acc
            })
        )
    }
}
