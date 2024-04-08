import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
constructor(private router: Router) {
  //Debugging the router events
  this.router.events.subscribe(event => {
    console.log(event);
  });
}
  title = 'shop-app';
}
