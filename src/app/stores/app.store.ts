import {Store, StoreConfig} from "@datorama/akita";
import {Injectable} from "@angular/core";
import {AppState} from "../types";

function initializeStore(): AppState {
  return {
    title: 'A'
  }
}

@Injectable({providedIn: 'root'})
@StoreConfig({name: 'app', resettable: true})
export class AppStore extends Store<AppState> {
  constructor() {
    super(initializeStore());
  }
}
