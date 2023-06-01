import { Component, Input } from '@angular/core';
import { CdsIcon } from '@cds/core/icon';
import { Menu } from 'src/app/types/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent {
  @Input() menu: Menu = {} as Menu;

  readerIcon(name: string) {
    const icon = new CdsIcon();
    icon.shape = name;
    return icon;
  }
}
