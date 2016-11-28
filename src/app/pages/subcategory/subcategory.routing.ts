import { Routes, RouterModule } from '@angular/router';
import { subcategoryComponent } from './subcategory.component';

const routes : Routes = [

    {
      path: '',
      component :subcategoryComponent
    }

];

export const routing = RouterModule.forChild(routes);
