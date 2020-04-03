import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { SmsModel } from "./SmsModel";
@Component({
  selector: 'sendsms',
  templateUrl: './sendsms.component.html',
  styleUrls: ['./sendsms.component.scss']
})

export class SendsmsComponent implements OnInit {

  smsData:SmsModel;
  constructor(public ref:NbDialogRef<SendsmsComponent>) {
    this.smsData=new SmsModel();
   }

  ngOnInit() {
  }

  sendSms(){
    debugger
this.ref.close(this.smsData);
  }

}
