import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, AfterViewInit } from '@angular/core';
import { TabulatorFull as Tabulator } from 'tabulator-tables';
import { TabulatorConfirmationService } from './tabulator-confirmation.service';

@Component({
  selector: 'app-tabulator-confirmation',
  templateUrl: './tabulator-confirmation.component.html',
  styleUrls: ['./tabulator-confirmation.component.scss']
})
export class TabulatorConfirmationComponent implements OnInit, AfterViewInit {
  @Input() tableData: any[] = [];
  @Input() columnNames: any[] = [];
  @Input() height: string = '311px';



  Table: Tabulator | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    // this.drawTable();
  }

  constructor(private tabulatorService: TabulatorConfirmationService) { }

  ngAfterViewInit(): void {
    this.Table = new Tabulator("#table-wrapper", {
      columns: this.columnNames,
      data: this.tableData,
      
    });
    this.Table.redraw(true);
  }

  ngOnInit(): void {
    this.tableData = [{
      id: 1,
      name: "Oli Bob",
      age: "10"
    },
    {
      id: 2,
      name: "Mary May",
      age: "1"
    },
    {
      id: 3,
      name: "Christine Lobowski",
      age: "2"
    },
    {
      id: 4,
      name: "Brendon Philips",
      age: "20"
    }
    ];

    this.columnNames = [{
      title: "Name",
      field: "name",
      editor: "input",
      width: 150,
      titleFormatter: (cell: any, formatterParams: any, onRendered: any) => this.customHeaderFormatter(cell, formatterParams, onRendered),
      cellEditCancelled: (cell: any) => {
        console.log 
        //cell - cell component
        alert("Are you sure you want to stop editing")
      },
      cellEdited:function(cell: any){
        alert("are you sure you want to cancel edit?")
        //cell - cell component
        },

    },
    {
      title: "Age",
      field: "age",
      width: 70,
      align: "center",
      formatter: "plaintext",
      editor: "number",
      // titleFormatter: () => this.customHeaderFormatter,
    }
    ]
  }

 

  
    
   customHeaderFormatter(cell: any, formatterParams: any, onRendered: any) {
    const titleElement = document.createElement("div");
    titleElement.style.padding = "4px"
    titleElement.style.position= "absolute";
    titleElement.style.width='100%';
    titleElement.style.background='transparent'; // CHANGE THIS TO TRANSPARENT
    titleElement.style.height = "40px"
    titleElement.style.zIndex = "1"
    titleElement.innerHTML = cell.getValue();
    titleElement.onclick = (e) => this.customColumnHeaderClicked(e, cell);
    return titleElement; 
  }

  customColumnHeaderClicked(e: any, cell: any) {
    // The following two lines will block the default sort event from being triggered
    if(!confirm('Are you sure you want to sort?')) {
      e.stopPropagation();
      e.preventDefault();
      // return;?
    }
  
    // My header click event handler needed the column reference object normally passed in from Tabulator (not shown in the provided sample).  
    // To fix this, I needed to lookup the column component from information that I did have
    const colRef = this.Table?.getColumns().find( e => e.getDefinition().title === cell.getValue());
    this.headerClickHandler(e, colRef);
  }

  headerClickHandler(e: any, column: any) {
    console.log(this.Table?.getSorters(), column.getField());

    const currentActiveSorters = this.Table?.getSorters();
    if(currentActiveSorters) {

    }
    // if(this.Table?.getSorters()) {
    //   this
    // }
    // if()
    // this.Table?.setSort([{column: column.getField(), dir:"asc"}])
  }
}
