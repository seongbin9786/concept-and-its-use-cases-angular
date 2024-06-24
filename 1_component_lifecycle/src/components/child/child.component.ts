import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChildren, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterContentChecked, AfterViewInit, AfterViewChecked {

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

  constructor(private myRootElement: ElementRef) {
    this.log('constructor');
    console.log('myRootElement:', myRootElement);
  }

  ngOnInit(): void {
    this.log('init');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log('changes');
  }

  ngDoCheck(): void {
    this.log('doCheck')
  }

  ngAfterViewInit(): void {
    this.log('viewInit');
    console.log('ngAfterViewInit:', this.myRootElement);
  }

  ngAfterContentInit(): void {
    this.log('contentInit');
    console.log('ngAfterContentInit:', this.myRootElement);
  }

  ngAfterViewChecked(): void {
    this.log('viewChecked');
  }

  ngAfterContentChecked(): void {
    this.log('contentChecked');
  }

  ngOnDestroy(): void {
    this.log('destory');
  }
}
