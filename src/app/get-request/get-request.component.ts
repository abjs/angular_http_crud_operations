import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.scss'],
})
export class GetRequestComponent implements OnInit {
  private url: string = environment.apiURL;
  constructor(private httpService: HttpService) {}
  users: any = [];
  data: any = this.httpService.getRequest('http://localhost:3000/dev/users');
  getAllUsers(): void {
    try {
      this.httpService.getRequest(this.url).subscribe((response) => {
        this.users = response;
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  ngOnInit() {
    this.getAllUsers();
  }
}
