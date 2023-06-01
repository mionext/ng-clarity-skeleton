export interface Menu {
  uuid: string;
  name: string;
  icon?: string;
  target?: 'self' | 'blank' | '';
  path?: string;
  children?: Menu[];
}
