import { Component, ViewChild } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

import { Line } from './line';
import { ExcelService } from './excel-service';
import { ExcelStyleService } from './excel-style-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    //
    tableData: Line[] = [
        { 
            data: new Date('2018/10/17 08:00'),
            requisicoes: 432,
            usuarios: 312,
            erros: 23
        }, { 
            data: new Date('2018/10/17 09:00'),
            requisicoes: 677,
            usuarios: 546,
            erros: 75
        }, { 
            data: new Date('2018/10/17 10:00'),
            requisicoes: 876,
            usuarios: 756,
            erros: 34
        }, { 
            data: new Date('2018/10/17 11:00'),
            requisicoes: 536,
            usuarios: 453,
            erros: 42
        }
    ]

    @ViewChild('elTable') elTable

    constructor(
        private excelService: ExcelService,
        private excelStyleService: ExcelStyleService
    ) {}

    /* 
     * Exporta usando window.open salvando um HTML
     * É possível estilizar o layout
     * Apresenta uma mensagem de importação na hora de abrir no Excel 
    */
    exportToExcel() {
        let htmlTable = this.getTableAsHTML()
        window.open('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,' + encodeURIComponent(htmlTable))
    }

    /* 
     * Exporta usando o FileSaver salvando um HTML
     * É possível estilizar o layout
     * Apresenta uma mensagem de importação na hora de abrir no Excel 
    */
    exportToExcelWithBlob() {
        let htmlTable = this.getTableAsHTML()

        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8'
        let blob: Blob = new Blob([htmlTable], { type: EXCEL_TYPE })
        FileSaver.saveAs(blob, 'table-with-blob.xlsx');
    }

    /* 
     * Exporta usando o XLSX a partir de um JSON
     * Não é possível estilizar o layout
    */
    exportToExcelWithXLSX() {
        this.excelService.exportAsExcelFile(this.tableData, 'tableData')
    }

    /* 
     * Exporta usando o XLSX a partir de um HTML
     * Não é possível estilizar o layout
    */
    exportToExcelWithXLSX2() {
        this.excelService.exportDataAsExcelFile(this.elTable.nativeElement, 'tableData')
    }

    exportToExcelWithStyleXLSX() {
        let workbook = this.excelService.createWorkbookFromJson(this.tableData)
        var first_sheet_name = workbook.SheetNames[0];
        var address_of_cell = 'B2';
        
        /* Get worksheet */
        var worksheet = workbook.Sheets[first_sheet_name];
        
        /* Find desired cell */
        var desired_cell = worksheet[address_of_cell];
        
        /* Get the value */
        var desired_value = desired_cell.v;
        console.log(desired_value)

        worksheet[address_of_cell].v = 999
        worksheet[address_of_cell].s = { bgcolor: '#cccccc' }

        var cell_ref = XLSX.utils.encode_cell({c:2,r:2});
        var cell: XLSX.CellObject = {
            v: 1000,
            t: 'n',
            s: { bgcolor: '#ff0000' }
        };
        worksheet[cell_ref] = cell
        XLSX.utils.format_cell(cell)


        const workbook2: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = XLSX.write(workbook2, { bookType: 'xlsx', type: 'array' });
        //this.excelService._saveAsExcelFile(excelBuffer, 'excelFileName');


        this.excelStyleService.createStyledExcel(this.tableData)
    }

    getTableAsHTML() {
        let htmlTable = `
            <table>
                <thead>
                    <tr bgcolor="#ccc">
                        <th>Hora</th>
                        <th>Requisições</th>
                        <th>Usuários</th>
                        <th>Erros</th>
                    </tr>
                </thead>
        `
        this.tableData.forEach( line => {
            htmlTable += `
                <tr>
                    <td>${line.data}</td>
                    <td>${line.requisicoes}</td>
                    <td>${line.usuarios}</td>
                    <td>${line.erros}</td>
                </tr>
            `
        })
        htmlTable += '</table>'

        let htmlExcel = `
            <html 
                xmlns:o="urn:schemas-microsoft-com:office:office" 
                xmlns:x="urn:schemas-microsoft-com:office:excel" 
                xmlns="http://www.w3.org/TR/REC-html40">
                <head>
                    <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
                </head>
                <body>${htmlTable}</body></html>`

        return htmlExcel
    }
}
