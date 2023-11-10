import { Component } from '@angular/core';
import {MojConfig} from "../moj-config";
import {StudentGetallResponse} from "./student-getall-response";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-sedmica5',
  templateUrl: './sedmica5.component.html',
  styleUrls: ['./sedmica5.component.css']
})
export class Sedmica5Component {
  constructor(public httpClient:HttpClient) {

  }
  ngOnInit(){
    let url=MojConfig.adresa_servera+'/Student/Getall';

    this.httpClient.get(url).
    subscribe((x:any)=>{
      this.studenti=x;
    })
  }
  studenti:StudentGetallResponse[]=[];
  pretragaNaziv="";

  getStudenti() {
    let url=MojConfig.adresa_servera+'/Student/Getall';

    this.httpClient.get(url).
    subscribe((x:any)=>{
      this.studenti=x;
    })

    /*fetch(url)
      .then(response=>{
        if(response.status!=200){
          alert("greska na serveru: "+response.statusText);
          return;
        }
        response.json().then(d=>{
          this.studenti=d;
        })
      })

     */
  }

  getFiltriraniStudenti() {
    return this.studenti.filter(x=>(x.ime.toLowerCase()
      + ' '+x.prezime.toLowerCase()).includes(this.pretragaNaziv) ||
      (x.prezime.toLowerCase()+ ' '+x.ime.toLowerCase()).
      includes(this.pretragaNaziv));
  }
}
