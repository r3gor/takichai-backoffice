import { Validators } from '@angular/forms';
import { IField } from '../../core/interfaces/field.interface';
export const editFields: IField[]= [
  {
    key: 'role',
    label: 'Role',
    type: 'select',
    options: [{value: 'USER', label: 'User'}, {label: 'Admin', value: 'ADMIN'}],
    validators: [Validators.required],
  },
  {
    key: 'name',
    label: 'Name',
    type: 'text',
    validators: [Validators.required, Validators.minLength(4)]
  },
  {
    key: 'email',
    label: 'Email',
    type: 'text',
    disabled: true,
    validators: []
  },
  {
    key: 'description',
    label: 'Description',
    type: 'text',
    validators: [Validators.required, Validators.minLength(2)]
  },
  {
    key: 'publicProfile',
    label: 'Public',
    type: 'radio',
    options: [{label: 'True', value: true}, {label: 'False', value: false}],
    validators: [Validators.required]
  },
  {
    optionalField: true,
    optionalFieldLabel: 'Change password',
    key: 'password',
    label: 'New password',
    type: 'text',
    hint: 'This overides the previous password',
    validators: []
  },
]