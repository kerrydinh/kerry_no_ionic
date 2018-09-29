import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public list: string[] = [];

  constructor(public navCtrl: NavController) {
    this.list.push('Good');
    this.list.push('Bad');
    this.list.push('Ugly');
  }

}
