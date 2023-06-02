import {Component, inject, OnInit} from '@angular/core';
import { Observable, map } from 'rxjs';
import {AppService} from "./services/app.service";
import {AppStore} from "./stores/app.store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{
  loading: Observable<boolean> = inject(AppService).selectLoading()
  constructor(protected store: AppStore) {}

  ngOnInit(): void {
    this.loading.subscribe(l => {
      setTimeout(() => {
        this.store.setLoading(!l)
      }, 500)
    })
  }
}
