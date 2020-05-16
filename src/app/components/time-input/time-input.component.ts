import { ChangeDetectionStrategy, Component } from '@angular/core'
import { InputToCountdownDirective } from 'src/app/directives/input-to-countdown/input-to-countdown.directive'

@Component({
    selector: 'scatt-time-input',
    templateUrl: './time-input.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimeInputComponent {
    constructor(public directive: InputToCountdownDirective) {}
}
