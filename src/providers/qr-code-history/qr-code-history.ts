import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the QrCodeHistoryProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QrCodeHistoryProvider {

  private _qrHistory: Array<{title: string, date: Date, generated: boolean}>;

  constructor(public http: HttpClient) {
    this._qrHistory = new  Array<{title: string, date: Date, generated: boolean}>();
    console.log('Hello QrCodeHistoryProvider Provider');
  }

  addToHistory(text: string, isGenerated:boolean){
    this._qrHistory.push({title: text, date: new Date(), generated: isGenerated});
  }

  getHistory(){
    return this._qrHistory;
  }

}
