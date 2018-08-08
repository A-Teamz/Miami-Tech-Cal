import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommentsService } from './services/comments.service'
import { AppComponent } from './app.component';
import { CommentsComponent } from './components/comments/comments.component';
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
  { path: '', component: CommentsComponent },]

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [CommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
