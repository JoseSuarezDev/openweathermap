import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.reducer';
import { Subscription } from 'rxjs';
import * as listActions from "../../../../store/actions";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [ '.collection .collection-item.avatar { min-height: initial;}' ]
})

export class ListComponent implements OnInit {

  subscribe : Subscription;
  list = [];
  loading: boolean;
  error: any;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {

    
    this.subscribe = this.store.select('list')
    .subscribe( list => {
      this.list = list.list
      this.loading = list.loading
      this.error = list.error
    })
    
    this.store.dispatch( new listActions.GetList()  ) 


  }

}
