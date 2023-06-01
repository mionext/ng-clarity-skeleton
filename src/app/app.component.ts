import { Component, inject } from '@angular/core';
import { AppStateQuery } from './state/app.query';
import { Menu } from './types/menu';
import { Observable, map } from 'rxjs';
import { AuthStateQuery } from './modules/auth/state/auth.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected appState = inject(AppStateQuery);
  protected authState = inject(AuthStateQuery);
  menus: Observable<Menu[] | undefined> = this.authState.select('menus');

  ngOnInit(): void {
    this.menus.subscribe((menus) => {
      setTimeout(() => {
        this.authState.update({ permissions: menus?.map((menu) => menu.uuid) });
      }, 100);
    });
  }
}
