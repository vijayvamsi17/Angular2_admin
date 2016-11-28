import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryComponent} from './category.component';
import {routing} from './category.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpModule, JsonpModule, Response} from "@angular/http";
 import { NgaModule } from '../../theme/nga.module';
 import { Ng2SmartTableModule } from 'ng2-smart-table';


import {CreateCategoryComponent} from './components/createCategory.component';
import {CategoriesComponent} from './components/categories.component';
import {CategoryService, AlertService} from '../../services/index';

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
    declarations : [
        CategoryComponent,
        CreateCategoryComponent,
        CategoriesComponent,

    ],
    providers :[
        CategoryService,
        AlertService
    ]


})
export default class CategoryModule {}
