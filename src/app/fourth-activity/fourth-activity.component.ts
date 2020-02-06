import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Item } from '~/app/item/item';

@Component({
  selector: 'ns-fourth-activity',
  templateUrl: './fourth-activity.component.html',
  styleUrls: ['./fourth-activity.component.css']
})
export class FourthActivityComponent implements OnInit {

  @Output() submit = new EventEmitter();
  @Input() name1:string;
  @Input() role1:string;
  // public name: string;
  // public role:string;
  public goallabel:string = "Goal Score";
  public goal = 0;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    const details = {
      name: this.name1,
      role: this.role1,
      goallabel: this.goallabel,
      goal:this.goal,
    };
    this.submit.emit(details);
    this.name1 = this.role1 = null;
  }

}
