
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



/*
  Generated class for the QrCodeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeProvider {

  constructor(public http: HttpClient,
    private barcodeScanner: BarcodeScanner) {}

  scan(): Promise<string>  {
    return new Promise(resolve => {
      this.barcodeScanner.scan().then((qrCodeData) => {
        resolve(qrCodeData.text)
      }, (err) => {
        resolve("Erreur lors de la récupération des données")
      });  
    });
  }

}
