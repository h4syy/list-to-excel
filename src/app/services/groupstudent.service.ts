import { Injectable } from '@angular/core';
import { Group } from '../Common/group';
import { Program } from '../Common/program';
import { Year } from '../Common/year';
@Injectable({
  providedIn: 'root',
})
export class GroupstudentService {

  dataset1: Group[] = [
    {
      group: 'L1C1',
      groupsignature: 'lonecone',
      studentList: [
        {
          id: 1,
          name: 'Allie R. Noble',
          phone: '213-406-4580',
          email: 'AllieRNoble@jourrapide.com',
        },
        {
          id: 2,
          name: 'Audrey A. Fredericks',
          phone: '859-948-6255',
          email: 'AudreyAFredericks@jourrapide.com',
        },
        {
          id: 3,
          name: 'Javier V. Jackson',
          phone: '618-659-3734',
          email: 'JavierVJackson@armyspy.com',
        },
        {
          id: 4,
          name: 'Gloria V. Tabron',
          phone: '478-812-6082',
          email: 'GloriaVTabron@rhyta.com',
        },
        {
          id: 5,
          name: 'Arlene R. Cooper',
          phone: '312-533-5687',
          email: 'ArleneRCooper@armyspy.com',
        },
        {
          id: 6,
          name: 'Earl J. Roman',
          phone: '801-754-8265',
          email: 'EarlJRoman@teleworm.us',
        },
        {
          id: 7,
          name: 'Mary R. Baltazar',
          phone: '319-483-5677',
          email: 'MaryRBaltazar@teleworm.us',
        },
        {
          id: 8,
          name: 'Larry R. Williams',
          phone: '727-343-5653',
          email: 'LarryRWilliams@armyspy.com',
        },
        {
          id: 9,
          name: 'Carolyn E. Watters',
          phone: '904-579-2974',
          email: 'CarolynEWatters@armyspy.com',
        },
        {
          id: 10,
          name: 'Ralph T. Jones',
          phone: '678-714-2360',
          email: 'RalphTJones@rhyta.com',
        },
      ]
    },
    {
      group: 'L1C2',
      groupsignature: 'lonectwo',
      studentList: [
        {
          id: 1,
          name: 'Fiore Zetticci',
          phone: '0350 7525146',
          email: 'FioreZetticci@teleworm.us',
        },
        {
          id: 2,
          name: 'Fausto Pinto',
          phone: '0341 2702500',
          email: 'FaustoPinto@armyspy.com',
        },
        {
          id: 3,
          name: 'Alvisa Palermo',
          phone: '0355 0973605',
          email: 'AlvisaPalermo@armyspy.com',
        },
        {
          id: 4,
          name: 'Gloria V. Tabron',
          phone: '0385 0669713',
          email: 'GloriaVTabron@rhyta.com',
        },
        {
          id: 5,
          name: 'Mareta Padovesi',
          phone: '0393 3743568',
          email: 'MaretaPadovesi@jourrapide.com',
        },
        {
          id: 6,
          name: 'Filippa Onio',
          phone: '0356 3560203',
          email: 'FilippaOnio@dayrep.com',
        },
      ]
    },
    {
      group: 'L1C3',
      groupsignature: 'lonethree',
      studentList: [
        {
          id: 0,
          name: "Reece Kay",
          phone: "078 8646 0139",
          email: "ReeceKay@rhyta.com"
        },
        {
          id: 0,
          name: "Ellie Palmer",
          phone: "078 6097 0693",
          email: "ElliePalmer@einrot.com"
        },
        {
          id: 0,
          name: "Mia Parker",
          phone: "077 5067 2982",
          email: "MiaParker@cuvox.de"
        },
        {
          id: 0,
          name: "Louis Vincent",
          phone: "079 8748 6044",
          email: "LouisVincent@teleworm.us"
        },
        {
          id: 0,
          name: "Ryan Parsons",
          phone: "078 4877 0816",
          email: "RyanParsons@armyspy.com"
        },
        {
          id: 0,
          name: "Hayden Roberts",
          phone: "077 0143 1358",
          email: "HaydenRoberts@superrito.com"
        },
        {
          id: 0,
          name: "Lola Lambert",
          phone: "070 5368 6843",
          email: "LolaLambert@dayrep.com"
        },
        {
          id: 0,
          name: "Jake Goodwin",
          phone: "077 2306 0131",
          email: "JakeGoodwin@rhyta.com"
        },
        {
          id: 0,
          name: "Maya Faulkner",
          phone: "078 6136 5657",
          email: "MayaFaulkner@fleckens.hu"
        },
        {
          id: 0,
          name: "Harvey Austin",
          phone: "077 5588 2112",
          email: "HarveyAustin@armyspy.com"
        },
        {
          id: 0,
          name: "Harriet Hawkins",
          phone: "077 8954 3532",
          email: "HarrietHawkins@cuvox.de"
        },
        {
          id: 0,
          name: "Cerys Davison",
          phone: "078 1984 6153",
          email: "CerysDavison@jourrapide.com"
        },

        {
          id: 0,
          name: "Melissa Harvey",
          phone: "077 4512 5196",
          email: "MelissaHarvey@jourrapide.com"
        },
        {
          id: 0,
          name: "Logan Davidson",
          phone: "079 4173 9382",
          email: "LoganDavidson@einrot.com"
        },
        {
          id: 0,
          name: "Max Spencer",
          phone: "070 5271 8507",
          email: "MaxSpencer@dayrep.com"
        },
        {
          id: 0,
          name: "Eleanor Harrison",
          phone: "077 0355 0554",
          email: "EleanorHarrison@superrito.com"
        },
        {
          id: 0,
          name: "Ellie Adams",
          phone: "077 2443 3937",
          email: "EllieAdams@rhyta.com"
        },
      ]
    },
    {
      group: 'L1C4',
      groupsignature: 'lonecfour',
      studentList: [
        {
          id: 1,
          name: 'Fiore Zetticci',
          phone: '0350 7525146',
          email: 'FioreZetticci@teleworm.us',
        },
        {
          id: 2,
          name: 'Fausto Pinto',
          phone: '0341 2702500',
          email: 'FaustoPinto@armyspy.com',
        },
        {
          id: 3,
          name: 'Alvisa Palermo',
          phone: '0355 0973605',
          email: 'AlvisaPalermo@armyspy.com',
        },
        {
          id: 4,
          name: 'Gloria V. Tabron',
          phone: '0385 0669713',
          email: 'GloriaVTabron@rhyta.com',
        },
        {
          id: 5,
          name: 'Mareta Padovesi',
          phone: '0393 3743568',
          email: 'MaretaPadovesi@jourrapide.com',
        },
        {
          id: 6,
          name: 'Filippa Onio',
          phone: '0356 3560203',
          email: 'FilippaOnio@dayrep.com',
        },
      ]
    },
    {
      group: 'L1C5',
      groupsignature: 'lonecfive',
      studentList: [
        {
          id: 0,
          name: "Reece Kay",
          phone: "078 8646 0139",
          email: "ReeceKay@rhyta.com"
        },
        {
          id: 0,
          name: "Ellie Palmer",
          phone: "078 6097 0693",
          email: "ElliePalmer@einrot.com"
        },
        {
          id: 0,
          name: "Mia Parker",
          phone: "077 5067 2982",
          email: "MiaParker@cuvox.de"
        },
        {
          id: 0,
          name: "Louis Vincent",
          phone: "079 8748 6044",
          email: "LouisVincent@teleworm.us"
        },
        {
          id: 0,
          name: "Ryan Parsons",
          phone: "078 4877 0816",
          email: "RyanParsons@armyspy.com"
        },
        {
          id: 0,
          name: "Hayden Roberts",
          phone: "077 0143 1358",
          email: "HaydenRoberts@superrito.com"
        },
        {
          id: 0,
          name: "Lola Lambert",
          phone: "070 5368 6843",
          email: "LolaLambert@dayrep.com"
        },
        {
          id: 0,
          name: "Jake Goodwin",
          phone: "077 2306 0131",
          email: "JakeGoodwin@rhyta.com"
        },
        {
          id: 0,
          name: "Maya Faulkner",
          phone: "078 6136 5657",
          email: "MayaFaulkner@fleckens.hu"
        },
        {
          id: 0,
          name: "Harvey Austin",
          phone: "077 5588 2112",
          email: "HarveyAustin@armyspy.com"
        },
        {
          id: 0,
          name: "Harriet Hawkins",
          phone: "077 8954 3532",
          email: "HarrietHawkins@cuvox.de"
        },
        {
          id: 0,
          name: "Cerys Davison",
          phone: "078 1984 6153",
          email: "CerysDavison@jourrapide.com"
        },

        {
          id: 0,
          name: "Melissa Harvey",
          phone: "077 4512 5196",
          email: "MelissaHarvey@jourrapide.com"
        },
        {
          id: 0,
          name: "Logan Davidson",
          phone: "079 4173 9382",
          email: "LoganDavidson@einrot.com"
        },
        {
          id: 0,
          name: "Max Spencer",
          phone: "070 5271 8507",
          email: "MaxSpencer@dayrep.com"
        },
        {
          id: 0,
          name: "Eleanor Harrison",
          phone: "077 0355 0554",
          email: "EleanorHarrison@superrito.com"
        },
        {
          id: 0,
          name: "Ellie Adams",
          phone: "077 2443 3937",
          email: "EllieAdams@rhyta.com"
        },
      ]
    },
  ]

