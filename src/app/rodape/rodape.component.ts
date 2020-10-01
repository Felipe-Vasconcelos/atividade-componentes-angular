import { Component } from '@angular/core';

@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.css']
})
export class RodapeComponent {

  salvar(viagemForm) {
    const origem = viagemForm.value.origem;
    const destino = viagemForm.value.destino;
    const dataDePartida = viagemForm.value.dataDePartida;
    const dataDeVolta = viagemForm.value.dataDeVolta;
    console.log(`Origem: ${origem}, Destino: ${destino}, Data de Partida: ${dataDePartida}, Data de Volta: ${dataDeVolta}`)
  }

  valor;

  gerarValor() {
    this.valor = Math.round(Math.random() * 100) + 1;
  }

}
