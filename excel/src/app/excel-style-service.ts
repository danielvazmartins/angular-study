import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx-style'

@Injectable()
export class ExcelStyleService {
    createStyledExcel(json) {
        /* generate worksheet */
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

        /* generate workbook and add the worksheet */
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        /* save to file */
        XLSX.writeFile(wb, 'SheetJS.xlsx');
    }
}