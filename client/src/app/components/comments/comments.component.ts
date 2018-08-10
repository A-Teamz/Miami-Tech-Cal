
import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  entries: any = [];

  oneEntry: any = {}

  theNewEntry: any = {};

  theEntryToBeDeleted: any = {};

  public updatedComment: Object = {};
  public title: String;
  public content: String;
  show: any = false;
  constructor(private theService: CommentsService,
              private myRouter: Router) { }


  addNew() {
    this.theService.addNewEntry(this.theNewEntry)
      .toPromise()
      .then(() => {
        this.getEntries();
      })
      .catch( err => console.log('the err in comments: ', err) )
  }

  getEntries() {
    this.theService.getEntries()
      .subscribe((res) => {
      console.log('entries: ', res)
      this.entries = res.reverse();
    })
  }


  // this is comment
  deletePost(oneEntryId) {
    console.log("oneEntryId: ", oneEntryId)
    // oneEntry = this.theEntryToBeDeleted
    this.theService.deleteEntry(oneEntryId)
      .subscribe(
        ObjFromApi => {
          this.getEntries();
        }
      )
  }


  doTheUpdate(oneEntryId, formData) {
    console.log('oneEntryId = = = =  =', oneEntryId)

    const formInfo = formData.form.controls;
    this.title = formInfo.title.value;
    this.content = formInfo.content.value;
    console.log("=============== id: ", this.title, this.content);
    
    this.sendUpdatesToApi(oneEntryId);
  }

  sendUpdatesToApi(oneEntryId) {
    console.log('this.oneEntry.title:', this.title)
    this.updatedComment = { title: this.title, content: this.content};
    console.log("updates:", this.updatedComment)
    this.theService.updateComment(oneEntryId, this.updatedComment)
      .toPromise()
      .then(()=>{
        this.myRouter.navigate(['/'])
      })
      .catch( err => err.json() )
  }

  showEditForm(index) {
    if (this.show === index) {
      this.show = false
    } else {
      this.show = index;
    }

  }

  ngOnInit() {
    this.getEntries();
  }

}


