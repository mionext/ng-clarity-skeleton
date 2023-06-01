import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AppStateStruct, AppStore } from './app.state';

@Injectable({ providedIn: 'root' })
export class AppStateQuery extends Query<AppStateStruct> {
  constructor(protected override store: AppStore) {
    super(store);
  }

  get sidebarCollapsed(): boolean {
    return !!this.getValue().collapsed;
  }

  update(partial: Partial<AppStateStruct>) {
    this.store.update(partial);
  }
}
