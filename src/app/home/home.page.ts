import { Component } from "@angular/core";
import { ToastController } from "@ionic/angular";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";
import { Base64ToGallery } from "@ionic-native/base64-to-gallery/ngx";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  qrData = "https://bradutegaard.com";
  scannedCode = null;
  elementType: "url" | "canvas" | "img" = "canvas";
  constructor(
    private barcodeScanner: BarcodeScanner,
    private base64ToGallery: Base64ToGallery,
    private toastController: ToastController
  ) {}

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData;
    });
  }
}
