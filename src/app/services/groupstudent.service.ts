import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupstudentService {
  json= [
    {
      "firstname": "Reece",
      "lastname": "Kay",
      "phone": "078 8646 0139",
      "email": "ReeceKay@rhyta.com"
    },
{
  "firstname": "Ellie",
  "lastname": "Palmer",
  "phone": "078 6097 0693",
  "email": "ElliePalmer@einrot.com"
},
{
  "firstname": "Mia",
  "lastname": "Parker",
  "phone": "077 5067 2982",
  "email": "MiaParker@cuvox.de"
},
{
  "firstname": "Louis",
  "lastname": "Vincent",
  "phone": "079 8748 6044",
  "email": "LouisVincent@teleworm.us"
},
{
  "firstname": "Ryan",
  "lastname": "Parsons",
  "phone": "078 4877 0816",
  "email": "RyanParsons@armyspy.com"
},
{
  "firstname": "Hayden",
  "lastname": "Roberts",
  "phone": "077 0143 1358",
  "email": "HaydenRoberts@superrito.com"
},
{
  "firstname": "Lola",
  "lastname": "Lambert",
  "phone": "070 5368 6843",
  "email": "LolaLambert@dayrep.com"
}
]
  constructor() { }

}
