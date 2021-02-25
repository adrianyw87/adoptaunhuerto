import { ElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public title: string;
  public subtitle: string;
  public mail: string;

  constructor() { 
    this.title = "Adopta un Huerto";
    this.subtitle = "Para unir Huertos y Personas";
    this.mail = "adoptaunhuerto@gmail.com";
  }

  ngOnInit(): void {
  }

}
