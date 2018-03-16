import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { Persona } from '../models/persona'
@Injectable()
export class PersonaService {

  personaList: AngularFireList<any>;
  selectPersona: Persona = new Persona();
  
  constructor(private firebase: AngularFireDatabase) { }

  getPersonas()
  {
    return this.personaList = this.firebase.list('personas');
  }

  insertPersona(persona: Persona)
  {
    this.personaList.push({
      nombre: persona.nombre,
      email: persona.email,
      edad: persona.edad,
      contraseña: persona.password,
      direccion: persona.direccion
    });
  }

  updatePersona(persona: Persona)
  {
    this.personaList.update(persona.$key, {
      nombre: persona.nombre,
      email: persona.email,
      edad: persona.edad,
      contraseña: persona.password,
      direccion: persona.direccion
    })
  }

  deletePersona($key: string)
  {
    this.personaList.remove($key);
  }
}
