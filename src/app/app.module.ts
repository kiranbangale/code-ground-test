import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { StudentService } from './student.service';
import { StudentPanelComponent } from './student-panel/student-panel.component';
import { AppRoutingModule } from './app.routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GridPanelComponent } from './grid-panel/grid-panel.component';
import { AddComponent } from './student-panel/add/add.component';
import { EditComponent } from './student-panel/edit/edit.component';
import { ViewComponent } from './student-panel/view/view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftPanelComponent,
    RightPanelComponent,
    StudentPanelComponent,
    DashboardComponent,
    GridPanelComponent,
    AddComponent,
    EditComponent,
    ViewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
