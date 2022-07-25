import { Component, OnInit, ViewChild } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import * as XLSX from 'xlsx';
import { MessageService } from 'primeng/api';
import { GroupstudentService } from '../../services/groupstudent.service';
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

    // creating a workbook
    const workBook = XLSX.utils.book_new();
    let address = 'A1';
    this.data.forEach((obj: any) => {
      let worksheet_data: any = obj.studentsList
      const worksheet: any = XLSX.utils.sheet_add_aoa(workBook.Sheets[obj.group], [["Group: " + obj.group]], { origin: "A1" })
      XLSX.utils.sheet_add_json(worksheet, worksheet_data, { origin: "A3" })
      XLSX.utils.book_append_sheet(workBook, worksheet, obj.group);
      worksheet['!cols'] = [
        { wpx: 72 },
        { wpx: 150 },
        { wpx: 150 },
        { wpx: 200 },
      ];
      const merge = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }];
      worksheet['!merges'] = merge;
    });
    this.excelFile = XLSX.write(workBook, {
      bookType: 'xlsx',
      type: 'array',
    });
    //making a blobData of EXCEL TYPE
    if (this.data.length == 0) {
      this.messageService.add({ severity: 'success', summary: 'Dataset Loaded', detail: 'Press the export button to save it.' });
    }
  }


  export() {
    this.createWB()
    const EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx'; //own code
    const blobData = new Blob([this.excelFile], { type: EXCEL_TYPE });
    this.filerSaver.save(blobData, `demofile${EXCEL_EXTENSION}`);
  }

  getDS(index: number) {
    this.data = this.data1.getDataSet(index)
    this.dataset = "Dataset " + index
    this.data.forEach((obj: any) => { obj.studentsList.sort((a: any, b: any) => a.Name > b.Name ? 1 : -1); })
    if (this.data.length > 0) {
      this.messageService.add({ severity: 'success', summary: 'Dataset Loaded', detail: 'Press the export button to save it.' });
    }
    else {
      this.messageService.add({ severity: 'error', summary: 'Empty Workbook', detail: 'You selected an empty dataset.' });
    }
  }
}

