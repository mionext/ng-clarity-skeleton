import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface AuthStateStruct {
  token: string;
}

export function createInitialState(): AuthStateStruct {
  return {
    token: '',
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AppStore extends Store<AuthStateStruct> {
  constructor() {
    super(createInitialState());
  }

  get isLoggedIn(): boolean {
    return !!this.getValue().token;
  }

  override akitaPreUpdate(
    _: Readonly<AuthStateStruct>,
    nextState: Readonly<AuthStateStruct>
  ): AuthStateStruct {
    console.log('AuthStore.PreUpdate', nextState);

    return super.akitaPreUpdate(_, nextState);
  }
}
