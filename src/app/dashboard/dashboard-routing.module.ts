import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layout/navbar.component';
import { ShowCustomerComponent } from './pages/customers/show-customer/show-customer.component';
import { CreateEditCustomerComponent } from './pages/customers/create-edit-customer/create-edit-customer.component';
import { ShowVehiclesComponent } from './pages/vehicles/show-vehicles/show-vehicles.component';
import { CreateEditVehiclesComponent } from './pages/vehicles/create-edit-vehicles/create-edit-vehicles.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path:'',
    component: NavbarComponent,
    children:[
      {
        path:'customer',
        component: ShowCustomerComponent
      },
      {
        path:'customer/create',
        component: CreateEditCustomerComponent
      },
      {
        path:'customer/edit/:id',
        component: CreateEditCustomerComponent
      },
      {
        path:'vehicle',
        component: ShowVehiclesComponent
      },
      {
        path:'vehicle/create',
        component: CreateEditVehiclesComponent
      },
      {
        path:'vehicle/edit/:id',
        component: CreateEditVehiclesComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:'**',
        redirectTo: 'customer'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
