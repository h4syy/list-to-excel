import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { MessageService } from 'primeng/api';
import { GroupstudentService } from '../../services/groupstudent.service';
import { Row, Workbook } from 'exceljs';
import { Group } from 'src/app/Common/group';
import { Student } from 'src/app/Common/student';
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
  public index: any

  ngOnInit(): void {
  }

  /**
   * Creates the excel workbook
   */
  public createWB() {
    const workBook = new Workbook();

    this.data.forEach((obj: Group) => {
      const wSheet = workBook.addWorksheet(obj.group);
      wSheet.columns = [
        { width: 6 }, { width: 15 }, { width: 15 }, { width: 20 }
      ];
      wSheet.mergeCells('A1:D1');
      wSheet.getCell('A1').value = 'Group :' + obj.group;
      wSheet.getCell('A1').alignment = { horizontal: 'center' };
      wSheet.addRow(['Id', 'Name', 'Phone', 'Email'])
      obj.studentsList.forEach((student: Student) => {
        let row = wSheet.addRow([student.Id, student.Name, student.Phone, student.Email])
      })

      wSheet.getCell('A1').border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' }
      };

      wSheet.getCell('A2').border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' }
      };
      wSheet.getCell('B2').border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' }
      };
      wSheet.getCell('C2').border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' }
      };
      wSheet.getCell('D2').border = {
        top: { style: 'medium' },
        left: { style: 'medium' },
        bottom: { style: 'medium' },
        right: { style: 'medium' }
      };
      //for last column
      for (let i = 1; i < 5; i++) {
        wSheet.getCell(obj.studentsList.length + 2, i).border = {
          bottom: { style: 'medium' },
        }
      }
      for (let i = 1; i < 5; i++) {
        for (let j = obj.studentsList.length; j > 0; j--) {
          wSheet.getCell(j, i).border = {
            bottom: { style: 'medium' },
          }
        }
      }
      console.log(wSheet.getCell(3, 3));



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
    this.data.forEach((obj) => { obj.studentsList.sort((a, b) => a.Name > b.Name ? 1 : -1); });
    if (this.data.length > 0) {
      this.messageService.add({ severity: 'success', summary: 'Dataset Loaded', detail: 'Press the export button to save it.' });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Empty Workbook', detail: 'You selected an empty dataset.' });
    }
  }

  public exportAll() {
    // Get all datasets
    // Each dataset gets 1 worksheet
    // loop each dataset
    //    make a sheet
    //    add a group with student table in cascading style
  }

}

/**
 * Designing starts here
 */
var borderStyles = {
  top: { style: "thin" },
  left: { style: "thin" },
  bottom: { style: "thin" },
  right: { style: "thin" }
};

