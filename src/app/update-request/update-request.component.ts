import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.scss'],
})
export class UpdateRequestComponent {
  @Output() submitEM = new EventEmitter();
  getUserForm: FormGroup = new FormGroup({
    user_id: new FormControl(''),
  });
  form: FormGroup = new FormGroup({
    user_id: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    user_status: new FormControl(''),
    permissions: new FormControl(''),
  });
  users: any = [];
  private url: string = environment.apiURL;
  constructor(private httpService: HttpService) {}
  UpdateUser(url: string, data: any): void {
    this.httpService.updateRequest(url, data).subscribe((response) => {
      console.log(response);
      alert(JSON.stringify(response.message));
    });
  }

  getUser(url: string) {
    try {
      this.httpService.getRequest(url).subscribe(({ data }) => {
        const {
          user_id,
          first_name,
          last_name,
          email,
          phone,
          user_status,
          permissions,
        } = data.responseParameter;
        this.form = new FormGroup({
          user_id: new FormControl(user_id),
          first_name: new FormControl(first_name),
          last_name: new FormControl(last_name),
          email: new FormControl(email),
          phone: new FormControl(phone),
          user_status: new FormControl(user_status),
          permissions: new FormControl(permissions),
        });
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  getUserData() {
    if (this.getUserForm.valid) {
      this.submitEM.emit(this.form.value);
      console.log(this.getUserForm.value);
      this.getUser(this.url + '/' + this.getUserForm.value.user_id);
    }
  }
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      console.log(this.form.value);
      this.UpdateUser(
        this.url + '/' + this.form.value.user_id,
        this.form.value
      );
    }
  }
}
