import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  @ViewChild("viewChild") element: ElementRef;
  @ContentChild("child") contentElement: ElementRef;

  myStateValue: string = "";

  _prop: string;

  @Input()
  set prop(nextProp: string) {
    this._prop = nextProp;
    this.log("setter");
  }

  private log(scope: string, ...args: any[]) {
    console.log(
      `scope: [${scope}], _prop: [${this._prop}], myStateValue: [${this.myStateValue}], args: `,
      args
    );
  }

  constructor(private myRootElement: ElementRef) {
    this.log("constructor", myRootElement);
  }

  ngOnInit(): void {
    this.log("init");
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.log("changes");
  }

  ngDoCheck(): void {
    this.log("doCheck");
  }

  ngAfterViewInit(): void {
    this.log(
      "after view init",
      this.myRootElement,
      this.element,
      this.contentElement
    );
  }

  ngAfterViewChecked(): void {
    this.log(
      "after view checked",
      this.myRootElement,
      this.element,
      this.contentElement
    );
  }

  ngAfterContentInit(): void {
    this.log(
      "after content init",
      this.myRootElement,
      this.element,
      this.contentElement
    );
  }

  ngAfterContentChecked(): void {
    this.log(
      "after content checked",
      this.myRootElement,
      this.element,
      this.contentElement
    );
  }

  ngOnDestroy(): void {
    this.log("destory");
  }
}
