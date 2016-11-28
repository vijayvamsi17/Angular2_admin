import {Component, ViewEncapsulation} from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import {SubCategoryService, AlertService} from '../../../services/index';
import {SubCategory} from '../../../bo/index';


@Component({

  selector :'subcategory-list',
  templateUrl :'subCategories.html',
  // styles:  [require('./smartTable.scss')]
})

export class SubCategoriesComponent{

  query: string = '';

    settings = {
      add: {
        addButtonContent: '<i class="ion-ios-plus-outline"></i>',
        createButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="ion-edit"></i>',
        saveButtonContent: '<i class="ion-checkmark"></i>',
        cancelButtonContent: '<i class="ion-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="ion-trash-a"></i>',
        confirmDelete: true
      },
      columns: {
        id: {
          title: 'ID',
          type: 'number'
        },
        Name: {
          title: 'Name',
          type: 'string'
        },
        Description: {
          title: 'Description',
          type: 'string'
        },
        Image: {
          title: 'Image',
          type: 'string'
        }
      }
    };

    source: LocalDataSource = new LocalDataSource();

    constructor(protected service: SubCategoryService) {
      console.debug("inside categories component");
      this.service.getAll().subscribe((data) => {
        this.source.load(data);
      });
    }

    onDeleteConfirm(event): void {
      if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve();
      } else {
        event.confirm.reject();
      }
    }

}
