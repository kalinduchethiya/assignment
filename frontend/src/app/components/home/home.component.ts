import { Component, OnInit } from '@angular/core';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  longt: any;
  lati: any;


  constructor(

    private maps:MapService

  ) { }

  ngOnInit() {


  }

  getData(){

    const first =  this.longt;
    const left = this.lati;

    const mydata = { lo:first, la:left};

    this.maps.callBackend(mydata).subscribe(res=>{

      console.log(res);
    });


  }

}
