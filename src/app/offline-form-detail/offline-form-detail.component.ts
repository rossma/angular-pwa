import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { OfflineForm } from '../offline-form'
import { OfflineFormService } from '../offline-form.service'

@Component({
  selector: 'app-offline-form-detail',
  templateUrl: './offline-form-detail.component.html',
  styleUrls: ['./offline-form-detail.component.css']
})
export class OfflineFormDetailComponent implements OnInit {

  @Input() offlineForm: OfflineForm;

  swlItems = ['AB', 'CD2'];

  statuses = [
    { value: 1, text: 'Ok' },
    { value: 2, text: 'Err' }
  ];

  constructor(
    private route: ActivatedRoute,
    private offlineFormService: OfflineFormService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOfflineForm();
  }

  getOfflineForm(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.offlineFormService.getForm(id)
      .subscribe(offlineForm => this.offlineForm = offlineForm);
  }

  goBack(): void {
    this.location.back();
  }

  saveForm() {
    console.log('saving form:', this.offlineForm);
    this.offlineFormService.saveForm(this.offlineForm);
  }

  onStatusChange(value, item) {
    item.status = parseInt(value);
  }

  onSwlAChange(value, item) {
    item.swlA = value;
  }
}
