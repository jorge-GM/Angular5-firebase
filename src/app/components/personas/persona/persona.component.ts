import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//service
import { PersonaService } from '../../../services/persona.service';
import { Persona } from '../../../models/persona';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.personaService.getPersonas();
    this.resetForm();
  }

  onSubmit(personaForm: NgForm)
  {
    this.personaService.insertPersona(personaForm.value);
    this.resetForm(personaForm);
  }

  resetForm(personaForm?: NgForm)
  {
    if(personaForm != null)
      personaForm.reset();
      this.personaService.selectPersona = new Persona();
  }

}
