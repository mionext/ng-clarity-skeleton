import {Store as BaseStore} from "@datorama/akita";

export class Store extends BaseStore {
  override akitaPreUpdate(_: Readonly<any>, nextState: Readonly<any>): any {
    console.log(self.name + '.PreUpdate', nextState)

    return super.akitaPreUpdate(_, nextState);
  }
}
