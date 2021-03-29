import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
})
export class MaterialModule {}
