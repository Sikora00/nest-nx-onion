import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@onion-first/api-interfaces';

@Component({
  selector: 'onion-first-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
