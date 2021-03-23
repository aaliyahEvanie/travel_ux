import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import {Platform} from "@ionic/angular";
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-folder',
  templateUrl: '../html/home.page.html',
  styleUrls: ['../scss/home.page.scss'],
})
export class FolderPage implements OnInit {
  public location: string;
  public type: string;
  public quantity: number;
  public quanitiveString: string;
  map: Leaflet.Map;
  public cards = [];


  constructor(private activatedRoute: ActivatedRoute, public platform: Platform, ) { }

  ngOnInit() {
    this.location = "Kampsbaai";
    this.type = "Akkomodasie";
    this.quantity = 68;
    this.quanitiveString = this.quantity + " lekke plekke om te bly";
    
    fetch("../../assets/localData.json").then(res=>res.json()).then(json=>{
      this.cards = json.hotelData
    });
  }

  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([-33.950000763,18.383333206], 12);

  Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

  }

  /** Remove map when we have multiple map object */
  ngOnDestroy() {
    this.map.remove();
  }

  
}


