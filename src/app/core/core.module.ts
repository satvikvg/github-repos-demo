import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from './modules/angular-material/material/material.module';
import { DateAgoPipe } from './pipes/date-ago/date-ago.pipe';

@NgModule({
  declarations: [DateAgoPipe],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatDialogModule,
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatDialogModule,
    DateAgoPipe,
  ],
})
export class CoreModule {}
