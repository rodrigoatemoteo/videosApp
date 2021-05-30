import { Component } from '@angular/core';
import { AlertController, SelectValueAccessor } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

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
