import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  x = 10;
  val = 'submit';
  show() {
    alert('Hiiiii');
  }
}
