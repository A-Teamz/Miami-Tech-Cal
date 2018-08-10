import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map'

// @Injectable({
//   providedIn: 'root'
// })
// export class CommentsService {

//   constructor() { }
// }


@Injectable()
export class CommentsService {

  constructor(private myHttp: Http) { }


  getEntries(){
    return this.myHttp.get('http://localhost:3000/api/comments')
    .map((responseThingy)=> responseThingy.json())
  }


  addNewEntry(theWholeEntryObject){
    return this.myHttp.post('http://localhost:3000/api/comments',theWholeEntryObject, { withCredentials:true })
    .map((res)=>res.json());
  }

  getOneEntry(theIdOfTheEntry){
    return this.myHttp.get('http://localhost:3000/api/comments/' +theIdOfTheEntry)
    .map((responseThingy)=> responseThingy.json())

  }

  deleteEntry(theIdOfTheEntry){
    return this.myHttp.post(`http://localhost:3000/api/comments/${theIdOfTheEntry}/delete`, {}, { withCredentials: true })
    .map((res)=> res.json())
  }

  updateComment(theIdOfTheEntry, updates) {
    console.log('what: ', updates)
    return this.myHttp.put(`http://localhost:3000/api/comments/${theIdOfTheEntry}`, updates, { withCredentials: true })
    .map(res => res.json());
  }

  checkIfLoggedIn() {
    return this.myHttp.get(`http://localhost:3000/api/loggedin`, { withCredentials: true })
    .map(res => res.json());

  }



}