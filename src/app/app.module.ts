import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostRequestComponent } from './post-request/post-request.component';
import { GetRequestComponent } from './get-request/get-request.component';
import { UpdateRequestComponent } from './update-request/update-request.component';
import { DeleteRequestComponent } from './delete-request/delete-request.component';
import { HttpLogsInterceptor } from './http-logs.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    PostRequestComponent,
    GetRequestComponent,
    UpdateRequestComponent,
    DeleteRequestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpLogsInterceptor ,multi: true },],
  bootstrap: [AppComponent],
})
export class AppModule {}
