import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SchoolComponent} from './school/school.component';


const routes: Routes = [{
  path: 'schools',
  component: SchoolComponent

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
