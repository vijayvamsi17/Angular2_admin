import { Component } from '@angular/core';

import {CategoryService, AlertService} from '../../../services/index';
import {Category} from '../../../bo/index';


@Component({
    selector : 'create-category',
    templateUrl: 'createCategory.html'

})

export class CreateCategoryComponent{

  //  category: Category;
    category: any = {};

   constructor(private categoryService:CategoryService, private alertService: AlertService){
      console.debug("Inside createCategoryComponent method ");
   }


   // save category
   save(){
     console.info("Inside save method "+this.category.name);
     this.categoryService.save(this.category).subscribe(//call the post
             data => {this.category = data
                      this.alertService.success("New category is created successfully",true);
                    }, // put the data returned from the server in our variable
             error =>{
                console.log("Error HTTP Post Service");
                this.alertService.error("Exception : "+error);
             }, // in case of failure show this message
             () => console.log("Job Done Post !")//run this code in all cases
         );

       }


}