  dataset2: Group[] = []

  dataset3: Group[] = [
    {
      group: 'L1C1',
      groupsignature: 'lonecone',
      studentList: [
        {
          id: 1,
          name: 'Allie R. Noble',
          phone: '213-406-4580',
          email: 'AllieRNoble@jourrapide.com',
        },
        {
          id: 2,
          name: 'Audrey A. Fredericks',
          phone: '859-948-6255',
          email: 'AudreyAFredericks@jourrapide.com',
        },
        {
          id: 3,
          name: 'Javier V. Jackson',
          phone: '618-659-3734',
          email: 'JavierVJackson@armyspy.com',
        },
        {
          id: 4,
          name: 'Gloria V. Tabron',
          phone: '478-812-6082',
          email: 'GloriaVTabron@rhyta.com',
        },
        {
          id: 5,
          name: 'Arlene R. Cooper',
          phone: '312-533-5687',
          email: 'ArleneRCooper@armyspy.com',
        },
        {
          id: 6,
          name: 'Earl J. Roman',
          phone: '801-754-8265',
          email: 'EarlJRoman@teleworm.us',
        },
        {
          id: 7,
          name: 'Mary R. Baltazar',
          phone: '319-483-5677',
          email: 'MaryRBaltazar@teleworm.us',
        },
        {
          id: 8,
          name: 'Larry R. Williams',
          phone: '727-343-5653',
          email: 'LarryRWilliams@armyspy.com',
        },
        {
          id: 9,
          name: 'Carolyn E. Watters',
          phone: '904-579-2974',
          email: 'CarolynEWatters@armyspy.com',
        },
        {
          id: 10,
          name: 'Ralph T. Jones',
          phone: '678-714-2360',
          email: 'RalphTJones@rhyta.com',
        },
      ]
    },
    {
      group: 'L1C2',
      groupsignature: 'lonectwo',
      studentList: []
    },
    {
      group: 'L1C3',
      groupsignature: 'lonecthree',
      studentList: [
        {
          id: 0,
          name: "Reece Kay",
          phone: "078 8646 0139",
          email: "ReeceKay@rhyta.com"
        },
        {
          id: 0,
          name: "Ellie Palmer",
          phone: "078 6097 0693",
          email: "ElliePalmer@einrot.com"
        },
        {
          id: 0,
          name: "Mia Parker",
          phone: "077 5067 2982",
          email: "MiaParker@cuvox.de"
        },
        {
          id: 0,
          name: "Louis Vincent",
          phone: "079 8748 6044",
          email: "LouisVincent@teleworm.us"
        },
        {
          id: 0,
          name: "Ryan Parsons",
          phone: "078 4877 0816",
          email: "RyanParsons@armyspy.com"
        },
        {
          id: 0,
          name: "Hayden Roberts",
          phone: "077 0143 1358",
          email: "HaydenRoberts@superrito.com"
        },
        {
          id: 0,
          name: "Lola Lambert",
          phone: "070 5368 6843",
          email: "LolaLambert@dayrep.com"
        },
        {
          id: 0,
          name: "Jake Goodwin",
          phone: "077 2306 0131",
          email: "JakeGoodwin@rhyta.com"
        },
        {
          id: 0,
          name: "Maya Faulkner",
          phone: "078 6136 5657",
          email: "MayaFaulkner@fleckens.hu"
        },
        {
          id: 0,
          name: "Harvey Austin",
          phone: "077 5588 2112",
          email: "HarveyAustin@armyspy.com"
        },
        {
          id: 0,
          name: "Harriet Hawkins",
          phone: "077 8954 3532",
          email: "HarrietHawkins@cuvox.de"
        },
        {
          id: 0,
          name: "Cerys Davison",
          phone: "078 1984 6153",
          email: "CerysDavison@jourrapide.com"
        },

        {
          id: 0,
          name: "Melissa Harvey",
          phone: "077 4512 5196",
          email: "MelissaHarvey@jourrapide.com"
        },
        {
          id: 0,
          name: "Logan Davidson",
          phone: "079 4173 9382",
          email: "LoganDavidson@einrot.com"
        },
        {
          id: 0,
          name: "Max Spencer",
          phone: "070 5271 8507",
          email: "MaxSpencer@dayrep.com"
        },
        {
          id: 0,
          name: "Eleanor Harrison",
          phone: "077 0355 0554",
          email: "EleanorHarrison@superrito.com"
        },
        {
          id: 0,
          name: "Ellie Adams",
          phone: "077 2443 3937",
          email: "EllieAdams@rhyta.com"
        },
      ]
    }
  ]

