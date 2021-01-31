import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-setting';
import { NgForm } from '@angular/forms';
import {DataService} from '../data/data.service';
@Component({
  selector: 'app-user-setting-form',
  templateUrl: './user-setting-form.component.html',
  styleUrls: ['./user-setting-form.component.css']
})
export class UserSettingFormComponent implements OnInit {

  originalUserSettings: UserSettings = {
      name: null,
      emailOffers: null,
      interfaceRadios: null,
      subscriptionType: null,
      notes: null,
      password: null,
      testing: null    
  };

  userSettings: UserSettings = {...this.originalUserSettings};
  
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

   onSubmit(form: NgForm){
      console.log('in onSubmit: ', form.valid);
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
       result => console.log('success: ', result),
       error => console.log('error: ', error)
       
      );

  }
}
