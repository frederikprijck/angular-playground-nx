import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { MyLibModule } from '@my-nx-workspace/my-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NxModule.forRoot(), MyLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
