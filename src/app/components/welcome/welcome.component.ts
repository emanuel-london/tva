import { Component, OnInit } from '@angular/core';
import { WelcomeService } from '../../services/welcome.service';
import { WelcomeContent } from '../../services/welcome';

@Component({
  moduleId: module.id,
  selector: 'welcome-component',
  templateUrl: 'welcome.component.html',
  providers: [WelcomeService]})
export class WelcomeComponent implements OnInit {
  welcome: WelcomeContent[];
  constructor (private welcomeService: WelcomeService) {}

  ngOnInit()   :void {


  this.welcomeService.getWelcome().subscribe(welcome => this.welcome = welcome;);}


}
