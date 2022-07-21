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
  dataset = [
    {
      id: '1',
      Name: 'Reece Kay',
      phone: '078 8646 0139',
      email: 'ReeceKay@rhyta.com',
    },
    {
      id: '2',
      Name: 'Ellie Palmer',
      phone: '078 6097 0693',
      email: 'ElliePalmer@einrot.com',
    },
    {
      id: '3',
      Name: 'Mia Parker',
      phone: '077 5067 2982',
      email: 'MiaParker@cuvox.de',
    },
    {
      id: '4',
      Name: 'Louis Vincent',
      phone: '079 8748 6044',
      email: 'LouisVincent@teleworm.us',
    },
    {
      id: '5',
      Name: 'Ryan Parsons',
      phone: '078 4877 0816',
      email: 'RyanParsons@armyspy.com',
    },
    {
      id: '6',
      Name: 'Hayden Roberts',
      phone: '077 0143 1358',
      email: 'HaydenRoberts@superrito.com',
    },
    {
      id: '7',
      Name: 'Lola Lambert',
      phone: '070 5368 6843',
      email: 'LolaLambert@dayrep.com',
    },
  ];
  data: [] = [];
  constructor(
    private data1: GroupstudentService,
    private filerSaver: FileSaverService
  ) {}

  ngOnInit(): void {}
  excelExport() {
    //code given by xlsx
    const EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';

    //own code
    //creating a worksheet
    const worksheet = XLSX.utils.json_to_sheet(this.dataset);
    const workBook = {
      Sheets: { testingSheet: worksheet },
      SheetNames: ['testingSheet'],
    };
    const excelBuffer = XLSX.write(workBook, {
      bookType: 'xlsx',
      type: 'array',
    });
    //making a blobData of EXCEL TYPE
    const blobData = new Blob([excelBuffer], { type: EXCEL_TYPE });
    this.filerSaver.save(blobData, 'demofile');
  }
}
