export class SmsModel{
  smsGateway:string="";
  smsType:string="";
  senderId:string="";
  message:string="";
  constructor(){
    this.senderId="";
    this.message="";
    this.smsGateway="";
    this.smsType="";
  }
}
