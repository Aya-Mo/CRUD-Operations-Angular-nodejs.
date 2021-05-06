import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CourseListComponent } from './course-list/course-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact us', component: ContactusComponent },
  { path: 'students', component: StudentListComponent },
  { path: 'students/details/:id', component: StudentDetailsComponent },
  { path: 'students/add', component: StudentAddComponent },
  { path: 'students/edit/:id', component: EditStudentComponent },

  { path: 'departments', component: DepartmentListComponent },
  { path: 'departments/details/:id', component: DepartmentDetailsComponent },
  { path: 'departments/add', component: DepartmentAddComponent },
  { path: 'departments/edit/:id', component: EditDepartmentComponent },


  { path: 'courses', component: CourseListComponent },
  { path: 'courses/details/:id', component: CourseDetailsComponent },
  { path: 'courses/add', component: CourseAddComponent },
  { path: 'courses/edit/:id', component: EditCourseComponent },

  { path: '', redirectTo: "/home", pathMatch: "full" },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
