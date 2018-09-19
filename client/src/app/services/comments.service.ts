import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import 'rxjs/Rx';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';


@Injectable()
export class CommentsService {

  constructor(private myHttp: Http) { }


  getEntries(){
    return this.myHttp.get(`${environment.apiBase}/api/comments`)
    .map((responseThingy)=> responseThingy.json())
  }

  addNewEntry(theWholeEntryObject){
    return this.myHttp.post(`${environment.apiBase}/api/comments`,theWholeEntryObject, { withCredentials:true })
    .map((res)=>res.json());
  }

  getOneEntry(theIdOfTheEntry){
    return this.myHttp.get(`${environment.apiBase}/api/comments/${theIdOfTheEntry}`, { withCredentials:true })
    .map((responseThingy)=> responseThingy.json())
  }

  deleteEntry(theIdOfTheEntry){
    return this.myHttp.post(`${environment.apiBase}/api/comments/${theIdOfTheEntry}/delete`, {}, { withCredentials: true })
    .map((res)=> res.json())
  }

  updateComment(theIdOfTheEntry, updates) {
    console.log('what: ', updates)
    return this.myHttp.put(`${environment.apiBase}/api/comments/${theIdOfTheEntry}`, updates, { withCredentials: true })
    .map(res => res.json());
  }

  checkIfLoggedIn() {
    return this.myHttp.get(`${environment.apiBase}/api/loggedin`, { withCredentials: true })
    .map(res => res.json());
  }

}