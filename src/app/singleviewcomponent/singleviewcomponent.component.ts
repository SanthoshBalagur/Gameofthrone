import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
// tslint:disable-next-line:import-spacing
import { DataloadService }  from  'src/app/dataload.service';
@Component({
  selector: 'app-singleviewcomponent',
  templateUrl: './singleviewcomponent.component.html',
  styleUrls: ['./singleviewcomponent.component.css']
})
export class SingleviewcomponentComponent implements OnInit {
singleItem: any;


  constructor(private load: DataloadService, private router: Router , private _route: ActivatedRoute, private location: Location) { }

  ngOnInit() {

this._route.params.subscribe(dataitem => {
  const myEntityName = this._route.snapshot.paramMap.get('entityName');
  const myCompId = this._route.snapshot.paramMap.get('compId');

  console.log('This is ' + myEntityName + ' and ' + myCompId);

  this.singleItem = this.load.getSingleItem(myEntityName, myCompId ).subscribe(
    data => {
      this.singleItem = data;
      console.log(this.singleItem);
    } );

 
});

  }

  public getId = (b: string): string => {
    const id  = b.substring(b.lastIndexOf('/') + 1 );
    return  id;
  }

  goBack() {
    this.location.back();
  }


}
