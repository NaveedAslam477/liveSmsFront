import { Component, OnInit, EventEmitter } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'updatelimit',
  templateUrl: './updatelimit.component.html',
  styleUrls: ['./updatelimit.component.scss']
})
export class UpdatelimitComponent implements OnInit {
  onChangeLimit: EventEmitter<number>=new EventEmitter<number>();

  constructor(public ref: NbDialogRef<UpdatelimitComponent>) { }
limit:number=0
  ngOnInit() {
  }

  close(value){
    this.ref.close(value);
  }

}
