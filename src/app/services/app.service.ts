import { Injectable } from '@angular/core';
import {AppStore} from "../stores/app.store";
import {Query} from "@datorama/akita";
import {AppState} from "../types";

@Injectable({
  providedIn: 'root'
})
export class AppService extends Query<AppState>{
  constructor(protected override store: AppStore) {
    super(store);
  }

  patchState(partial: Partial<AppState>) {
    this.store.update(partial);
  }
}
