import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BcardComponent } from './bcard/bcard.component';
import { BcardHeaderComponent } from './bcard-header/bcard-header.component';
import { BcardContentComponent } from './bcard-content/bcard-content.component';

@NgModule({
  declarations: [
    AppComponent,
    BcardComponent,
    BcardHeaderComponent,
    BcardContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
