import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from './modules/angular-material/material.module';
import { DateAgoPipe } from './pipes/date-ago/date-ago.pipe';

@NgModule({
  declarations: [DateAgoPipe],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatDialogModule,
    MatIconModule,
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatDialogModule,
    DateAgoPipe,
    MatIconModule,
  ],
})
export class CoreModule {}
