import { Component, OnInit } from '@angular/core';
import { OfflineFormService } from '../offline-form.service';
import { OfflineForm } from '../offline-form';

@Component({
  selector: 'app-offline-forms',
  templateUrl: './offline-forms.component.html',
  styleUrls: ['./offline-forms.component.css']
})
export class OfflineFormsComponent implements OnInit {

  offlineForms: OfflineForm[]

  constructor(private offlineFormService: OfflineFormService) { }

  ngOnInit() {
    this.getForms();
  }

  getForms(): void {
    this.offlineFormService.getForms()
      .subscribe(forms => this.offlineForms = forms);
  }
}