  dataset4: Group[] = [
    {
      group: 'L1C1',
      groupsignature: 'lonecone',
      studentList: [
        {
          id: 1,
          name: 'Allie R. Noble',
          phone: '213-406-4580',
          email: 'AllieRNoble@jourrapide.com',
        },
        {
          id: 2,
          name: 'Audrey A. Fredericks',
          phone: '859-948-6255',
          email: 'AudreyAFredericks@jourrapide.com',
        },
        {
          id: 3,
          name: 'Javier V. Jackson',
          phone: '618-659-3734',
          email: 'JavierVJackson@armyspy.com',
        },
        {
          id: 4,
          name: 'Gloria V. Tabron',
          phone: '478-812-6082',
          email: 'GloriaVTabron@rhyta.com',
        },
        {
          id: 5,
          name: 'Arlene R. Cooper',
          phone: '312-533-5687',
          email: 'ArleneRCooper@armyspy.com',
        },
        {
          id: 6,
          name: 'Earl J. Roman',
          phone: '801-754-8265',
          email: 'EarlJRoman@teleworm.us',
        },
        {
          id: 7,
          name: 'Mary R. Baltazar',
          phone: '319-483-5677',
          email: 'MaryRBaltazar@teleworm.us',
        },
        {
          id: 8,
          name: 'Larry R. Williams',
          phone: '727-343-5653',
          email: 'LarryRWilliams@armyspy.com',
        },
        {
          id: 9,
          name: 'Carolyn E. Watters',
          phone: '904-579-2974',
          email: 'CarolynEWatters@armyspy.com',
        },
        {
          id: 10,
          name: 'Ralph T. Jones',
          phone: '678-714-2360',
          email: 'RalphTJones@rhyta.com',
        },
      ]
    },
    {
      group: 'L1C2',
      groupsignature: 'lonectwo',
      studentList: [
        {
          id: 1,
          name: 'Allie R. Noble',
          phone: '213-406-4580',
          email: 'AllieRNoble@jourrapide.com',
        },
        {
          id: 2,
          name: 'Audrey A. Fredericks',
          phone: '859-948-6255',
          email: 'AudreyAFredericks@jourrapide.com',
        },
        {
          id: 3,
          name: 'Javier V. Jackson',
          phone: '618-659-3734',
          email: 'JavierVJackson@armyspy.com',
        },
        {
          id: 4,
          name: 'Gloria V. Tabron',
          phone: '478-812-6082',
          email: 'GloriaVTabron@rhyta.com',
        },
        {
          id: 5,
          name: 'Arlene R. Cooper',
          phone: '312-533-5687',
          email: 'ArleneRCooper@armyspy.com',
        },
        {
          id: 6,
          name: 'Earl J. Roman',
          phone: '801-754-8265',
          email: 'EarlJRoman@teleworm.us',
        },
        {
          id: 7,
          name: 'Mary R. Baltazar',
          phone: '319-483-5677',
          email: 'MaryRBaltazar@teleworm.us',
        },
        {
          id: 8,
          name: 'Larry R. Williams',
          phone: '727-343-5653',
          email: 'LarryRWilliams@armyspy.com',
        },
        {
          id: 9,
          name: 'Carolyn E. Watters',
          phone: '904-579-2974',
          email: 'CarolynEWatters@armyspy.com',
        },
        {
          id: 10,
          name: 'Ralph T. Jones',
          phone: '678-714-2360',
          email: 'RalphTJones@rhyta.com',
        },
      ]
    },
    {
      group: 'L1C3',
      groupsignature: 'lonecthree',
      studentList: [
        {
          id: 0,
          name: "Reece Kay",
          phone: "078 8646 0139",
          email: "ReeceKay@rhyta.com"
        },
        {
          id: 0,
          name: "Ellie Palmer",
          phone: "078 6097 0693",
          email: "ElliePalmer@einrot.com"
        },
        {
          id: 0,
          name: "Mia Parker",
          phone: "077 5067 2982",
          email: "MiaParker@cuvox.de"
        },
        {
          id: 0,
          name: "Louis Vincent",
          phone: "079 8748 6044",
          email: "LouisVincent@teleworm.us"
        },
        {
          id: 0,
          name: "Ryan Parsons",
          phone: "078 4877 0816",
          email: "RyanParsons@armyspy.com"
        },
        {
          id: 0,
          name: "Hayden Roberts",
          phone: "077 0143 1358",
          email: "HaydenRoberts@superrito.com"
        },
        {
          id: 0,
          name: "Lola Lambert",
          phone: "070 5368 6843",
          email: "LolaLambert@dayrep.com"
        },
        {
          id: 0,
          name: "Jake Goodwin",
          phone: "077 2306 0131",
          email: "JakeGoodwin@rhyta.com"
        },
        {
          id: 0,
          name: "Maya Faulkner",
          phone: "078 6136 5657",
          email: "MayaFaulkner@fleckens.hu"
        },
        {
          id: 0,
          name: "Harvey Austin",
          phone: "077 5588 2112",
          email: "HarveyAustin@armyspy.com"
        },
        {
          id: 0,
          name: "Harriet Hawkins",
          phone: "077 8954 3532",
          email: "HarrietHawkins@cuvox.de"
        },
        {
          id: 0,
          name: "Cerys Davison",
          phone: "078 1984 6153",
          email: "CerysDavison@jourrapide.com"
        },

        {
          id: 0,
          name: "Melissa Harvey",
          phone: "077 4512 5196",
          email: "MelissaHarvey@jourrapide.com"
        },
        {
          id: 0,
          name: "Logan Davidson",
          phone: "079 4173 9382",
          email: "LoganDavidson@einrot.com"
        },
        {
          id: 0,
          name: "Max Spencer",
          phone: "070 5271 8507",
          email: "MaxSpencer@dayrep.com"
        },
        {
          id: 0,
          name: "Eleanor Harrison",
          phone: "077 0355 0554",
          email: "EleanorHarrison@superrito.com"
        },
        {
          id: 0,
          name: "Ellie Adams",
          phone: "077 2443 3937",
          email: "EllieAdams@rhyta.com"
        },
      ]
    },
    {
      group: 'L1C4',
      groupsignature: 'lonecfour',
      studentList: [
        {
          id: 0,
          name: "Ryan Parsons",
          phone: "078 4877 0816",
          email: "RyanParsons@armyspy.com"
        },
        {
          id: 0,
          name: "Hayden Roberts",
          phone: "077 0143 1358",
          email: "HaydenRoberts@superrito.com"
        },
        {
          id: 0,
          name: "Lola Lambert",
          phone: "070 5368 6843",
          email: "LolaLambert@dayrep.com"
        },
        {
          id: 0,
          name: "Jake Goodwin",
          phone: "077 2306 0131",
          email: "JakeGoodwin@rhyta.com"
        },
        {
          id: 0,
          name: "Maya Faulkner",
          phone: "078 6136 5657",
          email: "MayaFaulkner@fleckens.hu"
        },
        {
          id: 0,
          name: "Harvey Austin",
          phone: "077 5588 2112",
          email: "HarveyAustin@armyspy.com"
        },
        {
          id: 0,
          name: "Harriet Hawkins",
          phone: "077 8954 3532",
          email: "HarrietHawkins@cuvox.de"
        },
        {
          id: 0,
          name: "Cerys Davison",
          phone: "078 1984 6153",
          email: "CerysDavison@jourrapide.com"
        },

        {
          id: 0,
          name: "Melissa Harvey",
          phone: "077 4512 5196",
          email: "MelissaHarvey@jourrapide.com"
        },
        {
          id: 0,
          name: "Logan Davidson",
          phone: "079 4173 9382",
          email: "LoganDavidson@einrot.com"
        },
        {
          id: 0,
          name: "Max Spencer",
          phone: "070 5271 8507",
          email: "MaxSpencer@dayrep.com"
        },
        {
          id: 0,
          name: "Eleanor Harrison",
          phone: "077 0355 0554",
          email: "EleanorHarrison@superrito.com"
        },
        {
          id: 0,
          name: "Ellie Adams",
          phone: "077 2443 3937",
          email: "EllieAdams@rhyta.com"
        },
      ]
    },
    {
      group: 'L1C5',
      groupsignature: 'lonecfive',
      studentList: [
        {
          id: 1,
          name: 'Allie R. Noble',
          phone: '213-406-4580',
          email: 'AllieRNoble@jourrapide.com',
        },
        {
          id: 2,
          name: 'Audrey A. Fredericks',
          phone: '859-948-6255',
          email: 'AudreyAFredericks@jourrapide.com',
        },
        {
          id: 3,
          name: 'Javier V. Jackson',
          phone: '618-659-3734',
          email: 'JavierVJackson@armyspy.com',
        },
        {
          id: 4,
          name: 'Gloria V. Tabron',
          phone: '478-812-6082',
          email: 'GloriaVTabron@rhyta.com',
        },
        {
          id: 5,
          name: 'Arlene R. Cooper',
          phone: '312-533-5687',
          email: 'ArleneRCooper@armyspy.com',
        },
        {
          id: 6,
          name: 'Earl J. Roman',
          phone: '801-754-8265',
          email: 'EarlJRoman@teleworm.us',
        },
        {
          id: 7,
          name: 'Mary R. Baltazar',
          phone: '319-483-5677',
          email: 'MaryRBaltazar@teleworm.us',
        },
        {
          id: 8,
          name: 'Larry R. Williams',
          phone: '727-343-5653',
          email: 'LarryRWilliams@armyspy.com',
        },
        {
          id: 9,
          name: 'Carolyn E. Watters',
          phone: '904-579-2974',
          email: 'CarolynEWatters@armyspy.com',
        },
        {
          id: 10,
          name: 'Ralph T. Jones',
          phone: '678-714-2360',
          email: 'RalphTJones@rhyta.com',
        },
      ]
    },
    {
      group: 'L1C6',
      groupsignature: 'lonecsix',
      studentList: [
        {
          id: 1,
          name: 'Allie R. Noble',
          phone: '213-406-4580',
          email: 'AllieRNoble@jourrapide.com',
        },
        {
          id: 2,
          name: 'Audrey A. Fredericks',
          phone: '859-948-6255',
          email: 'AudreyAFredericks@jourrapide.com',
        },
        {
          id: 3,
          name: 'Javier V. Jackson',
          phone: '618-659-3734',
          email: 'JavierVJackson@armyspy.com',
        },
        {
          id: 4,
          name: 'Gloria V. Tabron',
          phone: '478-812-6082',
          email: 'GloriaVTabron@rhyta.com',
        },
        {
          id: 5,
          name: 'Arlene R. Cooper',
          phone: '312-533-5687',
          email: 'ArleneRCooper@armyspy.com',
        },
        {
          id: 6,
          name: 'Earl J. Roman',
          phone: '801-754-8265',
          email: 'EarlJRoman@teleworm.us',
        },
        {
          id: 7,
          name: 'Mary R. Baltazar',
          phone: '319-483-5677',
          email: 'MaryRBaltazar@teleworm.us',
        },
        {
          id: 8,
          name: 'Larry R. Williams',
          phone: '727-343-5653',
          email: 'LarryRWilliams@armyspy.com',
        },
        {
          id: 9,
          name: 'Carolyn E. Watters',
          phone: '904-579-2974',
          email: 'CarolynEWatters@armyspy.com',
        },
        {
          id: 10,
          name: 'Ralph T. Jones',
          phone: '678-714-2360',
          email: 'RalphTJones@rhyta.com',
        },
      ]
    },
    {
      group: 'L1C7',
      groupsignature: 'lonecseven',
      studentList: [
        {
          id: 0,
          name: "Reece Kay",
          phone: "078 8646 0139",
          email: "ReeceKay@rhyta.com"
        },
        {
          id: 0,
          name: "Ellie Palmer",
          phone: "078 6097 0693",
          email: "ElliePalmer@einrot.com"
        },
        {
          id: 0,
          name: "Mia Parker",
          phone: "077 5067 2982",
          email: "MiaParker@cuvox.de"
        },
        {
          id: 0,
          name: "Louis Vincent",
          phone: "079 8748 6044",
          email: "LouisVincent@teleworm.us"
        },
        {
          id: 0,
          name: "Ryan Parsons",
          phone: "078 4877 0816",
          email: "RyanParsons@armyspy.com"
        },
        {
          id: 0,
          name: "Hayden Roberts",
          phone: "077 0143 1358",
          email: "HaydenRoberts@superrito.com"
        },
        {
          id: 0,
          name: "Lola Lambert",
          phone: "070 5368 6843",
          email: "LolaLambert@dayrep.com"
        },
        {
          id: 0,
          name: "Jake Goodwin",
          phone: "077 2306 0131",
          email: "JakeGoodwin@rhyta.com"
        },
        {
          id: 0,
          name: "Maya Faulkner",
          phone: "078 6136 5657",
          email: "MayaFaulkner@fleckens.hu"
        },
        {
          id: 0,
          name: "Harvey Austin",
          phone: "077 5588 2112",
          email: "HarveyAustin@armyspy.com"
        },
        {
          id: 0,
          name: "Harriet Hawkins",
          phone: "077 8954 3532",
          email: "HarrietHawkins@cuvox.de"
        },
        {
          id: 0,
          name: "Cerys Davison",
          phone: "078 1984 6153",
          email: "CerysDavison@jourrapide.com"
        },

        {
          id: 0,
          name: "Melissa Harvey",
          phone: "077 4512 5196",
          email: "MelissaHarvey@jourrapide.com"
        },
        {
          id: 0,
          name: "Logan Davidson",
          phone: "079 4173 9382",
          email: "LoganDavidson@einrot.com"
        },
        {
          id: 0,
          name: "Max Spencer",
          phone: "070 5271 8507",
          email: "MaxSpencer@dayrep.com"
        },
        {
          id: 0,
          name: "Eleanor Harrison",
          phone: "077 0355 0554",
          email: "EleanorHarrison@superrito.com"
        },
        {
          id: 0,
          name: "Ellie Adams",
          phone: "077 2443 3937",
          email: "EllieAdams@rhyta.com"
        },
      ]
    },
    {
      group: 'L1C8',
      groupsignature: 'loneeight',
      studentList: [
        {
          id: 0,
          name: "Ryan Parsons",
          phone: "078 4877 0816",
          email: "RyanParsons@armyspy.com"
        },
        {
          id: 0,
          name: "Hayden Roberts",
          phone: "077 0143 1358",
          email: "HaydenRoberts@superrito.com"
        },
        {
          id: 0,
          name: "Lola Lambert",
          phone: "070 5368 6843",
          email: "LolaLambert@dayrep.com"
        },
        {
          id: 0,
          name: "Jake Goodwin",
          phone: "077 2306 0131",
          email: "JakeGoodwin@rhyta.com"
        },
        {
          id: 0,
          name: "Maya Faulkner",
          phone: "078 6136 5657",
          email: "MayaFaulkner@fleckens.hu"
        },
        {
          id: 0,
          name: "Harvey Austin",
          phone: "077 5588 2112",
          email: "HarveyAustin@armyspy.com"
        },
        {
          id: 0,
          name: "Harriet Hawkins",
          phone: "077 8954 3532",
          email: "HarrietHawkins@cuvox.de"
        },
        {
          id: 0,
          name: "Cerys Davison",
          phone: "078 1984 6153",
          email: "CerysDavison@jourrapide.com"
        },

        {
          id: 0,
          name: "Melissa Harvey",
          phone: "077 4512 5196",
          email: "MelissaHarvey@jourrapide.com"
        },
        {
          id: 0,
          name: "Logan Davidson",
          phone: "079 4173 9382",
          email: "LoganDavidson@einrot.com"
        },
        {
          id: 0,
          name: "Max Spencer",
          phone: "070 5271 8507",
          email: "MaxSpencer@dayrep.com"
        },
        {
          id: 0,
          name: "Eleanor Harrison",
          phone: "077 0355 0554",
          email: "EleanorHarrison@superrito.com"
        },
        {
          id: 0,
          name: "Ellie Adams",
          phone: "077 2443 3937",
          email: "EllieAdams@rhyta.com"
        },
      ]
    },

  ]

