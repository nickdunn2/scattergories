import { BrowserModule } from '@angular/platform-browser'
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'

import { AppComponent } from './app.component'
import { LetterComponent } from './components/letter/letter.component'
import { CountdownComponent } from './components/countdown/countdown.component'
import { TimeInputComponent } from './components/time-input/time-input.component'
import { InputToCountdownDirective } from './directives/input-to-countdown/input-to-countdown.directive'
import { TimeFormatPipe } from './pipes/time-format.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
    InputToCountdownDirective,
    LetterComponent,
    TimeInputComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
