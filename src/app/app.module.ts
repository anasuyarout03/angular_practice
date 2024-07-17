import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { LoginModule } from 'src/login/login.module';
import { DirectiveComponent } from './components/directive/directive.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { GreetComponent } from './components/greet/greet.component';
import { MymodalComponent } from './components/mymodal/mymodal.component';
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickcountDirective } from './directives/clickcount.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingPipe } from './custom-pipes/remaining.pipe';
import { MysortPipe } from './custom-pipes/mysort.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { MathComponent } from './components/math/math.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsApiComponent } from './components/products-api/products-api.component';
import { EmpApiComponent } from './components/emp-api/emp-api.component';
import { MyInterceptor1 } from './utils/my-interceptor1';
import { RetryInterceptor } from './utils/retry-interceptor';
import { Observabledemo1Component } from './components/observabledemo1/observabledemo1.component';
import { Observabledemo2Component } from './components/observabledemo2/observabledemo2.component';
import { Observabledemo3Component } from './components/observabledemo3/observabledemo3.component';
import { Observabledemo4Component } from './components/observabledemo4/observabledemo4.component';
import { Observabledemo5Component } from './components/observabledemo5/observabledemo5.component';
import { Subjectdemo1Component } from './components/subjectdemo1/subjectdemo1.component';
import { SendMessageComponent } from './components/send-message/send-message.component';
import { ReceiveMessageComponent } from './components/receive-message/receive-message.component';
import { ReceiveMessage2Component } from './components/receive-message2/receive-message2.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoList1Component } from './components/todo-list1/todo-list1.component';
import { TodoList2Component } from './components/todo-list2/todo-list2.component';
import { FormDemo1Component } from './components/form-demo1/form-demo1.component';
import { TemplateDrivenForm1Component } from './components/template-driven-form1/template-driven-form1.component';
import { TemplateDrivenForm2Component } from './components/template-driven-form2/template-driven-form2.component';
import { ModalDrivenFormComponent } from './components/modal-driven-form/modal-driven-form.component';
import { ModalDrivenForm2Component } from './components/modal-driven-form2/modal-driven-form2.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  // components, directives,pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    NavbarComponent,
    CarousalComponent,
    CategoriesComponent,
    DatabindingComponent,
    DirectiveComponent,
    UserListComponent,
    ProductListComponent,
    GreetComponent,
    MymodalComponent,
    EmployeeCrudComponent,
    NumberonlyDirective,
    HighlightDirective,
    ClickcountDirective,
    ZoomDirective,
    PipesComponent,
    RemainingPipe,
    MysortPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    MathComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    UsersComponent,
    ProductsApiComponent,
    EmpApiComponent,
    Observabledemo1Component,
    Observabledemo2Component,
    Observabledemo3Component,
    Observabledemo4Component,
    Observabledemo5Component,
    Subjectdemo1Component,
    SendMessageComponent,
    ReceiveMessageComponent,
    ReceiveMessage2Component,
    AddTodoComponent,
    TodoList1Component,
    TodoList2Component,
    FormDemo1Component,
    TemplateDrivenForm1Component,
    TemplateDrivenForm2Component,
    ModalDrivenFormComponent,
    ModalDrivenForm2Component,
    HomeComponent,
    AboutusComponent,
    CareersComponent,
    NotfoundComponent,
    PhotosComponent,
    PhotoDetailsComponent,
    ProductDetailsComponent,
    PermanentJobsComponent,
    ContractJobsComponent,
    
  ],
  // all the dependent modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    NgxPaginationModule,
    // Ng2SearchPipeModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {}),
  ],
  // Services
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor1, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true},
  ],
  // Which components to load
  bootstrap: [AppComponent]
})
export class AppModule { }
