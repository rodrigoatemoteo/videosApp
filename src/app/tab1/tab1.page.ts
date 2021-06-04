import { GeneroService } from './../services/genero.service';
import { IListaFilmes, IFilmeApi } from './../models/IFilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  titulo = 'Filmes';
  listaVideos: IFilme[] = [
    {
      nome:'Snake Eyes: G.I. Joe Origins',
      lancamento:'Estreia:22 de Julho de 2021',
      duracao:'1h e 50min',
      classificacao:76,
      cartaz:'https://cdn.ome.lt/oomMbGcTeNhqIHIKwmUGY2Q9NAU=/fit-in/837x500/smart/uploads/conteudo/fotos/SnakeEyes_WcfFcY6.jpg',
      generos:['Ação', 'Aventura', 'Fantasia'],
      pagina:'/snake-eyes'
    },
    {
      nome:'Mortal Kombat',
      lancamento:'Estreia:15 de Abril de 2021',
      duracao:'1h e 40min',
      classificacao:50,
      cartaz:'https://pbs.twimg.com/media/EuhZHMKWQAE84f7?format=jpg&name=large',
      generos:['Ação','Fantasia'],
      pagina:'/mortal-kombat'
    },
    {
      nome:'Viúva Negra',
      lancamento:'Estreia:9 de Julho de 2021',
      duracao:'1h e 50min',
      classificacao:30,
      cartaz:'https://br.web.img2.acsta.net/pictures/20/03/09/15/51/4538015.jpg',
      generos:['Ação','Aventura'],
      pagina:'/viuva-negra'
    },
    {
      nome:'Godzilla vs Kong',
      lancamento:'Estreia: 31 de Março de 2021',
      duracao:'1h e 53min',
      classificacao:45,
      cartaz:'https://upload.wikimedia.org/wikipedia/pt/e/ea/Godzilla_vs._Kong.jpg',
      generos:['Ficção Científica]','Ação'],
      pagina:''
    },
    {
      nome:'Venom 2: Tempo de carnificina',
      lancamento:'Estreia: 24 de Setembro de 2021',
      duracao:'1h e 45min',
      classificacao:45,
      cartaz:'https://disneyplusbrasil.com.br/wp-content/uploads/2021/03/Venom-2-Poster-Nao-Oficial-843x1024.jpg',
      generos:['Aventura','Quadrinhos'],
      pagina:''
    }
  ];

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(public alertController: AlertController,
              public toastController: ToastController,
              public dadosService: DadosService,
              public filmeService: FilmeService,
              public generoService: GeneroService,
              public route: Router) {}

  buscarFilmes(evento: any) {

    console.log(evento.target.value);
    const busca = evento.target.value;
    if(busca && busca.trim() !== ''){

      this.filmeService.buscarFilmes(busca).subscribe(dados => {

        console.log(dados);
        this.listaFilmes = dados;

      });

    }

  }

  exibirFilme(filme: IFilmeApi){

    this.dadosService.guardarDados('filme',filme);
    this.route.navigateByUrl('/dados-filme');

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

      message: 'Filme adicionado com sucesso',
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

    this.generoService.buscarGeneros().subscribe(dados => {

      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {

        this.generos[genero.id] = genero.name;

      });

      this.dadosService.guardarDados('generos', this.generos);

    });

  }

}
