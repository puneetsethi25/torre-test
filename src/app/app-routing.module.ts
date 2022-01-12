import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'', pathMatch: 'full',redirectTo: 'profile' 
  },
  {
    path:'profile', component: ProfileComponent
  },
  {
    path:'profile-detail', component: ProfileDetailComponent
  },
  {
    path:'search', component: SearchComponent
  },
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
