import {Component, ViewEncapsulation} from '@angular/core';
 import { LocalDataSource } from 'ng2-smart-table';
import {SubCategoryService, AlertService} from '../../../services/index';
import {SubCategory} from '../../../bo/index';


@Component({
    selector : 'create-subcategory',
    templateUrl: 'CreateSubcategory.html'

})

export class CreateSubCategoryComponent{

  //  category: Category;
    subcategory: any = {};

   constructor(private subCategoryService:SubCategoryService, private alertService: AlertService){
      console.debug("Inside createsubCategoryComponent method ");
   }


   // save category
   save(){
     console.info("Inside save method "+this.subcategory.name);
     this.subCategoryService.save(this.subcategory).subscribe(//call the post
             data => {this.subcategory = data
                      this.alertService.success("New subcategory is created successfully",true);
                    }, // put the data returned from the server in our variable
             error =>{
                console.log("Error HTTP Post Service");
                this.alertService.error("Exception : "+error);
             }, // in case of failure show this message
             () => console.log("Job Done Post !")//run this code in all cases
         );

       }


}
