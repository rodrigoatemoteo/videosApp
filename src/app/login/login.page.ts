import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  senha: string;

  constructor(public toastController: ToastController, private route: Router) {}

  ngOnInit() {
  }

  login(){

    if(this.email === 'admin@admin.com' && this.senha === 'admin'){

      this.route.navigateByUrl('/tabs/tab1');
      this.presentToast('Seja Bem-vindo!','success');

    }else{
      this.presentToast('Usuário ou senha incorretos!','danger');
    }

  }

  async presentToast(texto: string, cor: string){

    const toast = await this.toastController.create({

      message:texto,
      color: cor,
      duration: 3000

    });
    toast.present();

  }

}
