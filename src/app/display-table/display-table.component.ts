import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  block :string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',block:'s'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', block:'s'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' , block:'s'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' , block:'p'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B' , block:'p'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' , block:'p'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , block:'p'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , block:'s'},
  {position: 7, name: 'Nitrogen', weight: 14.0107, symbol: 'N' , block:'p'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' , block:'p'},
];


@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit  {
  displayedColumns: string[] = ['name', 'position', 'weight', 'symbol','block'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild( MatSort ,{static: true}) sort :MatSort;
 
  constructor() { }

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  
  

  
}
