import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/angular-material/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, HttpClientModule],
  exports: [MaterialModule, HttpClientModule],
})
export class CoreModule {}
