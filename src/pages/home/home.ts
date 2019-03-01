import { QrCodeHistoryProvider } from './../../providers/qr-code-history/qr-code-history';
import { SocialSharing } from '@ionic-native/social-sharing';

import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('generatedQrCode') generatedQrCode: QRCodeComponent;
  encodeData : string;
  encodedData: string = null;
  inputNotEmpty: boolean = false;

  constructor(public navCtrl: NavController,
    private socialSharing: SocialSharing,
    private qrCodeHistoryProvider: QrCodeHistoryProvider) {

  }

  generateQrCode(){    
    if(this.encodeData != ""){
      this.encodedData = this.encodeData;
      this.inputNotEmpty = true
      this.qrCodeHistoryProvider.addToHistory(this.encodeData, true);    
    } else if (this.inputNotEmpty) {
      this.inputNotEmpty = false;
    }
  }

  shareQrCode(){
    let b64QrCode = this.generatedQrCode.el.nativeElement.children[1].src;
    this.socialSharing.share(null,null,b64QrCode,null);
  }

}
