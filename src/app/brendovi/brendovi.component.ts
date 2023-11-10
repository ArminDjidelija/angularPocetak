import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProizvodiGetallResponse} from "../proizvodi/proizvodi-getall-response";
import {MojConfig} from "../moj-config";
import {BrendoviGetAllResponse, BrendoviPostRequest} from "./brendovi-get-all-response";
import {FormBuilder, FormGroup, Validator} from '@angular/forms'

import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-brendovi',
  templateUrl: './brendovi.component.html',
  styleUrls: ['./brendovi.component.css']
})
export class BrendoviComponent {
  constructor(public httpClient:HttpClient,private toastr: ToastrService) {
  }
  ngOnInit(){
    this.getAllBrendovi();
  }
  brendovi:any[]=[];

  getAllBrendovi() {
    let url=MojConfig.adresa_local+'brend-pretraga';

    this.httpClient.get(url).
    subscribe((x:any)=>{
      this.brendovi=x;
    })
  }
  apiUrl=MojConfig.adresa_local+'brend-dodaj'
  postBrend(data:any){

    return this.httpClient.post(this.apiUrl, data);

  }
  brend="";
  rb: number=0;
  sendData(){
    const dataToSend:BrendoviPostRequest={
      naziv:this.brend
    }

    this.postBrend(dataToSend).subscribe(response=>{
      console.log('Uspjesno poslato na API!'+ response);
        this.getAllBrendovi();
    },
      error=>console.log('Greška pri slanju na API: '+ JSON.parse(JSON.stringify(error.error)))
    )
  };


  deleteData(id:number){
    const deleteUrl=MojConfig.adresa_local+'brend-obrisi?BrendID='+id.toString();
    return this.httpClient.delete(deleteUrl);
  }
  izbrisiBrend(brend: any) {
    if(confirm("Jeste li sigurni da želite obrisati brend: "+brend.naziv+"?")) {
      this.deleteData(brend.id).subscribe(response=>{
          console.log('Objekat uspjesno obrisan!', response);
          this.getAllBrendovi();

        },
        error=>{
          console.error('Greška prilikom brisanja objekta: ',JSON.parse(JSON.stringify(error.error)));
        })
    }

  }

  modifikujBrend(brend: any) {
    this.oldBrendObj=JSON.stringify(brend);
    this.brendovi.forEach(element=>{
      element.isEdit=false;
    });
    brend.isEdit=true;
  }

  oldBrendObj:any;

  cancelModification(brend: any) {
    const oldObj=JSON.parse(this.oldBrendObj);
    brend.naziv=oldObj.naziv;
    brend.isEdit=false;
  }

  editBrend(data:any){
    let apiEditUrl=MojConfig.adresa_local+'brend-update'
    return this.httpClient.post(apiEditUrl, data);
  }

  editData(brend:any){
    const dataToUpdate:BrendoviGetAllResponse={
      id:brend.id,
      naziv:brend.naziv
    }

    this.editBrend(dataToUpdate).subscribe(response=>{
        console.log('Uspjesno poslato na API!'+ response);
        this.toastr.info('Uspjesno modifikovan brend', 'Informacija',{
          timeOut:3000,
          closeButton:true
        });

        this.getAllBrendovi();
      },

    error=>{
      console.log('Greška pri slanju na API: '+ JSON.parse(JSON.stringify(error.error)));
      this.toastr.error('Pogreška prilikom modifikovanja brenda.', 'Upozorenje',{
        timeOut:3000, //success, info, warning, error
        closeButton:true
      });
    }


    )
  };
  saveBrendModification(brend: any) {
  if(brend.naziv == "" || brend.naziv === "" || brend.naziv == null)
  {
    alert('Ne može biti prazan string!')

  }
  else {
    this.editData(brend);

  }

  }
}
