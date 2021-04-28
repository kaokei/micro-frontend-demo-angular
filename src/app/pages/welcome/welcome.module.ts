import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NgZorroModule } from '../../ng-zorro.module';
import { MonitorComponent } from './monitor/monitor.component';
import { WorkplaceComponent } from './workplace/workplace.component';

@NgModule({
  imports: [WelcomeRoutingModule, NgZorroModule],
  declarations: [WelcomeComponent, MonitorComponent, WorkplaceComponent],
  exports: [WelcomeComponent],
})
export class WelcomeModule {}
