import { Icategory } from './s2-question2.interface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-s2-question2',
  templateUrl: './s2-question2.component.html',
  styleUrls: ['./s2-question2.component.css']
})
export class S2Question2Component implements OnInit {

  categoryList:Icategory[] = [];

  constructor(
    private http : HttpClient
  ) { }

  ngOnInit(): void {
    this.getCetagory();
  }

  getCetagory() {
    this.http.get<Icategory[]>('https://api.publicapis.org/categories').subscribe(response => {
      this.categoryList = response;
      console.log(response);

    });
  }

}
