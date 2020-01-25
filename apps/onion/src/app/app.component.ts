import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@onion-first/api-interfaces';
import { ListUsersQuery } from './core/list-users.query';

@Component({
  selector: 'onion-first-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient, private query: ListUsersQuery) {}

  ngOnInit() {
    this.query.execute().subscribe(users => {
      console.log(users);
    });
  }
}
