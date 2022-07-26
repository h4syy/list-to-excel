import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { MessageService } from 'primeng/api';
import { GroupstudentService } from '../../services/groupstudent.service';
import { Workbook } from 'exceljs';
@Component({

  selector: 'app-list-to-excel',
  templateUrl: './list-to-excel.component.html',
  styleUrls: ['./list-to-excel.component.scss'],
  providers: [MessageService]
})
export class ListToExcelComponent implements OnInit {
  data: any[] = [];
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
    this.data.forEach((obj: any) => {
      const wSheet = workBook.addWorksheet(obj.group);
      wSheet.columns = [
        { width: 6 }, { width: 15 }, { width: 15 }, { width: 20 }
      ];
      wSheet.mergeCells('A1:D1');
      wSheet.getCell('A1').value = 'Group :' + obj.group;
      wSheet.getCell('A1').alignment = { horizontal: 'center' };
      wSheet.addRow(['Id', 'Name', 'Phone', 'Email'])
      obj.studentsList.forEach((student: any) => {
        wSheet.addRow([student.Id, student.Name, student.Phone, student.Email])
      })
    })
    workBook.xlsx.writeBuffer().then((data: BlobPart) => {
      const EXCEL_TYPE =
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
      const EXCEL_EXTENSION = '.xlsx'; //own code
      const blobData = new Blob([data], { type: EXCEL_TYPE });

      this.filerSaver.save(blobData, `demofile${EXCEL_EXTENSION}`);
    });
    // // creating a workbook
    // const workBook = new Workbook();
    // let address = 'A1';
    // this.data.forEach((obj: any) => {
    //   const worksheet: any = XLSX.utils.sheet_add_aoa(workBook.Sheets[obj.group], [["Group: " + obj.group]], { origin: address })
    //   XLSX.utils.sheet_add_json(worksheet, obj.studentsList, { origin: "A3" })
    //   XLSX.utils.book_append_sheet(workBook, worksheet, obj.group);
    //   worksheet['!cols'] = [
    //     { wpx: 72 },
    //     { wpx: 150 },
    //     { wpx: 150 },
    //     { wpx: 200 },
    //   ];
    //   worksheet['!merges'] = [{s: {r: 0, c: 0}, e: {r: 0,2 c: 3}}];
    // });
    // this.excelFile = XLSX.write(workBook, {
    //   bookType: 'xlsx',
    //   type: 'array',
    // });
    //making a blobData of EXCEL TYPE

  }


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

  getDS(index: number) {
    this.data = this.data1.getDataSet(index);
    this.dataset = "Dataset " + index;
    this.data.forEach((obj: any) => { obj.studentsList.sort((a: any, b: any) => a.Name > b.Name ? 1 : -1); });
    if (this.data.length > 0) {
      this.messageService.add({ severity: 'success', summary: 'Dataset Loaded', detail: 'Press the export button to save it.' });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Empty Workbook', detail: 'You selected an empty dataset.' });
    }
  }
}

