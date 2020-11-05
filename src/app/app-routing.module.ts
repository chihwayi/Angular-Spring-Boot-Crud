import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'person', pathMatch: 'full' },
  { path: 'person', component: PeopleListComponent },
  { path: 'update', component: UpdatePersonComponent}, 
  { path: 'delete', component: DeletePersonComponent},
  { path: 'details', component: PersonDetailsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
