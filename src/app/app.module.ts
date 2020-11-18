import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormComposeModule } from './components/form-compose/form-compose.module';
import {MatDialogModule} from '@angular/material/dialog';
import { AddPersonModule } from './add-person/add-person.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormComposeModule,
    MatDialogModule,
    AddPersonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
