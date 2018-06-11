import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TapgameComponent } from './tapgame.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TapgameComponent],
  exports: [TapgameComponent]
})
export class TapgameModule { }
