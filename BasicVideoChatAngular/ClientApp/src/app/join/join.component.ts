import { Directive, ViewContainerRef, Component, ElementRef, AfterViewInit, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import config from '../../config';
import { StateService } from '../stateService';

@Component({
  selector: 'app-join',
  templateUrl: '/join.component.html',
  styleUrls: ['/join.component.css']
})
export class JoinComponent {
  joinRoomForm;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private stateService: StateService, private router: Router) {
    this.joinRoomForm = this.formBuilder.group({
      roomName: ''
    });
  }

  onSubmit(roomData) {
    let get_session_url = config.SAMPLE_SERVER_BASE_URL + '/session/getSession'
    this.http.post(get_session_url, roomData).subscribe(
      (res) => {
        this.stateService.token$ = res['token'];
        this.stateService.sessionId$ = res['sessionId'];
        this.stateService.apiKey$ = res['apiKey'];
        this.router.navigate(['/video'])

      }
    )
  }
}
