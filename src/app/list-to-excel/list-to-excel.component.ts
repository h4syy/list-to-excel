import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { GroupstudentService } from '../services/groupstudent.service';
@Component({
  selector: 'app-list-to-excel',
  templateUrl: './list-to-excel.component.html',
  styleUrls: ['./list-to-excel.component.scss'],
})
export class ListToExcelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  excelExport() {
    //code given by xlsx
    const EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';

    //own code
    //creating a worksheet
    const worksheet = XLSX.utils.json_to_sheet(this.json);
  }
}
