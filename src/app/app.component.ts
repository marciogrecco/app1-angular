import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jogoEmAndamento: boolean = true
  public tipoEncerramento: String

  public encerrarJogo(tipo: String): void {

    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
    console.log(tipo);
    this.jogoEmAndamento = false
  }

  public reiniciarJogo(): void{

this.jogoEmAndamento = true
this.tipoEncerramento = undefined
  }
}
