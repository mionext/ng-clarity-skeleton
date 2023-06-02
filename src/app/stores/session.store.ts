import {Store} from "./store";
import {Menu} from "../types/menu";
import {Alert} from "../types/alert";

interface SessionState {
  role?: string
  menus?: Menu[]
  alerts?: Alert[]
  permissions?: string[]
}
function initializeStore() {
  return {

  }
}

export class SessionStore extends Store {
  constructor() {
    super(initializeStore());
  }
}
