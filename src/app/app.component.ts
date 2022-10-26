import { Component, OnInit } from '@angular/core';
import { ServiceService } from './core/service.service';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

export interface Data {
  _id: string;
  email: string;
  civility: string;
  first_name: string;
  last_name: string;
  company: {
    name: string;
    user_type: string;
  };
  user_status: string;
  count_document: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _service: ServiceService,
    public dialog: MatDialog,
  ) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public data: any;
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._service.getDataTable().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res;
      },
    });
  }

  displayedColumns: string[] = [
    'name',
    'user type',
    'entity',
    'status',
    'action',
  ];
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './modal-edit.component.html',
})
export class DialogContentExampleDialog {
  constructor(private fb: FormBuilder,private _service: ServiceService,) {}

  profileForm = this.fb.group({
    _id: [''],
    email: [''],
    civility: [''],
    first_name: [''],
    last_name: [''],

    company: this.fb.group({
      name: [''],
      user_type: [''],
    }),
    user_status: [''],
    count_document: [''],
  });

  onSubmit() {
    this._service.addDataTable(this.profileForm.value).subscribe({
      next:res => {
        console.log(res);
      }
    })
    console.warn(this.profileForm.value);
  }
}
