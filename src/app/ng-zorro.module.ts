import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterLinkDirective } from './directives/router-link.directive';

@NgModule({
  declarations: [RouterLinkDirective],
  imports: [NzButtonModule],
  exports: [NzButtonModule, RouterLinkDirective],
})
export class NgZorroModule {}
