import { Component } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  id = 0;
  title = 'application-frontend';
  ngOnInit(): void {
    $("h1").html("this is a test");
  }
}
