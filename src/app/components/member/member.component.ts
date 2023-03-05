import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MemberService } from 'src/app/member.service';
import { Member, SearchName } from 'src/app/models';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  postForm!:FormGroup
  getForm!:FormGroup
  telegram:string = ""
  grade:string = ""
  date:string = ""

  // CONSTRUCTOR
  constructor(private fb:FormBuilder, private memberSvc:MemberService) {}

  ngOnInit(): void {
      this.postForm = this.createPostForm()
      this.getForm = this.createGetForm()
  }

  public createPostForm():FormGroup {
    return this.fb.group({
      name:this.fb.control(''),
      telegram:this.fb.control(''),
      grade:this.fb.control('')
    })
  }

  processPostForm() {
    console.info('>>> Processing form...')
    const formValue:Member = this.postForm.value as Member
    this.memberSvc.postMember(formValue)
                  .then((result) => {
                    console.info('>>> Server Response:', result)
                    this.telegram = result.telegram
                    this.grade = result.grade
                    this.date = result.date
                  })
                  .catch((error) => {
                    console.error('Error:', error)
                  })
    this.ngOnInit()
  }

  public createGetForm():FormGroup {
    return this.fb.group({
      name:this.fb.control('')
    })
  }

  processGetForm() {
    console.info('>>> Processing form...')
    const formValue:SearchName = this.getForm.value as SearchName
    this.memberSvc.getMember(formValue.name)
                  .then((result) => {
                    console.info('>>> Server Response:', result)
                    this.telegram = result.telegram
                    this.grade = result.grade
                    this.date = result.date
                  })
                  .catch((error) => {
                    console.error('Error:', error)
                  })
    this.ngOnInit()
  }
}
