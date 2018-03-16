import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment} from '../environments/environment';

//components
import { PersonasComponent } from './components/personas/personas.component';
import { PersonasListComponent } from './components/personas/personas-list/personas-list.component';
import { PersonaComponent } from './components/personas/persona/persona.component'

//services
import { PersonaService } from './services/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonasListComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
