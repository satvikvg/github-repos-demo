import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core';
import { RepositoryItemComponent } from './repository-item/repository-item.component';

@NgModule({
  declarations: [HomeComponent, RepositoryItemComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule],
})
export class HomeModule {}
