import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdButtonModule, MdSnackBarModule, MdSidenavModule, MdToolbarModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';

import { HttpSwProxyModule } from 'ng-http-sw-proxy';
import { SnackBarService } from './services/snack-bar.service';
import { ServiceWorkerService } from './services/service-worker.service';
import { DeviceService } from './services/device.service';
import { ReTree } from './services/retree.service';
import { WindowRef } from './windowRef';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    MdButtonModule,
    MdToolbarModule,
    MdSnackBarModule,
    MdSidenavModule,
    CommonModule,
    HttpSwProxyModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'httpProxy', loadChildren: './httpProxy/http-proxy.module#HttpProxyModule'}
    ]),
    ServiceWorkerModule
  ],
  declarations: [ AppComponent, HomeComponent, MenuComponent ],
  exports: [ AppComponent ],
  providers: [
    WindowRef,
    SnackBarService,
    {provide: ServiceWorkerService, useClass: ServiceWorkerService, deps:[WindowRef]},
    {provide: DeviceService, useClass: DeviceService, deps:[WindowRef]},
    ReTree
  ]
})
export class AppModule {
}
