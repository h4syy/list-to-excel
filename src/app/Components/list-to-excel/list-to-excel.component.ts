import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { MessageService } from 'primeng/api';
import { GroupstudentService } from '../../services/groupstudent.service';
import { Workbook } from 'exceljs';
import { Group } from 'src/app/Common/group';
import { Student } from 'src/app/Common/student';
import { Year } from 'src/app/Common/year';
import { Program } from 'src/app/Common/program';
@Component({
  selector: 'app-list-to-excel',
  templateUrl: './list-to-excel.component.html',
  styleUrls: ['./list-to-excel.component.scss'],
  providers: [MessageService]
})
export class ListToExcelComponent implements OnInit {
  data: Group[] = [];
  dataset: any = "Choose dataset :"
  excelFile: any;

  constructor(
    private data1: GroupstudentService,
    private filerSaver: FileSaverService,
    private messageService: MessageService) { }
  ngOnInit(): void {
  }

  /**
   * Creates the excel workbook
   */
  public createWB() {
    const workBook = new Workbook();

    this.data.forEach((obj: Group) => {
      // Create worksheet for every object in the group
      const wSheet = workBook.addWorksheet(obj.group);
      wSheet.columns = [
        { width: 10 }, { width: 25 }, { width: 25 }, { width: 35 }
      ];
      wSheet.mergeCells('A1:D1');
      wSheet.getCell('A1').value = 'Group :' + obj.group;
      wSheet.getCell('A1').alignment = { horizontal: 'center' };
      wSheet.addRow([`Group: ${obj.group}`])
      obj.studentList.forEach((student: Student) => {
        let row = wSheet.addRow([student.id, student.name, student.phone, student.email])
      })

      /**
       * Designing starts here
       */
      //Border for the top Group cellS
      wSheet.getCell('A1').border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' },
      };

      //Border for each table heading i.e Id , Name, etc..
      for (let i = 1; i < 5; i++) {
        wSheet.getCell(2, i).border = {
          top: { style: 'medium' },
          left: { style: 'medium' },
          bottom: { style: 'medium' },
          right: { style: 'medium' },
        }
      }
      //for last row
      for (let i = 1; i < 5; i++) {
        wSheet.getCell(obj.studentList.length + 2, i).border = {
          bottom: { style: 'medium' },
          left: { style: 'thin' },
          right: { style: 'thin' },
        }
      }

      //Cycling through each data cell to put borders on them
      for (let i = 3; i < obj.studentList.length + 2; i++) {
        for (let j = 1; j < 4; j++) {
          wSheet.getCell(i, j).border = {
            bottom: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
          }
        }
      }

      //Cycling through last column to put medium borders on them
      for (let i = 3; i < obj.studentList.length + 2; i++) {
        wSheet.getCell(i, 4).border = {
          right: { style: 'medium' },
          bottom: { style: 'thin' },
        }
      }

      //For last cell
      wSheet.getCell(obj.studentList.length + 2, 4).border = {
        right: { style: 'medium' },
        bottom: { style: 'medium' },
      }
    })

    workBook.xlsx.writeBuffer().then((data: BlobPart) => {
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx'; //own code
      const blobData = new Blob([data], { type: EXCEL_TYPE });

      this.filerSaver.save(blobData, `demofile${EXCEL_EXTENSION}`);
    });
  }

  /**
   * This function generates excel workbook from the chosen dataset from the frontend.
   */
  export() {
    if (this.data.length == 0) {
      this.messageService.add({ severity: 'error', summary: 'Empty Workbook', detail: 'You selected an empty dataset.' });
    } else {
      this.createWB()
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx'; //own code
      const blobData = new Blob([this.excelFile], { type: EXCEL_TYPE });
      this.filerSaver.save(blobData, `demofile${EXCEL_EXTENSION}`);
    }
  }
  /**Function to get the data */
  getDS(index: number) {
    this.data = this.data1.getDataSet(index);
    this.dataset = "Dataset " + index;
    this.data.forEach((obj) => { obj.studentList.sort((a, b) => a.name > b.name ? 1 : -1); });
    if (this.data.length > 0) {
      this.messageService.add({ severity: 'success', summary: 'Dataset Loaded', detail: 'Press the export button to save it.' });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Empty Workbook', detail: 'You selected an empty dataset.' });
    }
  }

  public exportAll() {
    // Get all datasets
    const allDatasets: Year[] = this.data1.getAllDs()

    const workbook = new Workbook();

    // Each dataset gets 1 worksheet
    // loop each dataset
    allDatasets.forEach((year: Year) => {
      const worksheet = workbook.addWorksheet(year.name)
      let origin = "A4";
      
      //looping through each program
      year.programs.forEach((program: Program) => {

        
      })

    })
    //    make a sheet
    //    add a group with student table in cascading style
  }}