  getDataSet(index: number) {
    if (index == 1) {
      return this.dataset1;
    }
    else if (index == 2) {
      return this.dataset2;
    }
    else if (index == 3) {
      return this.dataset3;
    }
    else if (index == 4) {
      return this.dataset4;
    }
    else {
      return [];
    }
  }
  itYear1: Program[] = [
    {
      name: "BSc Computing",
      programSignature: "bsccomp",
      groups: this.dataset1
    },
    {
      name: "BSc Networking",
      programSignature: "bscnet",
      groups: this.dataset3
    }
  ]

  itYear2: Program[] = [
    {
      name: "BSc Computing",
      programSignature: "bsccomp",
      groups: this.dataset1
    },
    {
      name: "BSc Networking",
      programSignature: "bscnet",
      groups: this.dataset4
    }
  ]

  itYear3: Program[] = [
    {
      name: "BSc Computing",
      programSignature: "bsccomp",
      groups: this.dataset1
    },
    {
      name: "BSc Networking",
      programSignature: "bscnet",
      groups: this.dataset3
    }
  ]

  bbaYear1: Program[] = [
    {
      name: "BBA Finance",
      programSignature: "bbafin",
      groups: this.dataset1
    },
    {
      name: "BBA International Business",
      programSignature: "bbaib",
      groups: this.dataset2
    }
  ]

