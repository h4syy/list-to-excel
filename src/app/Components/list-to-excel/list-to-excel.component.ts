import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import * as XLSX from 'xlsx';
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
  private createWB() {
    const workBook = new Workbook();
    this.data.forEach((obj: any) => {
      const wSheet = workBook.addWorksheet(obj.group);
      wSheet.addRows(obj.studentsList);   
    })
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
    //   worksheet['!merges'] = [{s: {r: 0, c: 0}, e: {r: 0, c: 3}}];
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

