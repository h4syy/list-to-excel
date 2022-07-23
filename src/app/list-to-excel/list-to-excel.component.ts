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
  ) { }

  ngOnInit(): void {

  }
  excelExport() {
    //code given by xlsx
    const EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx'; //own code
    // creating a workbook
    const workBook = XLSX.utils.book_new();
    // const excelBuffer = XLSX.write(workBook, {
    //   bookType: 'xlsx',
    //   type: 'array',
    // });
    let address = 'A1';
    this.data.forEach((obj: any) => {
      // workBook.SheetNames.push(obj.group);
      let worksheet_data: any = obj.studentsList.sort((a: any, b: any) => a.Name > b.Name ? 1 : -1);
      const worksheet: any = XLSX.utils.sheet_add_aoa(workBook.Sheets[obj.group], [["Group: " + obj.group]], { origin: "A1" })
      XLSX.utils.sheet_add_json(worksheet, worksheet_data, { origin: "A3" })
      XLSX.utils.book_append_sheet(workBook, worksheet, obj.group);
      // if (!worksheet[address]) worksheet[address] = {};
      // worksheet[address].t = obj.group;
      worksheet['!cols'] = [
        { wpx: 72 },
        { wpx: 150 },
        { wpx: 150 },
        { wpx: 200 },
      ];
      const merge = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }];
      worksheet['!merges'] = merge;
    });
    XLSX.writeFile(workBook, 'output.xlsx');
    function alphabetically() {
      //       (a: any, b: any)=>{}
      //       if (a.Name> b.Name)
      // {
      //     return 1
      // }
      // else if (a.Name< b.Name)
      // {
      //     return -1
      // }
      // else return 0
    }
    //making a blobData of EXCEL TYPE
    // const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
    // this.filerSaver.save(blobData, 'demofile');
  }

  empty: boolean = true;


  getds1() {
    this.data = this.data1.getDataSet1()
    this.empty = false;
  }
  getds2() {
    this.data = this.data1.getDataSet2()
    this.empty = false;
  }
  getds3() {
    this.data = this.data1.getDataSet3()
  }
  getds4() {
    this.data = this.data1.getDataSet4()
  }
}

