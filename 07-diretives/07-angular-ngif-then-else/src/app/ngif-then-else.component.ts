import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif-then-else',
  templateUrl: './ngif-then-else.component.html'
})
export class NgIfThenElseComponent implements OnInit {
  isValid: boolean = true;
  age: number = 12;
  myThenBlock!: TemplateRef<any>;
  myElseBlock!: TemplateRef<any>;

  @ViewChild('firstThenBlock')
  firstThenBlock!: TemplateRef<any>;
  @ViewChild('secondThenBlock')
  secondThenBlock!: TemplateRef<any>;

  @ViewChild('firstElseBlock')
  firstElseBlock!: TemplateRef<any>;
  @ViewChild('secondElseBlock')
  secondElseBlock!: TemplateRef<any>;

  ngOnInit() {
    this.myThenBlock = this.firstThenBlock;
    this.myElseBlock = this.firstElseBlock;
  }
  changeValue(valid: boolean) {
    this.isValid = valid;
  }
  toggleThenBlock() {
    this.myThenBlock = this.myThenBlock === this.firstThenBlock ? this.secondThenBlock : this.firstThenBlock;
  }
  toggleElseBlock() {
    this.myElseBlock = this.myElseBlock === this.firstElseBlock ? this.secondElseBlock : this.firstElseBlock;
  }
}
