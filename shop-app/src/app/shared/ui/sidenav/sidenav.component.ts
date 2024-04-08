import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '@modules/material/material.module';
import { RouterModule,Router} from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public navigateProducts(){
    this.router.navigate([{ outlets: { sidebar: 'products' } }]);
  }
  constructor(protected router: Router) { }

  ngOnInit(): void {
  }

}
