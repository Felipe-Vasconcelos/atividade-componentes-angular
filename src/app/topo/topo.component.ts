import { Component } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})

export class TopoComponent {
  destinos = ['Butantã', 'Mooca'];
  valores = ['R$ 2000,00', 'R$ 1500,00'];
  contato = ['(11)3333-333X', '(11)3333-333Y']; 
}