import { Router } from '@angular/router';
import { GeneroService } from './../services/genero.service';
import { SerieService } from './../services/serie.service';
import { DadosService } from './../services/dados.service';
import { AlertController, ToastController } from '@ionic/angular';
import { IListaSeries, ISeriesApi } from './../models/ISeriesAPI.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  titulo = 'Series';

  listaSeries: IListaSeries;

  generos: string[] = [];

  constructor(public alertController: AlertController,
              public toastController: ToastController,
              public dadosService: DadosService,
              public serieService: SerieService,
              public generoService: GeneroService,
              public route: Router) {}

  buscarSeries(evento: any) {

    console.log(evento.target.value);
    const busca = evento.target.value;
    if(busca && busca.trim() !== ''){

      this.serieService.buscarSeries(busca).subscribe(dados => {

        console.log(dados);
        this.listaSeries = dados;

      });

    }

  }

  exibirSeries(serie: ISeriesApi){

    this.dadosService.guardarDados('serie',serie);
    this.route.navigateByUrl('/dados-series');

  }

  async exibirAlertaFavorito(){

    const alert = await this.alertController.create({

      header: 'Alerta!',
      message: 'Deseja favoritar o filme?',
      buttons: [

        {
          text: 'Cancelar',
          role: 'Cancel',
          handler: (blah) => {
            this.apresentarToastNaoFavoritou();
          }
        },
        {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentarToastFavoritou();
          }
        }

      ]

    });

    await alert.present();
  }

  async apresentarToastFavoritou(){

    const toast = await this.toastController.create({

      message: 'Serie adicionada com sucesso',
      duration: 3000,
      color:'success'

    });
    toast.present();

  }

  async apresentarToastNaoFavoritou(){

    const toast = await this.toastController.create({

      message: 'Ação Cancelada!',
      duration: 3000,
      color:'danger'

    });
    toast.present();

  }

  ngOnInit(){

    this.generoService.buscarGenerosSeries().subscribe(dados => {

      dados.genres.forEach(genero => {

        this.generos[genero.id] = genero.name;

      });

      this.dadosService.guardarDados('generos', this.generos);

    });

  }

}
