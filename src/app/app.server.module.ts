import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { Routes, RouterModule } from '@angular/router';
import { ModuleMapLoaderModule, ModuleMapNgFactoryLoader } from '@nguniversal/module-map-ngfactory-loader';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppShellComponent } from './app-shell/app-shell.component';

const routes: Routes = [{ path: 'shell', component: AppShellComponent }];

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    RouterModule.forRoot(routes),
    ServerTransferStateModule,
  ],
  providers: [{
    provide: NgModuleFactoryLoader,
    useClass: ModuleMapNgFactoryLoader
  }],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
  declarations: [AppShellComponent],
})
export class AppServerModule { }
