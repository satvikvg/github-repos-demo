import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from './modules/angular-material/material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  exports: [MaterialModule, HttpClientModule, InfiniteScrollModule],
})
export class CoreModule {}
