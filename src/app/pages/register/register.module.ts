import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from './register.component';
import {routing} from './register.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, JsonpModule, Response} from "@angular/http";
 import { NgaModule } from '../../theme/nga.module';
 import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({

  imports : [
      CommonModule,
      routing,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      JsonpModule,
      NgaModule,
      Ng2SmartTableModule

    ],
    declarations : [ RegisterComponent ],

    providers :[ ]


})
export default class RegisterModule {}
