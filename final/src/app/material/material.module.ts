import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list'; // Material 16.1



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [
    MatListModule
  ]

})
export class MaterialModule { }
