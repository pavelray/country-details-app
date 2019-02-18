import { BgNavbarComponent } from './bg-navbar/bg-navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppErrorHandler } from './common/app-error-handler';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { CountryService } from './services/country.service';
import { HttpModule } from '@angular/http';
import { CountryDetailsComponent } from './country-details/country-details.component';


const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
    path: 'country/:code',
    component: CountryDetailsComponent
  },
  {
      path: '**',
      component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BgNavbarComponent,
    HomeComponent,
    NotFoundComponent,
    HomeBodyComponent,
    HomeHeaderComponent,
    CountryDetailsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
    ,RouterModule.forRoot(appRoutes)
  ],
  providers: [CountryService,{provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
