import {Component, Input} from '@angular/core';
import {Menu} from "../../../types/menu";

@Component({
  selector: 'nav-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.less']
})
export class VerticalComponent {
  @Input() menu: Menu = {} as Menu;
}
