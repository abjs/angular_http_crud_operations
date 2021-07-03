import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.scss'],
})
export class GetRequestComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  ngOnInit(): void {}

  handleEvent() {
    this.httpService
      .getRequest('https://jsonplaceholder.typicode.com/todos')
      .subscribe();
  }
}
