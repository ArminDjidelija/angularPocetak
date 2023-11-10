import { Component } from '@angular/core';

@Component({
  selector: 'app-sedmica4',
  templateUrl: './sedmica4.component.html',
  styleUrls: ['./sedmica4.component.css']
})
export class Sedmica4Component {
  title = 'front-end';

  imena:string[]=[];

  ime="Adil";
  brojac=0;
  novoIme: any;



  testirajDugme1(){
    this.ime+=this.brojac;
    this.brojac++;
    // @ts-ignore
    document.getElementById("prezime").innerHTML=this.brojac.toString();
  }

  resetuj():void {
    this.ime="Adil";
    this.brojac=0;
  }

  isVisible(){
    return this.brojac>5;
  }

  izmjenaImena($event: Event) {
    // @ts-ignore
    this.ime=$event.target.value;
  }

  changeCss() {
    if (this.ime.startsWith('a'))
      return {color:'blue'}
    else
      return {color:'red'}
  }

  dodajNovoIme() {
    this.imena.push(this.novoIme);
  }

  ukloniZadnjeIme() {
    this.imena.pop ();
  }
}
