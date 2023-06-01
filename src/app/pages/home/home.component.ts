import { Component } from '@angular/core';
import { v4 } from 'uuid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent {
  uuid(): string {
    return v4();
  }
}
