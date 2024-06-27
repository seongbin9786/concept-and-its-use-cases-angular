import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, DoCheck {
  email: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes!:", changes);
  }

  ngDoCheck(): void {
    console.log("email:", this.email)
  }

}
