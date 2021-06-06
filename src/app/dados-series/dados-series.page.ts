import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';
import { ISeriesApi } from '../models/ISeriesAPI.model';

@Component({
  selector: 'app-dados-series',
  templateUrl: './dados-series.page.html',
  styleUrls: ['./dados-series.page.scss'],
})
export class DadosSeriesPage implements OnInit {

  serie: ISeriesApi;

  generos: string[] = [];

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.serie = this.dadosService.pegarDados('serie');
    this.generos = this.dadosService.pegarDados('generos');
    console.log('Filme enviado! ', this.serie);
  }

}
