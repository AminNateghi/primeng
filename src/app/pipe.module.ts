import { NgModule } from '@angular/core';
import { StatusAsStringPipe } from './shared/pipes/enum-as-string.pipe';

@NgModule({
  imports: [],
  declarations: [
    StatusAsStringPipe,
  ],
  exports: [
    StatusAsStringPipe,
  ]
})
export class PipeModule { }
