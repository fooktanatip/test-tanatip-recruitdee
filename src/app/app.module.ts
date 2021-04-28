import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Question1Component } from './component/section1/question1/question1.component';
import { HomeComponent } from './component/home/home.component';
import { Question2Component } from './component/section1/question2/question2.component';
import { Question3Component } from './component/section1/question3/question3.component';
import { Question4Component } from './component/section1/question4/question4.component';
import { S2Question2Component } from './component/section2/s2-question2/s2-question2.component';
import { S2Question1Component } from './component/section2/s2-question1/s2-question1.component';


@NgModule({
  declarations: [
    AppComponent,
    Question1Component,
    HomeComponent,
    Question2Component,
    Question3Component,
    Question4Component,
    S2Question2Component,
    S2Question1Component
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
