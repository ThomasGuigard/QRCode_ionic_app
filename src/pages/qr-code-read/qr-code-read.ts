
import { QrCodeProvider } from './../../providers/qr-code/qr-code';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QrCodeReadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qr-code-read',
  templateUrl: 'qr-code-read.html',
})
export class QrCodeReadPage {

  decodedData: string = "";
  

  constructor(
    public navCtrl: NavController,
    private qrCodeProvider: QrCodeProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodeReadPage');
  }

  readQrCode(){
    this.qrCodeProvider.scan().then((text) => {
      this.decodedData = text;
    })
  }

  loadQrCode(){

  }

}
