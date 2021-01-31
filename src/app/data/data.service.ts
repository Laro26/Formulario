import { Injectable } from '@angular/core';
import { UserSettings } from './user-setting';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  postUserSettingsForm(userSettings:UserSettings): Observable <any>{
  return this.http.post('https://putsreq.com/jrfhy2yF6A04u8GAGe2J',userSettings);
  }
}
