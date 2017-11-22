import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
import { OfflineFormsComponent }      from './offline-forms/offline-forms.component';
import { OfflineFormDetailComponent } from './offline-form-detail/offline-form-detail.component';

const routes: Routes = [
  { path: 'offline-forms', component: OfflineFormsComponent },
  { path: 'offline-form-detail/:id', component: OfflineFormDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
