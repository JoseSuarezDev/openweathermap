import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../../pipe/filter.pipe";



@NgModule({
  declarations: [ListComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ListComponent, FilterPipe]
})
export class HomeModule { }
