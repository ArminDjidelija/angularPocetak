import { Component } from '@angular/core';
import {MojConfig} from "../moj-config";
import {HttpClient} from "@angular/common/http";
import {ProizvodiGetallResponse} from "./proizvodi-getall-response";

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent {
  constructor(public httpClient:HttpClient) {
  }
  ngOnInit(){
    this.getAllProizvodi();
  }
  proizvodi:ProizvodiGetallResponse[]=[];

  getAllProizvodi() {
    let url=MojConfig.adresa_local+'proizvod-pretraga';

    this.httpClient.get(url).
    subscribe((x:any)=>{
      this.proizvodi=x;
    })
  }
}
