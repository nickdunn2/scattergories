import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'scatt-countdown',
    templateUrl: './countdown.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownComponent {
    
}