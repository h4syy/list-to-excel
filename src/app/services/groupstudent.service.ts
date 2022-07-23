import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroupstudentService {
  private dataset = [
    {
      group: 'L1C1',
      studentsList: [
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
        {
          id: 1,
          fullname: 'ABC',
          phone: '9090909090',
          email: 'fdsbahfj@gmail.com',
        },
      ], // 10 items
    },
    {
      group: 'L1C2',
      studentsList: [
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
        {
          id: 1,
          fullname: 'ASD',
          phone: '123845784948',
          email: 'iisauif@gmail.com',
        },
      ],
    },
    {
      group: 'L1C3',
      studentsList: [
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
        {
          id: 1,
          fullname: 'IUY',
          phone: '128348682399',
          email: 'offh4sy@gmail.com',
        },
      ],
    },
  ];
  getData() {
    return this.dataset;
  }
  constructor() {}
}
