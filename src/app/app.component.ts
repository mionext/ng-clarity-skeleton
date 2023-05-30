import { Component } from '@angular/core';
import { AppStateQuery } from './state/app.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<app-layout />`,
})
export class AppComponent {
  title = 'ng-clarity-skeleton';
  c$: Observable<boolean> = this.appStateQuery.select('collapsed');
  constructor(protected appStateQuery: AppStateQuery) {}

  ngOnInit(): void {
    setInterval(() => {
      this.appStateQuery.update({
        collapsed: !this.appStateQuery.sidebarCollapsed,
      });
    }, 1000);
  }
}
