import { Validators } from '@angular/forms';
import { IField } from '../../core/interfaces/field.interface';

export const detailsFields: IField[]= [
  {
    key: "userId",
    label: "User ID",
    type: 'text',
    disabled: true,
  },
  {
    key: 'role',
    label: 'Role',
    type: 'select',
    options: [{value: 'USER', label: 'User'}, {label: 'Admin', value: 'ADMIN'}],
    disabled: true,
  },
  {
    key: 'name',
    label: 'Name',
    type: 'text',
    disabled: true,
  },
  {
    key: 'email',
    label: 'Email',
    type: 'text',
    disabled: true,
  },
  {
    key: 'description',
    label: 'Description',
    type: 'text',
    disabled: true,
  },
  {
    key: 'publicProfile',
    label: 'Public',
    type: 'radio',
    options: [{label: 'True', value: true}, {label: 'False', value: false}],
    disabled: true,
  },
  {
    key: "createdAt",
    label: "Created At",
    type: 'text',
    disabled: true,
  },
  {
    key: "updatedAt",
    label: "Updated At",
    type: 'text',
    disabled: true,
  },
]