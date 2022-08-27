import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { IField } from '../../interfaces/field.interface';
import { buildFormGroup } from '../../utils/build-form-group.utils';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {

  @Input() form!: FormGroup;
  @Input() set fields(fields: IField[]) {
    if (fields) {
      this._fields = fields;
      this.controls = this.formBuilder.group(buildFormGroup(fields)).controls;
    }
  }

  controls!: Record<string, AbstractControl>;
  _fields!: IField[];
  
  constructor(
    protected formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  handleOptionalInput(key: string, edit: boolean) {
    if(!edit) this.form.removeControl(key);
    else this.form.addControl(key, this.controls[key]);
  }

  existControl(key: string) {
    return key in this.form.controls;
  }

}
