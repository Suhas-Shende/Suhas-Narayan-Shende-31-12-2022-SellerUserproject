import { Component , OnInit, ViewChild,AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})







export class TablesComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumnsseller: string[] = ['id', 'name', 'weight', 'symbol'];
  displayedColumnsuser: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSourceseller = new MatTableDataSource<Periodicseller>(seller_data);
  dataSourceuser = new MatTableDataSource<Periodicuser>(user_data);

  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('paginators') paginators!: MatPaginator;
  @ViewChild('paginatoru') paginatoru!: MatPaginator;
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSourceseller.paginator = this.paginators;
    this.dataSourceuser.paginator = this.paginatoru;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
export interface Periodicseller {
  name: string;
  id: number;
  weight: number;
  symbol: string;
}

export interface Periodicuser {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen1', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
const seller_data: Periodicseller[] = [
  {id: 1, name: 'Hydrogen2', weight: 1.0079, symbol: 'H'},
  {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {id: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {id:10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {id: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {id: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {id: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {id: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {id: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {id:16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {id: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {id: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {id:19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {id: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];


const user_data: Periodicuser[] = [
  {position: 1, name: 'Hydrogen3', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
