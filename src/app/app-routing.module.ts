import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteRequestComponent } from './delete-request/delete-request.component';
import { GetRequestComponent } from './get-request/get-request.component';
import { PostRequestComponent } from './post-request/post-request.component';
import { UpdateRequestComponent } from './update-request/update-request.component';

const routes: Routes = [
  { path: 'get', component: GetRequestComponent },
  { path: 'post', component: PostRequestComponent },
  { path: 'update', component: UpdateRequestComponent },
  { path: 'delete', component: DeleteRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
