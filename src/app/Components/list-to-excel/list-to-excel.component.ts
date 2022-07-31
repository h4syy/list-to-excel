import { Component, OnInit } from '@angular/core';
import { FileSaverService } from 'ngx-filesaver';
import { MessageService } from 'primeng/api';
import { GroupstudentService } from '../../services/groupstudent.service';
import { Workbook } from 'exceljs';
import { Group } from 'src/app/Common/group';
import { Student } from 'src/app/Common/student';
import { Year } from 'src/app/Common/year';
import { Program } from 'src/app/Common/program';
import { utils } from 'xlsx';
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
    // Workbook creation
    const workbook = new Workbook();
    // loop each dataset
    allDatasets.forEach((year: Year) => {
      const worksheet = workbook.addWorksheet(year.name)
      let origin = "A4";
      
      //looping through each program
      year.programs.forEach((program: Program) => {
      const programHeader = worksheet.addRow([program.name]);
      // Row Number initialization
      let rowNumber = 0;

        // iterate through each group
        program.groups?.forEach((group: Group) => {
          if (group.studentList.length > 0) {
            // Get the cell to store group name
            const groupNameCellColumn = utils.decode_cell(origin).c;
            const groupNameCellRow = utils.decode_cell(origin).r - 1;
            const cellName = utils.encode_cell({c: groupNameCellColumn,r: groupNameCellRow})
            const groupNameCell = worksheet.getCell(cellName);

            // Set the group name in the cell
            groupNameCell.value = group.group;

            // // Merge the group name cell
            // worksheet.mergeCells(`${cellName}:${utils.encode_cell({
            //   c:groupNameCellColumn+3,
            //   r:groupNameCellRow
            // })}`)

            // Adding table to the worksheet
            const table = worksheet.addTable({
              name: `${program.programSignature}${group.groupsignature}`,
              ref: origin,
              headerRow: true,
              totalsRow: false,
              style: {
                theme: "TableStyleDark1"
              },
              columns: [{name: 'ID', filterButton: true},
              {name: 'Name', filterButton: true},
              {name: 'Phone', filterButton: true},
              {name: 'Email', filterButton: false},],
              rows: group.studentList.sort((a, b) => (a.name > b.name) ? 1 : -1).map(Object.values),});

            // Incremet row item
            rowNumber++;

            // Get the column and row index of table position
            let columnAddress = utils.decode_cell(origin).c;
            let rowAddress = utils.decode_cell(origin).r;

            // Get column index for each data header
            let idColumn = utils.decode_cell(origin).c + 1;
            let nameColumn = idColumn + 1;
            let phoneColumn = nameColumn + 1;
            let emailColumn = phoneColumn + 1;

            // Set the width of each column header
            worksheet.getColumn(idColumn).width = 5;
            worksheet.getColumn(nameColumn).width = 25;
            worksheet.getColumn(phoneColumn).width = 15;
            worksheet.getColumn(emailColumn).width = 35;

            // Code to execute when row items are 3
            if (rowNumber === 3) {
              // Set column address to the start
              columnAddress = 0;
              // Set the row index to the next row
              rowAddress = worksheet.actualRowCount + 1;
              // Shift the table position for the next table
              origin = utils.encode_cell({
                c: columnAddress,
                r: rowAddress,
              })
            }
            // Code to execute when row items are not 3
            else {
              // Add 5 to the column address making it having a one column offset to the last column of previous table
              columnAddress += 5;
              // Shift the table position for the next table
              origin = utils.encode_cell({c: columnAddress,r: rowAddress,})
            }

            table.commit();
          }
        })

        // Shift the table position for tables of new program
        origin = utils.encode_cell({
          c: 0,
          r: worksheet.actualRowCount + 2
        });

        // Merge the cell containing program name
        worksheet.mergeCells(`${programHeader.getCell(1).address}:${utils.encode_cell({
          c: 13,
          r: utils.decode_cell(programHeader.getCell(1).address).r,
        })}`)
        // Saving the file
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], { type: 'application/octet-stream' });
      this.filerSaver.save(blob, `demofile.xlsx`);
    });
      })
      

    })
  }}