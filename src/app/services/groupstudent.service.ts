import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GroupstudentService {
  private dataset = [
    {
      id: '1',
      Name: 'Reece Kay',
      phone: '078 8646 0139',
      email: 'ReeceKay@rhyta.com',
    },
    {
      id: '2',
      Name: 'Ellie Palmer',
      phone: '078 6097 0693',
      email: 'ElliePalmer@einrot.com',
    },
    {
      id: '3',
      Name: 'Mia Parker',
      phone: '077 5067 2982',
      email: 'MiaParker@cuvox.de',
    },
    {
      id: '4',
      Name: 'Louis Vincent',
      phone: '079 8748 6044',
      email: 'LouisVincent@teleworm.us',
    },
    {
      id: '5',
      Name: 'Ryan Parsons',
      phone: '078 4877 0816',
      email: 'RyanParsons@armyspy.com',
    },
    {
      id: '',
      Name: 'Hayden Roberts',
      phone: '077 0143 1358',
      email: 'HaydenRoberts@superrito.com',
    },
    {
      id: '',
      Name: 'Lola Lambert',
      phone: '070 5368 6843',
      email: 'LolaLambert@dayrep.com',
    },
  ];
  constructor() {}
}
