import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-s2-question1',
  templateUrl: './s2-question1.component.html',
  styleUrls: ['./s2-question1.component.css']
})
export class S2Question1Component implements OnInit {

  form = new FormControl();
  number1:number;
  anys = 'any';

  constructor() { }

  ngOnInit(): void {
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    if((this.number1 == 1 || this.number1 %2 == 0 || this.number1 %3 == 0 || this.number1 %5==0 || this.number1 %7==0)
            && (this.number1 !=2 && this.number1 !=3 && this.number1 !=5 && this.number1 !=7)){
      this.anys = 'false'
    }
    else {
      this.anys = 'true'
    }
  }

  onSubmit2() {
    if (this.number1 == (5*(this.number1*this.number1)-4)){
      this.anys = 'true'
    }
    else {
      this.anys = 'false'
    }
  }

}

// if (this.number1 = (5*(this.number1*this.number1)-4) || this.number1 = (5*(this.number1*this.number1)+4)) {
//   return true
// } else { return false; }
