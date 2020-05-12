import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  _filtroLista: string;

  get filtroLista() {
    return this._filtroLista;
  }

  set filtroLista(value) {
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.eventos;
  }

  eventos: any;
  eventosFiltrados: any = [];
  imagemLargura = 50;
  imagemMargem =  2;

  mostrarImagem = false;
  iconClass = 'fa-eye';

  baseUrl = 'https://localhost:44393/eventos';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
  }

  alternarImagem() {
    this.mostrarImagem = !this.mostrarImagem;
    this.iconClass = this.iconClass === 'fa-eye' ? 'fa-eye-slash' : 'fa-eye';
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
                evento.local.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  getEventos() {
    this.http.get(this.baseUrl).subscribe(response => {
      // console.table(response);
      this.eventos = response;
    }, error => {
      console.log(error);
    });
  }

}
