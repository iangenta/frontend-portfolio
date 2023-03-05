import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-head',
  templateUrl: './profile-head.component.html',
  styleUrls: ['./profile-head.component.css']
})
export class ProfileHeadComponent implements OnInit {

  name ='Ián Leonel'
  lastname ='Genta'
  position = 'Fullstack Developer'
  location='Mar del Plata, Buenos Aires(Argentina)'
  constructor() { }

  ngOnInit() {
  }

}
