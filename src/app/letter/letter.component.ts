import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Subject } from 'rxjs'
import { startWith, distinctUntilChanged, shareReplay } from 'rxjs/operators'
import { getRandomItemFromArray, letters } from './letter.utility'

@Component({
    selector: 'scatt-letter',
    templateUrl: './letter.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LetterComponent {
    private letterSource = new Subject<string>()
    public letter$ = this.letterSource.pipe(
        startWith(getRandomItemFromArray(letters)),
        distinctUntilChanged(),
        shareReplay(1)
    )

    public updateLetter = () => {
        this.letterSource.next(getRandomItemFromArray(letters))
    }
}
