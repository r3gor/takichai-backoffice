import { IField } from '../../core/interfaces/field.interface';
export const editFields: IField[]= [
  {
    key: 'role',
    label: 'Role',
    type: 'select',
    options: [{value: 'USER', label: 'User'}, {label: 'Admin', value: 'ADMIN'}],
    validators: [],
  },
  {
    key: 'name',
    label: 'Name',
    type: 'text',
    validators: []
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
    validators: []
  },
  {
    key: 'publicProfile',
    label: 'Public',
    type: 'radio',
    options: [{label: 'True', value: true}, {label: 'False', value: false}],
    validators: []
  },
  {
    key: 'password',
    label: 'New password',
    type: 'text',
    hint: 'This overides the previous password',
    validators: []
  },
]