import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
  ],
})
export class MaterialModule {}
