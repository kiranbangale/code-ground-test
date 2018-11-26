import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './student-panel/add/add.component';
import { ViewComponent } from './student-panel/view/view.component';
import { EditComponent } from './student-panel/edit/edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'student',
    component: StudentPanelComponent,
    children: [
      { path: 'add', component: AddComponent },
      { path: ':id', component: ViewComponent },
      { path: ':id/edit', component: EditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
