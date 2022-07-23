import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import * as XLSX from 'xlsx';
import { GroupstudentService } from '../services/groupstudent.service';
@Component({
  selector: 'app-list-to-excel',
  templateUrl: './list-to-excel.component.html',
  styleUrls: ['./list-to-excel.component.scss'],
})
export class ListToExcelComponent implements OnInit {
  data: any[] = [];
  constructor(
    private data1: GroupstudentService,
    private filerSaver: FileSaverService
  ) {}

  ngOnInit(): void {
    this.data = this.data1.getData();
  }
  excelExport() {
    //code given by xlsx
    const EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx'; //own code
    //creating a worksheet
    const worksheet = XLSX.utils.json_to_sheet(this.data);
    const workBook = XLSX.utils.book_new();
    const excelBuffer = XLSX.write(workBook, {
      bookType: 'xlsx',
      type: 'array',
    });

    this.data.forEach((obj: any) => {
      workBook.SheetNames.push(obj.group);
      XLSX.utils.book_append_sheet(workBook, worksheet, obj.group);
      console.log(workBook.SheetNames);
    });

    //making a blobData of EXCEL TYPE
    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
    this.filerSaver.save(blobData, 'demofile');
  }
}
