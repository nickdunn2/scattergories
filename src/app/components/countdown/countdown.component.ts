import { ChangeDetectionStrategy, Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core'
import { fromEvent, Observable, merge, of, interval } from 'rxjs'
import { mapTo, switchMap, scan, tap } from 'rxjs/operators'
import { InputToCountdownDirective } from 'src/app/directives/input-to-countdown/input-to-countdown.directive'

@Component({
    selector: 'scatt-countdown',
    templateUrl: './countdown.component.html',
    styleUrls: ['./countdown.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent {
    constructor(public directive: InputToCountdownDirective) {}
}
