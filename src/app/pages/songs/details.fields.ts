import { Validators } from '@angular/forms';
import { IField } from '../../core/interfaces/field.interface';

export const detailsFields: IField[]= [
  {
    key: "songId",
    label: "Song ID",
    type: 'text',
    disabled: true,
  },
  {
    key: 'name',
    label: 'Name',
    type: 'text',
    disabled: true,
  },
  {
    key: 'year',
    label: 'Year',
    type: 'text',
    disabled: true,
  },
  {
    key: 'genre',
    label: 'Genre',
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
    key: 'popularity',
    label: 'Popularity',
    type: 'text',
    disabled: true,
  },
  {
    key: "duration",
    label: "Duration",
    type: 'text',
    disabled: true,
  },
  {
    key: "instrumental",
    label: "Instrumental",
    type: 'text',
    disabled: true,
  },
  {
    key: "mood",
    label: "Mood",
    type: 'text',
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