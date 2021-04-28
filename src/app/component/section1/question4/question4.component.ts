import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.css']
})
export class Question4Component implements OnInit {

  rgbc = 'Answare';
  constructor() { }

  ngOnInit(): void {
    this.RandomColor();
  }

  RandomColor() {
    const getRandomRGB = () => {
      const r = Math.floor(Math.random() * Math.floor(255));
      const g = Math.floor(Math.random() * Math.floor(255));
      const b = Math.floor(Math.random() * Math.floor(255));
      return `rgb(${r},${g},${b})`;
    };

    const colorPicker = document.getElementById('colorPicker');

    for (let i=0; i<10000; ++i) {
      const btn = document.createElement('button');
      const rgb = getRandomRGB();
      btn.id = rgb;
      btn.textContent = rgb;
      btn.style.backgroundColor = rgb;
      colorPicker.appendChild(btn);
      btn.addEventListener('click', () => {
        console.log(btn.id);
        return this.rgbc = btn.id;
    })
    }
  }

}
