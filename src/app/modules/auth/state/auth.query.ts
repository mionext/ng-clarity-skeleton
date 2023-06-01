import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { AuthStateStruct, AuthStore } from './auth.state';
import { Profile } from 'src/app/types/profile';
import { Menu } from 'src/app/types/menu';

@Injectable({ providedIn: 'root' })
export class AuthStateQuery extends Query<AuthStateStruct> {
  constructor(protected override store: AuthStore) {
    super(store);
  }

  /**
   * Has an permission
   *
   * @param permission 权限
   * @returns bool
   */
  hasPermission(permission: string): boolean {
    return !!this.getValue().permissions?.includes(permission);
  }

  get menus(): Menu[] | undefined {
    return this.getValue().menus?.filter((menu) =>
      this.hasPermission(menu.uuid)
    );
  }

  get profile(): Profile | undefined {
    return this.getValue().profile;
  }

  get isLoggedIn(): boolean {
    return !!this.getValue().token;
  }

  update(partial: Partial<AuthStateStruct>) {
    this.store.update(partial);
  }
}
