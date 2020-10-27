import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';

import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';
import { FiltersComponent } from '../filters/filters.component';

@NgModule({
  declarations: [HomeComponent, FiltersComponent,HeaderComponent,FooterComponent],
  imports: [HomeRoutingModule,NgModule]
})
export class HomeModule {}
