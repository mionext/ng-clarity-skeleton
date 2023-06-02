export interface Alert {
  id: number
  icon?: string
  title?: string
  level: 0 | 1 | 2 | 3 // 'info' | 'warning' | 'danger' | 'success'
  link?: string // /nice/path | https://example.com?t=5
  linkType: 0 | 1 // _self | _blank
}
