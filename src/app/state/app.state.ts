import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";

export interface AppStateStruct {
  collapsed: boolean;
}

export function createInitialState(): AppStateStruct {
  return {
    collapsed: false
  }
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'app'})
export class AppStore extends Store<AppStateStruct> {
  constructor() {
    super(createInitialState());
  }

  override akitaPreUpdate(_: Readonly<AppStateStruct>, nextState: Readonly<AppStateStruct>): AppStateStruct {
    console.log('AppStore.PreUpdate', nextState);

    return super.akitaPreUpdate(_, nextState);
  }
}