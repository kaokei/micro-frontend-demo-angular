import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';

import { FormComponent } from './form.component';

import { NgZorroModule } from '../../ng-zorro.module';

@NgModule({
  imports: [FormRoutingModule, NgZorroModule],
  declarations: [FormComponent],
  exports: [FormComponent],
})
export class FormModule {}
