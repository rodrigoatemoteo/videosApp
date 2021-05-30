import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos';
  listaVideos: IFilme[] = [
    {
      nome:'Snake Eyes: G.I. Joe Origins',
      lancamento:'Estreia:22 de Julho de 2021',
      duracao:'1h e 50min',
      classificacao:76,
      cartaz:'https://cdn.ome.lt/oomMbGcTeNhqIHIKwmUGY2Q9NAU=/fit-in/837x500/smart/uploads/conteudo/fotos/SnakeEyes_WcfFcY6.jpg',
      generos:['Ação', 'Aventura', 'Fantasia']
    },
    {
      nome:'Mortal Kombat',
      lancamento:'Estreia:15 de Abril de 2021',
      duracao:'1h e 40min',
      classificacao:50,
      cartaz:'https://pbs.twimg.com/media/EuhZHMKWQAE84f7?format=jpg&name=large',
      generos:['Ação','Fantasia']
    },
    {
      nome:'Viúva Negra',
      lancamento:'Estreia:9 de Julho de 2021',
      duracao:'1h e 50min',
      classificacao:30,
      cartaz:'https://br.web.img2.acsta.net/pictures/20/03/09/15/51/4538015.jpg',
      generos:['Ação','Aventura']
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

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

}
