import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FileDragNDropDirective } from './directives/file-drag-n-drop.directive';

@NgModule({
  declarations: [AppComponent, FileDragNDropDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
