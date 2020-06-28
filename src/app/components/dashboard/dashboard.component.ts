import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public name: string;
  public designation: string;
  public isDisabled: boolean;
  public password: string;
  
  constructor() { }

  ngOnInit(): void {
    this.name = 'xyz'
  }

  public onDisable(event: any) {
    this.isDisabled = event.target.checked
  }

  public onSubmit(){
    console.log(`Name: ${this.name}, Password: ${this.password || 'N/A'}, Designation: ${this.designation || 'N/A'}`)
  }

}
