import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { OfflineForm } from './offline-form'
import { OFFLINE_FORMS } from './mock-forms'
import { MessageService } from './message.service';

@Injectable()
export class OfflineFormService {

  offlineForms: OfflineForm[];

  constructor(private messageService: MessageService) {}

  getForms(): Observable<OfflineForm[]> {
    if (this.offlineForms == null) {
      let syncOfflineData = localStorage.getItem('syncOfflineData') || 'false';
      console.log('syncOfflineData:', syncOfflineData);
      if (navigator.onLine && !Boolean(syncOfflineData)){
        console.log('[getForms] - User is online')
        // TODO replace this with service call
        this.setForms(OFFLINE_FORMS);
      } else {
        console.log('[getForms] - User is offline')
        this.setForms(JSON.parse(localStorage.getItem('offlineForms')))
        localStorage.removeItem('syncOfflineData');
      }
    }
    return of(this.offlineForms.sort(function (a, b) {
      var nameA = a.name.toUpperCase()
      var nameB = b.name.toUpperCase()
      if (nameA < nameB) {
        return -1
      }
      if (nameA > nameB) {
        return 1
      }

      return 0
    }));
  }

  setForms(offlineForms: OfflineForm[]) {
    this.offlineForms = offlineForms;
    localStorage.setItem('offlineForms', JSON.stringify(offlineForms));
  }

  getForm(id: number): Observable<OfflineForm> {
    console.log('getting form:', id);
    return this.getForms().map(forms => {
      return forms.find(offlineForm => offlineForm.id === id);
    });
  }

  saveForm(offlineForm: OfflineForm) {
    this.getForms().subscribe(currentOfflineForms => {
      console.log('this.offlineForm.id:', offlineForm.id);
      console.log('current forms length:', currentOfflineForms.length)
      let newOfflineForms = currentOfflineForms.filter(item => item.id !== offlineForm.id);
      console.log('newOfflineForms length:', newOfflineForms.length);
      newOfflineForms.push(offlineForm);
      this.setForms(newOfflineForms);

      // TODO ... just a placeholder for now to determine whether or not forms have been edited while offline.
      if (navigator.onLine) {
        localStorage.setItem('syncOfflineData', String(true));
      }
      this.messageService.add(`Form:[${offlineForm.id}] saved`);
    });
  }
}
