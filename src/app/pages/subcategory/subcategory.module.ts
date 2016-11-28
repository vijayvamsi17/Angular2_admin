import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {subcategoryComponent} from './subcategory.component';
import {routing} from './subcategory.routing';
import { FormsModule } from '@angular/forms';
import {HttpModule, JsonpModule, Response} from "@angular/http";
import { NgaModule } from '../../theme/nga.module';
 import { Ng2SmartTableModule } from 'ng2-smart-table';


 import {CreateSubCategoryComponent} from './components/createSubCategory.component';
 import {SubCategoriesComponent} from './components/subCategories.component';

 import {SubCategoryService, AlertService} from '../../services/index';


@NgModule({

  imports : [
      CommonModule,
      routing,
      FormsModule,
      NgaModule,
      HttpModule,
      JsonpModule,
      Ng2SmartTableModule

    ],
    declarations : [
        subcategoryComponent,
        CreateSubCategoryComponent,
        SubCategoriesComponent

    ],
    providers :[
        SubCategoryService,
        AlertService

    ]


})
export default class SubCategoryModule {
  constructor(){
    console.info("inside sub category module");
  }

}
