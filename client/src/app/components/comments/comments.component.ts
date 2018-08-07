
import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  entries:Array<any>;

  theNewEntry: any = {};

  theEntryToBeDeleted: any = {};

  constructor(private theService: CommentsService,
              private myRouter: Router) { }


  addNew() {
    this.theService.addNewEntry(this.theNewEntry)
      .toPromise()
      .then(() => {
        this.myRouter.navigate(['/']);
      } )
      .catch( err => console.log('the err in comments: ', err) )
  }

  getEntries(){
    this.theService.getEntries()
      .subscribe((res) => {
      console.log('entries: ', res)
      this.entries = res.reverse();
    })
  }

  deletePost(oneEntry) {
    oneEntry = this.theEntryToBeDeleted
    this.theService.deleteEntry(this.theEntryToBeDeleted._id)
      .subscribe(
        ObjFromApi => {
          this.entries = ObjFromApi;
          this.myRouter.navigate(['/'])
        }
      )
  }

//   updatePost(theId, dataToSend) {
//     const formInfo = dataToSend.form.controls;
//     this.newsTitle = formInfo.title.value;
//     this.newsDesc = formInfo.description.value;
//     this.sendUpdatesToApi(theId)  
// }


  ngOnInit() {
    this.getEntries();
  }

}


