import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-post-request',
  templateUrl: './post-request.component.html',
  styleUrls: ['./post-request.component.scss'],
})
export class PostRequestComponent {
  @Output() submitEM = new EventEmitter();
  form: FormGroup = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
  });
  private url: string = environment.apiURL;
  constructor(private httpService: HttpService) {}
  createNewUser(url: string, data: any): void {
    this.httpService.postRequest(url, data).subscribe((response) => {
      console.log(response);
      alert(JSON.stringify(response.message));
    });
  }
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      this.createNewUser(this.url, this.form.value);
    }
  }
}
