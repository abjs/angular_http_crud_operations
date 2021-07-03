import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-delete-request',
  templateUrl: './delete-request.component.html',
  styleUrls: ['./delete-request.component.scss'],
})
export class DeleteRequestComponent {
  @Output() submitEM = new EventEmitter();
  form: FormGroup = new FormGroup({
    user_id: new FormControl(''),
  });
  private url: string = 'http://localhost:3000/dev/users';
  constructor(private httpService: HttpService) {}
  deleteUser(url: string): void {
    this.httpService.deleteRequest(url).subscribe((response) => {
      console.log(response);
      alert(JSON.stringify(response.message));
    });
  }
  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      console.log(this.form.value);
      this.deleteUser(this.url + '/' + this.form.value.user_id);
    }
  }
}
