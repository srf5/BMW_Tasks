import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/about-us/about-us.component';
import { HomeComponent } from 'src/home/home.component';
import { TeamComponent } from 'src/team/team.component';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent},
  { path: '',component: HomeComponent},
  { path: 'team', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
