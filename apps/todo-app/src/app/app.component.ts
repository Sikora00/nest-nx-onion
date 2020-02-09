import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ListUsersQuery } from './core/list-users.query';

@Component({
  selector: 'todo-app-root',
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
