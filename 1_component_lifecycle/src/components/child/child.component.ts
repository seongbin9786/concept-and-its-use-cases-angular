import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {

  myStateValue: string = '';

  _prop: string;

  @Input()
  set prop(nextProp: string) {
    this._prop = nextProp;
    this.log('setter');
  }

  private log(scope: string) {
    console.log(`scope: [${scope}], _prop: [${this._prop}], myStateValue: [${this.myStateValue}]`);
  }

  constructor() {
    this.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('changes');
  }

  ngOnInit(): void {
    this.log('init');
  }

  ngOnDestroy(): void {
    this.log('destory');
  }
}
