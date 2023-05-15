import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pays',
  templateUrl: './pays.component.html',
  styleUrls: ['./pays.component.css']
})

export class PaysComponent implements AfterViewInit, onDestroy {

  sub : Subscriptions;

  @ViewChild('input')
  inputText : ElementRef;

  countries : Array<Country> = [
    {
      code: 'FR',
      libelle: 'France',
    },
    {
      code: 'NC',
      libelle: 'Nouvelle-Caledonie'
    },
    {
      code: 'AU',
      libelle: 'Australie'
    }
  ];

  currentCountries: Array<Country> = [];

  constructor() {}

}

