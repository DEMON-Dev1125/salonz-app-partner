import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.page.html',
  styleUrls: ['./services.page.scss'],
})
export class ServicesPage implements OnInit {
 services_tab: string = "All";
  constructor(private route: Router) { }

  ngOnInit() {
  }

 add_service() {
    this.route.navigate(['./add-service']);
  } 
}
