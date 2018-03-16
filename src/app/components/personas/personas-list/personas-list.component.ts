import { Component, OnInit } from '@angular/core';

//service
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../../models/persona';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  personaList: Persona[];

  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    this.personaService.getPersonas()
    .snapshotChanges()
    .subscribe(item => {
      this.personaList = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x['$key']= element.key;
        this.personaList.push(x as Persona);
      })
    })
  }

}
