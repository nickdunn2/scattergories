import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { LetterComponent } from './letter/letter.component'
import { CountdownComponent } from './countdown/countdown.component'
import { TimeInputComponent } from './time-input/time-input.component'

@NgModule({
  declarations: [
    AppComponent,
    CountdownComponent,
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
