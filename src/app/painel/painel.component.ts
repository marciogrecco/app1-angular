import { Component, OnInit, EventEmitter,Output, OnDestroy } from '@angular/core';
import { Frases } from '../topo/shared/frase.model';
import { FRASE } from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {
  public frases: Frases[] = FRASE
  public instrucao: String = 'Traduza a Frase:'
  public resposta: String = ''

  public rodada: number = 0
  public rodadaFrase: Frases
  public progresso: number = 0
  public tentaiva: number = 3
  @Output() public encerrarJogo: EventEmitter<String> =new EventEmitter()

  constructor() {
    this.atualizaRodada()

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Componete painel foi destruido')
  }
  atualizaresposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value


  }

  verificaResposta(): void {

    if (this.rodadaFrase.frasePTbr == this.resposta) {

      alert('A tradução está correta')

      this.rodada++

      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)

      // incrementa rodada
      if (this.rodada === 4) {
        alert('Parabêns você concluiu as traduções com sucesso!!')
        this.encerrarJogo.emit('vitoria')
      }

      // atualiza o objeto da rodada
      this.atualizaRodada()


    } else {
      //diminui a variavel tentativas
      alert(' A tradução está incorreta')
      this.tentaiva--
      if (this.tentaiva === -1) {
        alert('Você perdeu as tentativas')
        this.encerrarJogo.emit('derrota')

      }

    }

  }
  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada]
    // limpar resposta
    this.resposta = ''

  }
}