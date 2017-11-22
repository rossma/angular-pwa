import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HeroesComponent } from './heroes/heroes.component';
import { OfflineFormsComponent } from './offline-forms/offline-forms.component';
import { AppRoutingModule } from './/app-routing.module';
import { OfflineFormDetailComponent } from './offline-form-detail/offline-form-detail.component';
import { OfflineFormService } from './offline-form.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    OfflineFormsComponent,
    OfflineFormDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    AppRoutingModule
  ],
  providers: [OfflineFormService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
