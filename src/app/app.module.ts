import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StudentListComponent } from './student-list/student-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { EditCourseComponent } from './edit-course/edit-course.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactusComponent,
    HomeComponent,
    HeaderComponent,
    StudentListComponent,
    NotfoundComponent,
    StudentDetailsComponent,
    StudentAddComponent,
    EditStudentComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentDetailsComponent,
    EditDepartmentComponent,
    CourseListComponent,
    CourseAddComponent,
    CourseDetailsComponent,
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
