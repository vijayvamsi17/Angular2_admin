import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import{SubCategory} from '../bo/SubCategory'
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';



@Injectable()
export class SubCategoryService{

  private  subCategoryUrl = "http://localhost:9001/api/v1.0/adminservice/subCategory";
  // private  categoriesUrl = "http://localhost:9001/api/v1.0/adminservice/categories";

  constructor(private _http:Http){

  }

  // To get all categories
  getAll(){
      //TODO Authentication Header Delete this code after actual implmentations
      //var authHeader = new Headers();
      //this.http.get('http://localhost:3001/api/protected/random-quote', {
      //headers: authHeader
      //})
      return this._http.get(this.subCategoryUrl)
                       .map(res => res.json());
                  }

   // create category
    save(subcategory: SubCategory){
      console.info("Saving SubCategory "+SubCategory.name);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      return this._http.post(this.subCategoryUrl, SubCategory)
                       .map(res => res.json())
                       .catch(this.handleError);

    }

    private handleError (error: Response) {
       console.error(error);
       return Observable.throw(error.json().error || ' error');
   }

}
