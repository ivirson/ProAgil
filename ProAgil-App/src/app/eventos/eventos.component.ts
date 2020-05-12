import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  eventos: any;

  baseUrl = 'https://localhost:44393/eventos';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getEventos();
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
