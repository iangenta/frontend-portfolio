import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-licenses-and-certifications',
  templateUrl: './licenses-and-certifications.component.html',
  styleUrls: ['./licenses-and-certifications.component.css']
})
export class LicensesAndCertificationsComponent implements OnInit {


  certificationsList:any;
    constructor(private datosPorfolio:PortfolioService){
  
    }
    ngOnInit(): void {
      this.datosPorfolio.obtenerDatos().subscribe(data=>{
        this.certificationsList=data.certifications;
      })
    }
  
  }


