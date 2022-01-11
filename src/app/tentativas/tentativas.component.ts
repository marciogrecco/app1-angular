import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { Coracao } from '../topo/shared/coracao.model';
@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges{

 
  
  @Input() public Tentativas: number

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)

  ]

  constructor() {
    console.log(this.coracoes)
    

  }
  ngOnChanges() {
    if(this.Tentativas !== this.coracoes.length){
      let indice = this.coracoes.length-this.Tentativas
      this.coracoes[ indice - 1].cheio = false
    }
  
  }

  ngOnInit() {
  
  }

}
