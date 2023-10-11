import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
})
export class MyComponentComponent implements OnInit {
  message = '';

  constructor(private myService: MyServiceService) {}

  ngOnInit(): void {
    this.message = this.myService.getMessage();
  }
}
