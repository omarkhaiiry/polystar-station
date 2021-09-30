import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css'],
})
export class PlaceComponent implements OnInit {
  constructor() {}

  Places: any[] = [
    {
      name: 'Stockholm',
      summary:
        "Sweden's capital, comprising 14 islands whose sites include an old town, palaces, museums & shops",
      link: 'https://cutt.ly/rETv1UD',
    },
    {
      name: 'Gothenburg',
      summary:
        'Swedish City with canal boat rides, the cafe-lined boulevard of Avenyn & Liseberg amusement park',
      link: 'https://cutt.ly/UETvCUi',
    },
    {
      name: 'Malmo',
      summary:
        'Swedish city known for the Öresund Bridge, Malmö Castle & cobblestone squares like Lilla Torg',
      link: 'https://cutt.ly/zETbtwi',
    },
    {
      name: 'Uppsala',
      summary:
        'Swedish city known for Uppsala Cathedral, Uppsala University & Augsburg Art Cabinet',
      link: 'https://cutt.ly/yETbPGy',
    },
    {
      name: 'Visby',
      summary:
        'Swedish town on the island of Gotland, known for medieval wall & Gotlands Museum, plus Vikingabyn',
      link: 'https://cutt.ly/hETb0Hz',
    },
    {
      name: 'Kiruna',
      summary:
        'Swedish town in remote Lapland, known for the LKAB iron ore mine, Kiruna Church & Abisko Park',
      link: 'https://cutt.ly/FETb71J',
    },
    {
      name: 'Gotland',
      summary:
        "Swedish island province encompassing Fårö & Gotska Sandön islands & Visby town's medieval churches.",
      link: 'https://cutt.ly/7ETnyUH',
    },
    {
      name: 'Helsingborg',
      summary:
        'Swedish city with the Kärnan tower, neo-Gothic Town Hall & Sofiero Castle’s rhododendron gardens',
      link: 'https://cutt.ly/NETnEuV',
    },
    {
      name: 'Lund',
      summary:
        'Swedish village known for Abisko National Park & as an observation point for the Northern Lights',
      link: 'https://cutt.ly/JETnXvx',
    },
    {
      name: 'Abisko',
      summary:
        'Swedish City with canal boat rides, the cafe-lined boulevard of Avenyn & Liseberg amusement park',
      link: 'https://cutt.ly/UETvCUi',
    },
    {
      name: 'Malmö Municipality',
      summary:
        'Swedish municipality with Malmö city, known for grand Malmöhus Castle & Lilla Torg square',
      link: 'https://cutt.ly/CETn4NH',
    },
    {
      name: 'Luleå',
      summary:
        'Northern Swedish coastal city with Gammelstad Church Town, Bay of Bothnia archipelago & museums',
      link: 'https://cutt.ly/PETms8r',
    },
  ];

  ngOnInit(): void {}
}
