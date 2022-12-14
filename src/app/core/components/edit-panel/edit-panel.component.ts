import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IField } from '../../interfaces/field.interface';
import { buildFormGroup } from '../../utils/build-form-group.utils';
@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.scss']
})
export class EditPanelComponent implements OnInit {

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
