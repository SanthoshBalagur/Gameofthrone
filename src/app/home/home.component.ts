import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http/';
import { OrderPipe } from 'ngx-order-pipe';

import {  DataloadService } from 'src/app/dataload.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
}
)


export class HomeComponent implements OnInit {
public allData = [];
  public final;
allbooks: any;
allcharacters: any;
allhouses: any;
order: string = 'item.name';
reverse: boolean = false;
categoryValue: string ;
nameValue: string ;



  constructor(private load: DataloadService , private spinnerService: Ng4LoadingSpinnerService , private toastr: ToastrService) {   
  this.load.printToConsole('Got the Service');
  }

  ngOnInit() {
this.spinnerService.show();
this.load.getallbooks().subscribe( data => {

  setTimeout(() => {
    this.allbooks = data;

    this.allData.push(this.allbooks);
    this.final = [].concat(...this.allData);
    this.spinnerService.hide();
  }, 2000);



});
this.load.getallcharacters().subscribe(characters => {

  setTimeout(() => {
    this.allcharacters = characters;
    console.log(this.allcharacters);
    this.allData.push(this.allcharacters);
    this.final = [].concat(...this.allData);
    console.log(this.final);
    this.spinnerService.hide();
    }, 2000);

  });
this.load.getallhouses().subscribe(houses => {
  setTimeout(() => {
    this.allhouses = houses;
    console.log(this.allhouses);
    this.allData.push(this.allhouses);
    this.final = [ ].concat(...this.allData);
    console.log(this.final);
    this.spinnerService.hide();
  }, 2000);

  });
  }
  public getId = (b: string): string => {
   const id  = b.substring(b.lastIndexOf('/') + 1 );
   return  id;

  }
  
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
      this.showSuccess(this.reverse);
    }

    this.order = value;
  }
  showSuccess(value: boolean) {
    if (value  === true) {
      this.toastr.success('In a descending way !', 'Data Sorted !');
    } else {
      this.toastr.success('In a Ascending way!', 'Data Sorted !');
    }
  }
}
