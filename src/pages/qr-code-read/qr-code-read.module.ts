import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodeReadPage } from './qr-code-read';

@NgModule({
  declarations: [
    QrCodeReadPage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodeReadPage),
  ],
})
export class QrCodeReadPageModule {}
