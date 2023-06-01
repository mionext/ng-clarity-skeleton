import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Menu } from 'src/app/types/menu';
import { Profile } from 'src/app/types/profile';
import { menus } from 'src/mock/menus';

export interface AuthStateStruct {
  token?: string;
  profile?: Profile;
  permissions?: string[];
  menus?: Menu[];
}

function createInitialState(): AuthStateStruct {
  return {
    menus: menus,
    permissions: [],
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'auth' })
export class AuthStore extends Store<AuthStateStruct> {
  constructor() {
    super(createInitialState());
  }

  override akitaPreUpdate(
    _: Readonly<AuthStateStruct>,
    nextState: Readonly<AuthStateStruct>
  ): AuthStateStruct {
    console.log('AuthStore.PreUpdate', nextState);

    return super.akitaPreUpdate(_, nextState);
  }
}
