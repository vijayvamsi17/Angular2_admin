import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import {Category} from '../bo/Category'
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';



@Injectable()
export class CategoryService{

  private  categoryUrl = "http://localhost:9001/api/v1.0/adminservice/category";
  private  categoriesUrl = "http://localhost:9001/api/v1.0/adminservice/categories";

  constructor(private _http:Http){

  }

  // To get all categories
  getAll(){
      //TODO Authentication Header Delete this code after actual implmentations
      //var authHeader = new Headers();
      //this.http.get('http://localhost:3001/api/protected/random-quote', {
      //headers: authHeader
      //})
      return this._http.get(this.categoriesUrl)
                       .map(res => res.json());
                  }

   // create category
    save(category: Category){
      console.info("Saving category "+category.name);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      return this._http.post(this.categoryUrl, category)
                       .map(res => res.json())
                       .catch(this.handleError);

    }

    private handleError (error: Response) {
       console.error(error);
       return Observable.throw(error.json().error || ' error');
   }

}