  bbaYear2: Program[] = [
    {
      name: "BBA Finance",
      programSignature: "bbafin",
      groups: this.dataset1
    },
    {
      name: "BBA International Business",
      programSignature: "bbaib",
      groups: this.dataset4
    }
  ]

  bbaYear3: Program[] = [
    {
      name: "BBA Finance",
      programSignature: "bbafin",
      groups: this.dataset1
    },
    {
      name: "BBA International Business",
      programSignature: "bbaib",
      groups: this.dataset3
    }
  ]

  allData: Year[] = [
    {
      name: "ITYear1",
      yearSignature: "ITyearone",
      programs: this.itYear1,
    },
    {
      name: "ITYear2",
      yearSignature: "ITyeartwo",
      programs: this.itYear2,
    },
    {
      name: "ITYear3",
      yearSignature: "ITyearthree",
      programs: this.itYear3,
    },
    {
      name: "BBAYear1",
      yearSignature: "bbayearone",
      programs: this.bbaYear1,
    },
    {
      name: "BBAYear2",
      yearSignature: "bbayeartwo",
      programs: this.bbaYear2,
    },
    {
      name: "BBAYear3",
      yearSignature: "bbayearthree",
      programs: this.bbaYear3,
    },
  ]

  public getAllDs(): Year[] {
    return this.allData;
  }

  // IT 1, IT2, iT3, bba1, bba2, bba3
  // Program [] = [{
  //   name: 'BSc Computing',
  //   groups: Group[]
  // }]
}
