import { QrCodeHistoryProvider } from './../../providers/qr-code-history/qr-code-history';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string, date: Date, generated: boolean}>;

  constructor(public navCtrl: NavController,
    private QrCodeHistoryProvider: QrCodeHistoryProvider) {

    this.items = this.QrCodeHistoryProvider.getHistory();   
  }

}
