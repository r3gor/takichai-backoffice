import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IField } from '../../interfaces/field.interface';
import { buildFormGroup } from '../../utils/build-form-group.utils';

@Component({
  selector: 'app-details-dialog',
  templateUrl: './details-dialog.component.html',
  styleUrls: ['./details-dialog.component.scss']
})
export class DetailsDialogComponent implements OnInit {

  form = this.formBuilder.group(buildFormGroup(
    this.data.fields.filter(f => !f.optionalField)
  ));

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {item: any, fields: IField[]},
    protected formBuilder: FormBuilder) {

    this.form.patchValue(data.item);
  }

  ngOnInit(): void {
  }

}
