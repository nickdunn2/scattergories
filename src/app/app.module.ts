import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { LetterComponent } from './components/letter/letter.component'
import { CountdownComponent } from './components/countdown/countdown.component'
import { TimeInputComponent } from './components/time-input/time-input.component'
import { InputToCountdownDirective } from './directives/input-to-countdown/input-to-countdown.directive'

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    InputToCountdownDirective,
    LetterComponent,
    TimeInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
