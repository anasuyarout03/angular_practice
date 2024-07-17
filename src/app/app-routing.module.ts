import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { AuthGuard } from './guards/auth.guard';
import { HaschangesGuard } from './guards/haschanges.guard';
import { AuthGuardChildGuard } from './guards/auth-guard-child.guard';
import { PhotosResolverService } from './services/photos-resolver.service';

const routes: Routes = [
  { path:'home',component: HomeComponent },
  { path:'aboutus',component: AboutusComponent,canDeactivate: [HaschangesGuard],},
  { path:'careers',component: CareersComponent,
  children: [
    { path:'permanent',component: PermanentJobsComponent },
    { path:'contract',component: ContractJobsComponent,canActivate: [AuthGuard]},
    ],
    // canActivateChild: [AuthGuardChildGuard],
  },
  { path:'products',component: ProductListComponent,canActivate: [AuthGuard],},
  { path:'photos',component: PhotosComponent,resolve: {myphotos: PhotosResolverService}},
  { path:'photodetails/:id',component: PhotoDetailsComponent },
  { path:'productdetails',component: ProductDetailsComponent },
  { path:'',component: HomeComponent },
  { path: 'grocery', loadChildren: () => import('./grocery/grocery.module').then(m => m.GroceryModule) },
  { path: 'travel', loadChildren: () => import('./travel/travel.module').then(m => m.TravelModule) },
  { path:'**',component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
