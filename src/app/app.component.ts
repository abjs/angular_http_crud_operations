import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Api';
  constructor(private httpService: HttpService){

  }
  handleEvent(){
    console.log("api get Call",this.httpService.getRequest("https://jsonplaceholder.typicode.com/todos").subscribe(res=>{
      console.log(res)
    }) )
  }
}
