import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.css']
})
export class Question1Component implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get<any>('https://codequiz.azurewebsites.net/data').subscribe(response => {
      console.log('response', response);
    });
  }

  test() {
    function thisIsSyncFunction() {
      let result = 0;

      fetch('https://codequiz.azurewebsites.net/data').then(res => res.json()).then((response) =>    {
          result = response.data;
      });
      return result;
  }

  const number1 = thisIsSyncFunction()
  const calculation = number1 * 10;
  console.log(calculation);

  }

}
