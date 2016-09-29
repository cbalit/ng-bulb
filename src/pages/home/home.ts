import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

/// <reference types="web-bluetooth-typings" />
import {SERVICE_ID} from '../../common/consts';

import { DevicePage } from '../device/device';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {
  }

  startScanning(){
    navigator.bluetooth.requestDevice({
      filters: [{ services: [SERVICE_ID], name: 'LEDBLE-0101004F' }]
    }).then(device => this.redirectToDevicePage(device));
  }


  redirectToDevicePage(device) {
    this.navCtrl.push(DevicePage, {
      device: device
    });
  }



}
