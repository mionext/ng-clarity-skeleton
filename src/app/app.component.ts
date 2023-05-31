import { Component, inject } from '@angular/core';
import { AppStateQuery } from './state/app.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  appState = inject(AppStateQuery);
  title = 'ng-clarity-skeleton';

  ngOnInit(): void {
    setTimeout(() => {
      this.appState.update({ collapsed: !this.appState.sidebarCollapsed });
    }, 2500);
  }
}
