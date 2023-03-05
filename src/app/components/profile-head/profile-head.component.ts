import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-profile-head',
  templateUrl: './profile-head.component.html',
  styleUrls: ['./profile-head.component.css']
})
export class ProfileHeadComponent implements OnInit {

  miPortfolio:any

  constructor(private datosPortfolio:PortfolioService) { }

  ngOnInit():void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
      console.log(data);
      this.miPortfolio=data;
    })
    }

}
