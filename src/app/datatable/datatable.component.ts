import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  hasData = true;
  searchTerm = '';
  searchForm: FormGroup;

  datas = [{
    batchId: '12345678',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '89101234',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '56789012',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '34567890',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '12345678',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '90123456',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  },
  {
    batchId: '78901234',
    fileName: 'myfile.xlsx',
    payplan: 'iou',
    uploadDate: '27/2/2020',
    payees: 8,
    action: 'download'
  }
  ];


  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  searchRecords(searchTerm) {
    // do something here;
    const result = Object.assign({}, this.searchForm.value);
    result.searchTerm = Object.assign({}, result.searchTerm);
    console.log(typeof result.searchTerm.keyWord);
    const resultingSearch = this.datas.filter(term => term.batchId === result.searchTerm.keyWord);
    console.log(resultingSearch);
  }

  createFormGroup() {
    return new FormGroup({
      searchTerm: new FormGroup({
        keyWord: new FormControl()
      })
    });

  }

  // createFormGroup(formBuilder: FormBuilder) {
  //   return formBuilder.group({
  //     searchTerm: formBuilder.group(new SearchTerm())
  //   });
  // }

  // createFormGroup(formBuilder: FormBuilder) {
  //   return formBuilder.group({
  //     personalData: formBuilder.group({
  //       email: 'defaul@email.com',
  //       mobile: '',
  //       country: ''
  //     }),
  //     requestType: '',
  //     text: ''
  //   });
  // }
}
