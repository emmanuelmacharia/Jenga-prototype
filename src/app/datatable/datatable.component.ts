import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  hasData = true;
  datas = [{
    batchId: '1234567',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '1234567',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '1234567',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '1234567',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '1234567',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '1234567',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '1234567',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  }
  ];


  constructor() { }

  ngOnInit() {
  }

}
