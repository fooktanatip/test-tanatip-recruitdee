import { S2Question1Component } from './component/section2/s2-question1/s2-question1.component';
import { S2Question2Component } from './component/section2/s2-question2/s2-question2.component';
import { Question4Component } from './component/section1/question4/question4.component';
import { Question3Component } from './component/section1/question3/question3.component';
import { Question2Component } from './component/section1/question2/question2.component';
import { Question1Component } from './component/section1/question1/question1.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'question1', component:Question1Component},
  { path: 'question2', component:Question2Component},
  { path: 'question3', component:Question3Component},
  { path: 'question4', component:Question4Component},
  { path: 's2-question1', component:S2Question1Component},
  { path: 's2-question2', component:S2Question2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
